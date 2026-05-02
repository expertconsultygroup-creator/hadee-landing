import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const BASE_URL = Deno.env.get("BASE_URL") || "https://hadee.sa";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "Hadi <onboarding@resend.dev>";

serve(async (req) => {
  try {
    const payload = await req.json();

    // Database webhook sends: { type, table, record, schema, old_record }
    const record = payload.record;
    if (!record || !record.email) {
      return new Response(JSON.stringify({ error: "No record" }), { status: 400 });
    }

    const { email, position, referral_code } = record;
    const referralUrl = `${BASE_URL}/?ref=${referral_code}`;

    // Detect language from email TLD or default to Arabic
    const language = "ar";

    const html = language === "ar" ? getArabicEmail(position, referralUrl) : getEnglishEmail(position, referralUrl);
    const subject =
      language === "ar"
        ? `أهلًا بك في هادي — أنت رقم #${position}`
        : `Welcome to Hadi — You're #${position}`;

    // Send via Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject,
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(JSON.stringify({ error: "Email failed", details: data }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Edge function error:", error);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
});

function getArabicEmail(position: number, referralUrl: string): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#FAFAF7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:56px;height:56px;border-radius:16px;background-color:#248F86;text-align:center;vertical-align:middle;">
                    <span style="color:white;font-size:24px;font-weight:bold;line-height:56px;">هـ</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;border-radius:16px;padding:48px 40px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:48px;height:48px;border-radius:50%;background-color:rgba(36,143,134,0.12);text-align:center;vertical-align:middle;">
                          <span style="color:#248F86;font-size:24px;line-height:48px;">✓</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;">
                    <h1 style="margin:0;font-size:28px;font-weight:600;color:#1A1A1A;line-height:1.5;">أهلًا بك في هادي</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:32px;">
                    <p style="margin:0;font-size:16px;color:rgba(26,26,26,0.6);line-height:1.6;">تم تسجيلك في قائمة الانتظار بنجاح</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color:rgba(36,143,134,0.08);border-radius:12px;padding:20px;text-align:center;">
                          <p style="margin:0 0 4px;font-size:14px;color:rgba(26,26,26,0.6);">ترتيبك في القائمة</p>
                          <p style="margin:0;font-size:36px;font-weight:700;color:#248F86;">#${position}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:32px;">
                    <p style="margin:0;font-size:16px;color:#1A1A1A;line-height:1.7;">سنرسل لك دعوتك فور إطلاق التطبيق.<br>كلما شاركت أصدقاءك، تقدّمت في القائمة.</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom:16px;">
                    <a href="${referralUrl}" style="display:inline-block;background-color:#248F86;color:#ffffff;text-decoration:none;font-size:16px;font-weight:500;padding:14px 32px;border-radius:12px;">شارك رابطك وتقدّم في القائمة ←</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;font-size:13px;color:rgba(26,26,26,0.4);direction:ltr;text-align:center;">${referralUrl}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top:32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:14px;color:rgba(26,26,26,0.6);line-height:1.6;">هادي — رفيقك الهادئ نحو أيام أفضل</p>
              <p style="margin:0;font-size:12px;color:rgba(26,26,26,0.3);">© 2026 هادي. جميع الحقوق محفوظة.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function getEnglishEmail(position: number, referralUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#FAFAF7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:56px;height:56px;border-radius:16px;background-color:#248F86;text-align:center;vertical-align:middle;">
                    <span style="color:white;font-size:24px;font-weight:bold;line-height:56px;">H</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;border-radius:16px;padding:48px 40px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:48px;height:48px;border-radius:50%;background-color:rgba(36,143,134,0.12);text-align:center;vertical-align:middle;">
                          <span style="color:#248F86;font-size:24px;line-height:48px;">✓</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;">
                    <h1 style="margin:0;font-size:28px;font-weight:600;color:#1A1A1A;line-height:1.3;letter-spacing:-0.02em;">Welcome to Hadi</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:32px;">
                    <p style="margin:0;font-size:16px;color:rgba(26,26,26,0.6);line-height:1.5;">You've been added to the waitlist</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color:rgba(36,143,134,0.08);border-radius:12px;padding:20px;text-align:center;">
                          <p style="margin:0 0 4px;font-size:14px;color:rgba(26,26,26,0.6);">Your position</p>
                          <p style="margin:0;font-size:36px;font-weight:700;color:#248F86;">#${position}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:32px;">
                    <p style="margin:0;font-size:16px;color:#1A1A1A;line-height:1.7;">We'll send your invite as soon as we launch.<br>Share with friends to move up the list.</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom:16px;">
                    <a href="${referralUrl}" style="display:inline-block;background-color:#248F86;color:#ffffff;text-decoration:none;font-size:16px;font-weight:500;padding:14px 32px;border-radius:12px;">Share your link to skip the line →</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;font-size:13px;color:rgba(26,26,26,0.4);text-align:center;">${referralUrl}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top:32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:14px;color:rgba(26,26,26,0.6);line-height:1.5;">Hadi — Your quiet companion for better days</p>
              <p style="margin:0;font-size:12px;color:rgba(26,26,26,0.3);">© 2026 Hadi. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
