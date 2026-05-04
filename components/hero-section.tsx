"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Language, translations } from "@/lib/translations";
import { PhoneMockup } from "./phone-mockup";
import { WaitlistForm } from "./waitlist-form";

const WAITLIST_COUNT = 2400;

interface HeroSectionProps {
  language: Language;
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.5,
            delay: delay * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        };

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-20 md:pt-32 md:pb-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text column */}
          <div className="flex-1 text-center lg:text-start max-w-xl lg:max-w-none">
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.eyebrow}
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(1)}
              className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold text-text-primary leading-[1.15] mb-6 whitespace-pre-line"
              style={{
                letterSpacing: language === "en" ? "-0.02em" : "0",
                lineHeight: language === "ar" ? "1.4" : "1.15",
              }}
            >
              {t.headline}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp(2)}
              className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0 lg:max-w-none"
              style={{ lineHeight: language === "ar" ? "1.7" : "1.6" }}
            >
              {t.subHeadline}
            </motion.p>

            {/* Store badges (disabled - coming soon) */}
            <motion.div {...fadeUp(3)} className="mb-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                {/* App Store badge */}
                <StoreBadge type="apple" language={language} />
                {/* Google Play badge */}
                <StoreBadge type="google" language={language} />
              </div>
              <p className="text-xs text-text-muted text-center lg:text-start">
                {t.comingSoon}
              </p>
            </motion.div>

            {/* Waitlist form */}
            <motion.div {...fadeUp(4)} className="max-w-[480px] mx-auto lg:mx-0 mb-6">
              <WaitlistForm language={language} />
            </motion.div>

            {/* Counter */}
            <motion.p
              {...fadeUp(5)}
              className="text-sm text-text-muted text-center lg:text-start"
            >
              {t.waitlistCount(WAITLIST_COUNT)}
            </motion.p>
          </div>

          {/* Phone column */}
          <motion.div
            {...fadeUp(3)}
            className="flex-shrink-0 lg:flex-1 flex justify-center"
            style={shouldReduceMotion ? {} : { y: phoneY }}
          >
            <div className="lg:rotate-6 transition-transform">
              <PhoneMockup language={language} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StoreBadge({
  type,
  language,
}: {
  type: "apple" | "google";
  language: Language;
}) {
  const isApple = type === "apple";

  return (
    <div
      className="relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#1A1A1A]/60 text-white opacity-50 cursor-not-allowed select-none"
      title={language === "ar" ? "متاح قريبًا" : "Available soon"}
    >
      {isApple ? (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.664l2.456 1.424c.732.423.732 1.642 0 2.066l-2.456 1.424-2.536-2.536 2.536-2.378zM5.864 2.658L16.8 8.991l-2.302 2.302-8.634-8.635z" />
        </svg>
      )}
      <div className="flex flex-col">
        <span className="text-[9px] leading-none opacity-80">
          {isApple
            ? language === "ar"
              ? "حمّل من"
              : "Download on the"
            : language === "ar"
            ? "احصل عليه من"
            : "Get it on"}
        </span>
        <span className="text-sm font-semibold leading-tight">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </div>
    </div>
  );
}
