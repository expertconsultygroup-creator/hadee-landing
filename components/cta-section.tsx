"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Language, translations } from "@/lib/translations";
import { WaitlistForm } from "./waitlist-form";

interface CtaSectionProps {
  language: Language;
}

export function CtaSection({ language }: CtaSectionProps) {
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: delay * 0.1 },
          viewport: { once: true, margin: "-100px" },
        };

  return (
    <section id="final-cta" className="py-24 md:py-32">
      <div className="mx-auto max-w-[640px] px-6 md:px-8 lg:px-12 text-center">
        <motion.h2
          {...fadeUp(0)}
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text-primary mb-4"
          style={{
            letterSpacing: language === "en" ? "-0.02em" : "0",
            lineHeight: language === "ar" ? "1.5" : "1.2",
          }}
        >
          {t.ctaHeadline}
        </motion.h2>

        <motion.p
          {...fadeUp(1)}
          className="text-text-secondary text-lg mb-10 leading-relaxed"
        >
          {t.ctaSub}
        </motion.p>

        <motion.div {...fadeUp(2)} className="max-w-[480px] mx-auto">
          <WaitlistForm language={language} />
        </motion.div>
      </div>
    </section>
  );
}
