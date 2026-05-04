"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface TrustStripProps {
  language: Language;
}

export function TrustStrip({ language }: TrustStripProps) {
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 0.5 },
                viewport: { once: true, margin: "-100px" },
              })}
          className="bg-surface-deep rounded-2xl py-6 px-8"
        >
          <p className="flex items-center justify-center gap-3 text-center text-text-secondary text-sm sm:text-base">
            <Shield className="w-5 h-5 text-primary shrink-0" />
            <span className="leading-relaxed">{t.trustStatement}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
