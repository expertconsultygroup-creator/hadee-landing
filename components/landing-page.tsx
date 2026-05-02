"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Language, translations } from "@/lib/translations";
import { LanguageToggle } from "./language-toggle";
import { WaitlistForm } from "./waitlist-form";

const WAITLIST_COUNT = 847;

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem("hadi-lang") as Language | null;
    if (stored && (stored === "ar" || stored === "en")) {
      setLanguage(stored);
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
  };

  const t = translations[language];

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        };

  const fadeIn = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, delay, ease: "easeOut" },
        };

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <LanguageToggle language={language} onToggle={handleToggle} />

      <div className="w-full max-w-[520px] flex flex-col items-center text-center space-y-8">
        {/* Logo */}
        <motion.div {...fadeUp(0)}>
          <Image
            src="/logo.png"
            alt="هادي"
            width={56}
            height={56}
            className="rounded-2xl"
            priority
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          {...fadeIn(0.15)}
          className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted"
        >
          ─── {t.eyebrow} ───
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.25)}
          className={
            language === "ar"
              ? "font-readex text-4xl sm:text-5xl font-semibold leading-[1.5] text-text-primary"
              : "font-fraunces text-4xl sm:text-5xl font-normal leading-[1.2] text-text-primary tracking-tight"
          }
        >
          {t.headline}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeIn(0.45)}
          className="text-text-muted text-base sm:text-lg max-w-[400px] leading-relaxed"
        >
          {t.subHeadline}
        </motion.p>

        {/* Form */}
        <motion.div {...fadeUp(0.6)} className="w-full max-w-[440px]">
          <WaitlistForm language={language} />
        </motion.div>

        {/* Counter */}
        <motion.p
          {...fadeIn(0.8)}
          className="text-xs text-text-muted"
        >
          {t.counter(WAITLIST_COUNT)}
        </motion.p>

        {/* Footer */}
        <motion.footer
          {...fadeIn(0.9)}
          className="pt-8 text-xs text-text-muted/60"
        >
          © 2026 هادي
        </motion.footer>
      </div>
    </main>
  );
}
