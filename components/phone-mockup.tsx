"use client";

import { Language, translations } from "@/lib/translations";

interface PhoneMockupProps {
  language: Language;
  className?: string;
}

export function PhoneMockup({ language, className = "" }: PhoneMockupProps) {
  const t = translations[language];
  const isRtl = language === "ar";

  return (
    <div className={`relative ${className}`}>
      {/* iPhone frame */}
      <div className="relative w-[260px] h-[530px] sm:w-[280px] sm:h-[572px] mx-auto">
        {/* Outer frame */}
        <div className="absolute inset-0 bg-[#1A1A1A] rounded-[42px] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]" />

        {/* Screen bezel */}
        <div className="absolute inset-[3px] bg-white rounded-[39px] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-[#1A1A1A] rounded-full z-10" />

          {/* Screen content - Mood check-in placeholder */}
          <div
            className="absolute inset-0 flex flex-col"
            dir={isRtl ? "rtl" : "ltr"}
            style={{
              background:
                "linear-gradient(180deg, #EBF4FF 0%, #FAFAF7 40%, #FAFAF7 100%)",
            }}
          >
            {/* Status bar area */}
            <div className="h-14 shrink-0" />

            {/* App content */}
            <div className="flex-1 px-5 flex flex-col">
              {/* Date pill */}
              <div className="flex justify-center mb-4">
                <div className="px-3 py-1 bg-primary-soft rounded-full">
                  <span className="text-[10px] font-medium text-primary">
                    {isRtl ? "اليوم" : "Today"}
                  </span>
                </div>
              </div>

              {/* Greeting */}
              <h3
                className="text-center text-[17px] font-semibold text-text-primary mb-6"
                style={{ letterSpacing: isRtl ? 0 : "-0.01em" }}
              >
                {t.mockupGreeting}
              </h3>

              {/* Mood options */}
              <div className="flex justify-center gap-3 mb-6">
                {[
                  { emoji: "\u{1F60A}", label: t.mockupMood1, color: "#2D7A4F" },
                  { emoji: "\u{1F642}", label: t.mockupMood2, color: "#2563A0" },
                  { emoji: "\u{1F610}", label: t.mockupMood3, color: "#D4A853" },
                  { emoji: "\u{1F614}", label: t.mockupMood4, color: "#B87333" },
                  { emoji: "\u{1F62E}\u200D\u{1F4A8}", label: t.mockupMood5, color: "#B84A3E" },
                ].map((mood, i) => (
                  <button
                    key={i}
                    className="flex flex-col items-center gap-1 group"
                    tabIndex={-1}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform ${
                        i === 1 ? "ring-2 ring-primary scale-110" : ""
                      }`}
                      style={{
                        backgroundColor: `${mood.color}14`,
                      }}
                    >
                      {mood.emoji}
                    </div>
                    <span className="text-[9px] text-text-muted">
                      {mood.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Insight card */}
              <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-primary-soft flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563A0"
                      strokeWidth="2.5"
                    >
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-medium text-text-primary">
                    {isRtl ? "تنفّس عميق" : "Deep breathing"}
                  </span>
                </div>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  {isRtl
                    ? "٣ دقائق من التنفّس الهادئ لبداية أفضل."
                    : "3 minutes of calm breathing for a better start."}
                </p>
              </div>

              {/* Streak */}
              <div className="bg-accent-soft rounded-2xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">
                  {"\u{1F525}"}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-text-primary">
                    {isRtl ? "٧ أيام متتالية" : "7-day streak"}
                  </p>
                  <p className="text-[9px] text-text-muted">
                    {isRtl ? "استمر بالعناية بنفسك" : "Keep taking care of yourself"}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom nav bar */}
            <div className="h-16 bg-white/80 backdrop-blur-sm border-t border-border flex items-center justify-around px-8 shrink-0">
              {[
                "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              ].map((path, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 ${i === 0 ? "text-primary" : "text-text-muted/40"}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={path} />
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
    </div>
  );
}
