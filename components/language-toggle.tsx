"use client";

import { Language } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <div className="fixed top-6 right-6 rtl:right-auto rtl:left-6 z-50">
      <button
        onClick={() => onToggle(language === "ar" ? "en" : "ar")}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 rounded-2xl",
          "bg-white/80 backdrop-blur-sm border border-border",
          "text-sm font-medium text-text-primary",
          "transition-all duration-200 hover:bg-white hover:shadow-sm",
          "focus-ring"
        )}
        aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      >
        <span className={cn(language === "en" && "text-primary font-semibold")}>
          EN
        </span>
        <span className="text-border">|</span>
        <span className={cn(language === "ar" && "text-primary font-semibold")}>
          ع
        </span>
      </button>
    </div>
  );
}
