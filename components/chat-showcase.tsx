"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Language, translations } from "@/lib/translations";

interface ChatShowcaseProps {
  language: Language;
}

export function ChatShowcase({ language }: ChatShowcaseProps) {
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();
  const isRtl = language === "ar";

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
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone with chat screen */}
          <motion.div
            {...fadeUp(0)}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[280px] h-[572px] sm:w-[300px] sm:h-[612px]">
              {/* Phone outer frame */}
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-[42px] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]" />

              {/* Phone screen */}
              <div className="absolute inset-[3px] bg-white rounded-[39px] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-[#1A1A1A] rounded-full z-10" />

                {/* Chat app screen */}
                <div
                  className="absolute inset-0 flex flex-col bg-surface"
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  {/* Status bar spacer */}
                  <div className="h-12 shrink-0" />

                  {/* Chat header bar */}
                  <div className="bg-primary px-4 py-3 flex items-center gap-2.5 shrink-0">
                    {/* Back arrow */}
                    <svg
                      className={`w-4 h-4 text-white/70 shrink-0 ${isRtl ? "" : "rotate-180"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Image
                        src="/logo.jpg"
                        alt="Hadi"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-[13px] leading-tight">
                        {isRtl ? "هادي" : "Hadi"}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <p className="text-white/60 text-[10px]">
                          {isRtl ? "متصل الآن" : "Online now"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Messages area */}
                  <div className="flex-1 px-3 py-3 space-y-3 overflow-hidden">
                    {/* Bot welcome message */}
                    <div className="flex gap-1.5 items-end">
                      <div className="w-5 h-5 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                        <Sparkles className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-es-sm px-3 py-2 max-w-[82%] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                        <p className="text-[11px] text-text-primary leading-[1.5]">
                          {t.chatWelcome}
                        </p>
                      </div>
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-primary text-white rounded-2xl rounded-ee-sm px-3 py-2 max-w-[78%]">
                        <p className="text-[11px] leading-[1.5]">
                          {t.chatUserMsg}
                        </p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex gap-1.5 items-end">
                      <div className="w-5 h-5 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                        <Sparkles className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-es-sm px-3 py-2 max-w-[82%] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                        <p className="text-[11px] text-text-primary leading-[1.5]">
                          {t.chatBotReply}
                        </p>
                      </div>
                    </div>

                    {/* Suggested prompts */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {t.chatSuggestions.map((suggestion, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary-soft text-primary text-[9px] font-medium"
                        >
                          {suggestion}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="px-3 pb-2 shrink-0">
                    <div className="flex items-center gap-2 bg-white rounded-full border border-border px-3 py-2">
                      <span className="text-[11px] text-text-muted flex-1">
                        {t.chatPlaceholder}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <svg
                          className={`w-3 h-3 text-white ${isRtl ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 2L11 13" />
                          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="h-5 flex items-center justify-center shrink-0">
                    <div className="w-[100px] h-[4px] bg-[#1A1A1A]/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="flex-1 text-center lg:text-start">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                {t.chatEyebrow}
              </div>
            </motion.div>

            <motion.h2
              {...fadeUp(1)}
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text-primary mb-4"
              style={{
                letterSpacing: language === "en" ? "-0.02em" : "0",
                lineHeight: language === "ar" ? "1.5" : "1.2",
              }}
            >
              {t.chatTitle}
            </motion.h2>

            <motion.p
              {...fadeUp(2)}
              className="text-text-secondary text-lg leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0"
              style={{ lineHeight: language === "ar" ? "1.8" : "1.7" }}
            >
              {t.chatDesc}
            </motion.p>

            {/* Feature bullets */}
            <motion.ul {...fadeUp(3)} className="space-y-4">
              {t.chatFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-text-secondary leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
