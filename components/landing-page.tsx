"use client";

import { useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";
import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { TrustStrip } from "./trust-strip";
import { FeaturesSection } from "./features-section";
import { ChatShowcase } from "./chat-showcase";
import { ReportsShowcase } from "./reports-showcase";
import { GallerySection } from "./gallery-section";
import { FaqSection } from "./faq-section";
import { CtaSection } from "./cta-section";
import { Footer } from "./footer";

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hadi-lang") as Language | null;
    if (stored && (stored === "ar" || stored === "en")) {
      setLanguage(stored);
    }

    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang") as Language | null;
    if (langParam && (langParam === "ar" || langParam === "en")) {
      setLanguage(langParam);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("hadi-lang", language);

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", translations[language].subHeadline);
    }
  }, [language, mounted]);

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Header language={language} onToggle={handleToggle} />
      <main>
        <HeroSection language={language} />
        <TrustStrip language={language} />
        <FeaturesSection language={language} />
        <ChatShowcase language={language} />
        <ReportsShowcase language={language} />
        <GallerySection language={language} />
        <FaqSection language={language} />
        <CtaSection language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
