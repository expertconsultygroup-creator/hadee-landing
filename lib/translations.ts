export type Language = "ar" | "en";

export const translations = {
  ar: {
    eyebrow: "قريبًا",
    headline: "رفيقك الهادئ نحو أيام أفضل.",
    subHeadline: "تطبيق واحد. دقيقة واحدة. نسخة أهدأ وأصح منك.",
    placeholder: "بريدك الإلكتروني",
    cta: "انضم إلى قائمة الانتظار",
    counter: (n: number) => `${n} شخص انضموا بالفعل`,
    successTitle: "أهلًا بك.",
    successNumber: (n: number) => `أنت رقم ${n} في القائمة.`,
    successMessage: "سنرسل لك دعوتك عند الإطلاق.",
    share: "شارك صديقًا للتقدّم في القائمة",
    copied: "تم النسخ",
    error: "يرجى إدخال بريد إلكتروني صحيح",
    serverError: "حدث خطأ. حاول مرة أخرى.",
  },
  en: {
    eyebrow: "Coming soon",
    headline: "Your quiet companion for better days.",
    subHeadline: "One app. One minute. A calmer, healthier you.",
    placeholder: "you@example.com",
    cta: "Join the waitlist",
    counter: (n: number) => `${n} people already joined`,
    successTitle: "Welcome.",
    successNumber: (n: number) => `You're #${n} on the list.`,
    successMessage: "We'll send your invite when we open.",
    share: "Share with a friend to skip the line",
    copied: "Copied",
    error: "Please enter a valid email",
    serverError: "Something went wrong. Try again.",
  },
} as const;
