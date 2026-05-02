import type { Metadata } from "next";
import { Fraunces, Inter, Readex_Pro } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const readexPro = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-readex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://hadi.app"),
  title: "هادي — رفيقك الهادئ نحو أيام أفضل",
  description: "تطبيق واحد. دقيقة واحدة. نسخة أهدأ وأصح منك.",
  openGraph: {
    title: "هادي — رفيقك الهادئ نحو أيام أفضل",
    description: "تطبيق واحد. دقيقة واحدة. نسخة أهدأ وأصح منك.",
    images: ["/api/og"],
  },
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
      className={`${fraunces.variable} ${inter.variable} ${readexPro.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-surface text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
