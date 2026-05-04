"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Language } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface HeaderProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

export function Header({ language, onToggle }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCta = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Hadi"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <span className="text-lg font-semibold text-text-primary">
              {language === "ar" ? "هادي" : "Hadi"}
            </span>
          </div>

          {/* Language toggle */}
          <button
            onClick={() => onToggle(language === "ar" ? "en" : "ar")}
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full",
              "bg-surface-raised/80 backdrop-blur-sm border border-border",
              "text-sm font-medium text-text-primary",
              "transition-all duration-200 hover:bg-surface-raised hover:shadow-sm",
              "focus-ring"
            )}
            aria-label={
              language === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
          >
            <span
              className={cn(
                "transition-colors",
                language === "en" && "text-primary font-semibold"
              )}
            >
              EN
            </span>
            <span className="text-text-muted">|</span>
            <span
              className={cn(
                "transition-colors",
                language === "ar" && "text-primary font-semibold"
              )}
            >
              ع
            </span>
          </button>

          {/* Download CTA */}
          <button
            onClick={scrollToCta}
            className={cn(
              "hidden sm:inline-flex items-center px-5 py-2 rounded-full",
              "bg-primary text-white text-sm font-medium",
              "transition-all duration-200",
              "hover:bg-primary-deep hover:scale-[1.02]",
              "focus-ring"
            )}
          >
            {language === "ar" ? "حمّل التطبيق" : "Download"}
          </button>
        </div>
      </div>
    </header>
  );
}
