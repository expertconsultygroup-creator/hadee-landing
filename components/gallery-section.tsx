"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SmilePlus, Wind, BookOpen, TrendingUp } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface GallerySectionProps {
  language: Language;
}

export function GallerySection({ language }: GallerySectionProps) {
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();
  const isRtl = language === "ar";

  const screens = [
    {
      caption: t.screen1Caption,
      Icon: SmilePlus,
      gradient: "from-blue-50 to-blue-100/60",
      iconBg: "bg-blue-100",
      iconColor: "text-primary",
    },
    {
      caption: t.screen2Caption,
      Icon: Wind,
      gradient: "from-teal-50 to-teal-100/60",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      caption: t.screen3Caption,
      Icon: BookOpen,
      gradient: "from-amber-50 to-amber-100/60",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
    },
    {
      caption: t.screen4Caption,
      Icon: TrendingUp,
      gradient: "from-violet-50 to-violet-100/60",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
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
          {t.galleryEyebrow}
        </motion.p>
      </div>

      {/* Scrollable gallery */}
      <div
        className="overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div
          className="flex gap-4 px-6 md:px-8 lg:px-12"
          style={{
            width: "max-content",
            direction: isRtl ? "rtl" : "ltr",
          }}
        >
          {/* Left spacer for centering on large screens */}
          <div className="hidden lg:block w-[calc((100vw-1200px)/2)] shrink-0" />

          {screens.map((screen, i) => (
            <motion.div
              key={i}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: i * 0.1 },
                    viewport: { once: true, margin: "-50px" },
                  })}
              className="shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Phone-shaped card */}
              <div
                className={`w-[200px] h-[380px] sm:w-[220px] sm:h-[420px] rounded-[32px] bg-gradient-to-b ${screen.gradient} border border-border flex flex-col items-center justify-center p-6 transition-transform duration-200 hover:-translate-y-1`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${screen.iconBg} flex items-center justify-center mb-4`}
                >
                  <screen.Icon className={`w-7 h-7 ${screen.iconColor}`} />
                </div>

                {/* Placeholder UI lines */}
                <div className="w-full space-y-2 mt-4">
                  <div className="h-2 bg-white/60 rounded-full w-3/4 mx-auto" />
                  <div className="h-2 bg-white/40 rounded-full w-1/2 mx-auto" />
                  <div className="mt-4 h-8 bg-white/50 rounded-xl w-full" />
                  <div className="h-8 bg-white/30 rounded-xl w-full" />
                  <div className="h-8 bg-white/20 rounded-xl w-full" />
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-sm text-text-secondary mt-3 font-medium">
                {screen.caption}
              </p>
            </motion.div>
          ))}

          {/* Right spacer */}
          <div className="hidden lg:block w-[calc((100vw-1200px)/2)] shrink-0" />
        </div>
      </div>
    </section>
  );
}
