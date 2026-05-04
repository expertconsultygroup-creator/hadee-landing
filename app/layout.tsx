import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-ar",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://hadee.sa"),
  title: {
    default: "Hadi — Your calm companion for better days | رفيقك الهادئ نحو أيام أفضل",
    template: "%s | Hadi",
  },
  description:
    "A gentle daily check-in for your mental health. Track, breathe, reflect — whenever you need it. مساحة يومية هادئة لتتبع حالتك والاعتناء بنفسك.",
  openGraph: {
    title: "Hadi — هادي",
    description: "Your calm companion for better days. رفيقك الهادئ نحو أيام أفضل.",
    images: ["/api/og"],
    locale: "ar_SA",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${plexSans.variable} ${plexArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-surface text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
