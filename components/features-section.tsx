"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, BarChart3, Lock } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface FeaturesSectionProps {
  language: Language;
}

const icons = [MessageCircle, BarChart3, Lock];

export function FeaturesSection({ language }: FeaturesSectionProps) {
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();

  const features = [
    { title: t.feature1Title, desc: t.feature1Desc, Icon: icons[0] },
    { title: t.feature2Title, desc: t.feature2Desc, Icon: icons[1] },
    { title: t.feature3Title, desc: t.feature3Desc, Icon: icons[2] },
  ];

  const cardAnim = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: delay * 0.1 },
          viewport: { once: true, margin: "-100px" },
        };

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        {/* Section eyebrow */}
        <motion.p
          {...cardAnim(0)}
          className="text-center text-sm font-medium text-primary uppercase tracking-widest mb-12"
        >
          {t.featuresEyebrow}
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              {...cardAnim(i + 1)}
              className="group bg-surface-raised rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center mb-5">
                <feature.Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
