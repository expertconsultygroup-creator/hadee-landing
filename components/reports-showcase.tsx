"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, TrendingUp, Moon, Flame, Wind } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface ReportsShowcaseProps {
  language: Language;
}

export function ReportsShowcase({ language }: ReportsShowcaseProps) {
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

  const moodData = [3.2, 3.8, 4.1, 3.5, 4.3, 4.0, 4.5];
  const sleepData = [6.5, 7.2, 7.8, 6.0, 7.5, 8.1, 7.3];
  const days = isRtl
    ? ["سبت", "أحد", "إثن", "ثلا", "أرب", "خمي", "جمع"]
    : ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const maxMood = 5;
  const maxSleep = 10;

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text column */}
          <div className="flex-1 text-center lg:text-start">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft text-amber-700 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                {t.reportsEyebrow}
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
              {t.reportsTitle}
            </motion.h2>

            <motion.p
              {...fadeUp(2)}
              className="text-text-secondary text-lg leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0"
              style={{ lineHeight: language === "ar" ? "1.8" : "1.7" }}
            >
              {t.reportsDesc}
            </motion.p>

            <motion.ul {...fadeUp(3)} className="space-y-4">
              {t.reportsFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-amber-700"
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

          {/* Phone with reports screen */}
          <motion.div
            {...fadeUp(0)}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[280px] h-[572px] sm:w-[300px] sm:h-[612px]">
              {/* Phone outer frame */}
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-[42px] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]" />

              {/* Phone screen */}
              <div className="absolute inset-[3px] bg-surface rounded-[39px] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-[#1A1A1A] rounded-full z-10" />

                {/* Reports app screen */}
                <div
                  className="absolute inset-0 flex flex-col"
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  {/* Status bar spacer */}
                  <div className="h-14 shrink-0" />

                  {/* Page title */}
                  <div className="px-4 pb-3 shrink-0">
                    <h3 className="text-[15px] font-bold text-text-primary">
                      {t.reportsEyebrow}
                    </h3>
                    <p className="text-[10px] text-text-muted mt-0.5">
                      {t.reportsLast7}
                    </p>
                  </div>

                  {/* Scrollable content */}
                  <div className="flex-1 px-3 space-y-2.5 overflow-hidden">
                    {/* Stats grid (2x2) */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        {
                          icon: TrendingUp,
                          value: "4.2",
                          label: t.reportsMoodAvg,
                          bg: "bg-blue-50",
                          iconBg: "bg-blue-100",
                          iconColor: "text-primary",
                          suffix: "/5",
                        },
                        {
                          icon: Moon,
                          value: "7.3",
                          label: t.reportsSleepAvg,
                          bg: "bg-violet-50",
                          iconBg: "bg-violet-100",
                          iconColor: "text-violet-600",
                          suffix: isRtl ? " س" : "h",
                        },
                        {
                          icon: Flame,
                          value: "12",
                          label: t.reportsStreak,
                          bg: "bg-amber-50",
                          iconBg: "bg-amber-100",
                          iconColor: "text-amber-600",
                          suffix: "",
                        },
                        {
                          icon: Wind,
                          value: "8",
                          label: t.reportsBreathing,
                          bg: "bg-teal-50",
                          iconBg: "bg-teal-100",
                          iconColor: "text-teal-600",
                          suffix: "",
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className={`${stat.bg} rounded-xl p-3 border border-white/60`}
                        >
                          <div
                            className={`w-6 h-6 ${stat.iconBg} rounded-md flex items-center justify-center mb-1.5`}
                          >
                            <stat.icon
                              className={`w-3 h-3 ${stat.iconColor}`}
                            />
                          </div>
                          <p className="text-[17px] font-bold text-text-primary leading-tight">
                            {stat.value}
                            <span className="text-[10px] font-normal text-text-muted">
                              {stat.suffix}
                            </span>
                          </p>
                          <p className="text-[9px] text-text-muted mt-0.5">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Mood trend chart */}
                    <div className="bg-white rounded-xl p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-semibold text-text-primary">
                          {t.reportsMoodTrend}
                        </p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-primary" />
                          <span className="text-[9px] text-primary font-medium">
                            +12%
                          </span>
                        </div>
                      </div>

                      {/* Bar chart */}
                      <div className="flex items-end justify-between gap-1.5 h-[72px]">
                        {moodData.map((value, i) => {
                          const height = (value / maxMood) * 100;
                          const isHighest = value === Math.max(...moodData);
                          return (
                            <div
                              key={i}
                              className="flex-1 flex flex-col items-center gap-1"
                            >
                              <motion.div
                                initial={
                                  shouldReduceMotion ? {} : { height: 0 }
                                }
                                whileInView={{
                                  height: `${height}%`,
                                }}
                                transition={{
                                  duration: shouldReduceMotion ? 0 : 0.6,
                                  delay: i * 0.05,
                                }}
                                viewport={{ once: true }}
                                className={`w-full rounded-md ${
                                  isHighest ? "bg-primary" : "bg-primary/25"
                                }`}
                                style={{ minHeight: 4 }}
                              />
                              <span className="text-[8px] text-text-muted">
                                {days[i]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Sleep chart */}
                    <div className="bg-white rounded-xl p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-semibold text-text-primary">
                          {isRtl ? "جودة النوم" : "Sleep quality"}
                        </p>
                        <div className="flex items-center gap-1">
                          <Moon className="w-3 h-3 text-violet-500" />
                          <span className="text-[9px] text-violet-500 font-medium">
                            {isRtl ? "٧.٣ س متوسط" : "7.3h avg"}
                          </span>
                        </div>
                      </div>

                      {/* Sleep bars */}
                      <div className="flex items-end justify-between gap-1.5 h-[60px]">
                        {sleepData.map((value, i) => {
                          const height = (value / maxSleep) * 100;
                          const isHighest = value === Math.max(...sleepData);
                          return (
                            <div
                              key={i}
                              className="flex-1 flex flex-col items-center gap-1"
                            >
                              <motion.div
                                initial={
                                  shouldReduceMotion ? {} : { height: 0 }
                                }
                                whileInView={{
                                  height: `${height}%`,
                                }}
                                transition={{
                                  duration: shouldReduceMotion ? 0 : 0.6,
                                  delay: i * 0.05 + 0.3,
                                }}
                                viewport={{ once: true }}
                                className={`w-full rounded-md ${
                                  isHighest
                                    ? "bg-violet-500"
                                    : "bg-violet-300/40"
                                }`}
                                style={{ minHeight: 4 }}
                              />
                              <span className="text-[8px] text-text-muted">
                                {days[i]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Weekly insight card */}
                    <div className="bg-accent-soft rounded-xl p-3 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 text-sm">
                        {"\u{1F4A1}"}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold text-text-primary">
                          {isRtl ? "ملخص الأسبوع" : "Weekly insight"}
                        </p>
                        <p className="text-[9px] text-text-muted leading-relaxed">
                          {isRtl
                            ? "مزاجك تحسّن بنسبة ١٢٪ هذا الأسبوع. استمر!"
                            : "Your mood improved 12% this week. Keep going!"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav bar */}
                  <div className="h-14 bg-white/80 backdrop-blur-sm border-t border-border flex items-center justify-around px-6 shrink-0">
                    {[
                      {
                        path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                        active: false,
                      },
                      {
                        path: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                        active: false,
                      },
                      {
                        path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                        active: true,
                      },
                      {
                        path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                        active: false,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 ${
                          item.active ? "text-primary" : "text-text-muted/40"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={item.path} />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Home indicator */}
                  <div className="h-5 flex items-center justify-center shrink-0">
                    <div className="w-[100px] h-[4px] bg-[#1A1A1A]/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
