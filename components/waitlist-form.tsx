"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  language: Language;
}

export function WaitlistForm({ language }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [position, setPosition] = useState(0);
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);

  const t = translations[language];

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage(t.error);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, language }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || t.serverError);

      setPosition(data.position);
      setReferralCode(data.referralCode);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : t.serverError);
    }
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/?ref=${referralCode}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.2 },
      };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div key="success" {...motionProps} className="text-center space-y-3">
            <p className="text-primary font-medium text-lg flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              {t.successTitle}
            </p>
            <p className="text-text-primary font-medium">
              {t.successNumber(position)}
            </p>
            <p className="text-text-muted text-sm">{t.successMessage}</p>
            <button
              onClick={handleShare}
              className={cn(
                "mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
                "text-sm font-medium text-primary",
                "bg-primary-soft hover:bg-primary-tint",
                "transition-colors duration-200",
                "focus-ring"
              )}
            >
              {copied ? t.copied : t.share}
              {!copied && (
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              )}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            {...motionProps}
            onSubmit={handleSubmit}
            className="w-full"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <label htmlFor="waitlist-email" className="sr-only">
                  {t.placeholder}
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder={t.placeholder}
                  dir={language === "ar" ? "rtl" : "ltr"}
                  className={cn(
                    "w-full px-5 py-3.5 rounded-xl",
                    "bg-white border border-border",
                    "text-text-primary placeholder:text-text-muted",
                    "transition-all duration-200",
                    "hover:border-primary/30",
                    "focus-ring",
                    status === "error" && "border-error/40"
                  )}
                  required
                  autoComplete="email"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "px-6 py-3.5 rounded-xl",
                  "bg-primary text-white font-medium",
                  "transition-all duration-200",
                  "hover:bg-primary-deep hover:scale-[1.02]",
                  "disabled:opacity-60 disabled:cursor-not-allowed",
                  "focus-ring",
                  "whitespace-nowrap flex items-center justify-center gap-2",
                  "min-h-[48px]"
                )}
              >
                {status === "loading" ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <>
                    {t.cta}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </>
                )}
              </button>
            </div>
            {status === "error" && errorMessage && (
              <p className="mt-2 text-sm text-error px-1" role="alert">
                {errorMessage}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
