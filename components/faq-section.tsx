"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface FaqSectionProps {
  language: Language;
}

export function FaqSection({ language }: FaqSectionProps) {
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[720px] px-6 md:px-8 lg:px-12">
        <motion.p
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                viewport: { once: true, margin: "-100px" },
              })}
          className="text-center text-sm font-medium text-primary uppercase tracking-widest mb-12"
        >
          {t.faqEyebrow}
        </motion.p>

        <div className="space-y-2">
          {t.faq.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                {...(shouldReduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.4, delay: i * 0.05 },
                      viewport: { once: true, margin: "-50px" },
                    })}
                className="bg-surface-raised rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-6 py-5 text-start",
                    "transition-colors duration-200",
                    "hover:bg-primary-soft/50",
                    "focus-ring rounded-2xl"
                  )}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-text-primary">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-text-muted shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
