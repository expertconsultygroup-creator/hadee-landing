import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getWaitlistEmailHtml } from "@/lib/email-template";
import { Resend } from "resend";

function generateReferralCode(): string {
  return Math.random().toString(36).substring(2, 8);
}

export async function POST(request: NextRequest) {
  try {
    const { email, language = "ar" } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // Check if email already exists
    const { data: existing } = await supabase
      .from("waitlist")
      .select("position, referral_code")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json({
        position: existing.position,
        referralCode: existing.referral_code,
      });
    }

    // Get current count for position
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    const position = (count || 0) + 848;
    const referralCode = generateReferralCode();

    // Get referrer from URL
    const refParam = request.nextUrl.searchParams.get("ref");

    // Insert new signup
    const { error } = await supabase.from("waitlist").insert({
      email,
      position,
      referral_code: referralCode,
      referred_by: refParam || null,
    });

    if (error) {
      if (error.code === "23505") {
        const { data: justInserted } = await supabase
          .from("waitlist")
          .select("position, referral_code")
          .eq("email", email)
          .single();

        return NextResponse.json({
          position: justInserted?.position || position,
          referralCode: justInserted?.referral_code || referralCode,
        });
      }
      throw error;
    }

    // Send confirmation email
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const baseUrl = process.env.NEXT_PUBLIC_URL || "https://hadee.sa";
      const lang = language === "en" ? "en" : "ar";

      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Hadi <onboarding@resend.dev>",
          to: email,
          subject:
            lang === "ar"
              ? `أهلًا بك في هادي — أنت رقم #${position}`
              : `Welcome to Hadi — You're #${position}`,
          html: getWaitlistEmailHtml({
            position,
            referralCode,
            language: lang,
            baseUrl,
          }),
        });
      } catch (emailError) {
        console.error("Email send failed:", emailError);
      }
    }

    return NextResponse.json({ position, referralCode });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
