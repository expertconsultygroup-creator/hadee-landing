export type Language = "ar" | "en";

export interface FaqItem {
  q: string;
  a: string;
}

export const translations = {
  ar: {
    // Header
    download: "حمّل التطبيق",

    // Hero
    eyebrow: "قريبًا",
    headline: "رفيقك الهادئ\nنحو أيام أفضل.",
    subHeadline: "مساحة يومية هادئة لتتبع حالتك والاعتناء بنفسك.",
    comingSoon: "متاح قريبًا",
    waitlistCount: (n: number) => `${n}+ شخص في قائمة الانتظار`,
    appStore: "حمّل من App Store",
    googlePlay: "حمّل من Google Play",

    // Waitlist form
    placeholder: "بريدك الإلكتروني",
    cta: "انضم لقائمة الانتظار",
    successTitle: "أهلًا بك.",
    successNumber: (n: number) => `أنت رقم #${n} في القائمة.`,
    successMessage: "سنرسل لك دعوتك عند الإطلاق.",
    share: "شارك صديقًا للتقدّم في القائمة",
    copied: "تم النسخ",
    error: "يرجى إدخال بريد إلكتروني صحيح",
    serverError: "حدث خطأ. حاول مرة أخرى.",

    // Trust
    trustStatement:
      "مبني بإشراف معالجين مرخصين. بياناتك تبقى على جهازك.",

    // Features
    featuresEyebrow: "لماذا هادي",
    feature1Title: "محادثة ذكية",
    feature1Desc: "تحدّث مع هادي — معالجك الافتراضي المتاح على مدار الساعة.",
    feature2Title: "تقارير ذكية",
    feature2Desc: "تتبع مزاجك ونومك واكتشف أنماطك الأسبوعية.",
    feature3Title: "خصوصية مطلقة",
    feature3Desc: "بياناتك مشفّرة بالكامل. لا نطّلع على محتواك أبدًا.",

    // Gallery
    galleryEyebrow: "نظرة من الداخل",
    screen1Caption: "تسجيل المزاج اليومي",
    screen2Caption: "تمارين التنفّس",
    screen3Caption: "يومياتك الخاصة",
    screen4Caption: "تتبع تقدّمك",

    // FAQ
    faqEyebrow: "أسئلة شائعة",
    faq: [
      {
        q: "هل هادي بديل عن العلاج النفسي؟",
        a: "لا. هادي رفيق للعناية الذاتية. ننصح دائمًا بالتواصل مع مختص عند الحاجة، ونوفر موارد للمساعدة في ذلك.",
      },
      {
        q: "هل بياناتي محمية؟",
        a: "نعم. جميع بياناتك مشفّرة على جهازك. لا نطّلع على محتواك أبدًا.",
      },
      {
        q: "هل هادي مجاني؟",
        a: "هادي مجاني للبدء. هناك اشتراك مميز يتيح تمارين أعمق ومزايا إضافية.",
      },
      {
        q: "هل يعمل بدون إنترنت؟",
        a: "نعم. التسجيل اليومي والتمارين تعمل بدون اتصال بالإنترنت.",
      },
      {
        q: "ما اللغات المدعومة؟",
        a: "العربية والإنجليزية عند الإطلاق.",
      },
      {
        q: "هل متاح على آيفون وأندرويد؟",
        a: "نعم، على كلا النظامين.",
      },
    ] as FaqItem[],

    // Final CTA
    ctaHeadline: "ابدأ رحلتك نحو هدوء أعمق.",
    ctaSub: "انضم لقائمة الانتظار وكن من أوائل المستخدمين.",

    // Footer
    footerTagline: "رفيقك الهادئ نحو أيام أفضل",
    privacyPolicy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    contact: "تواصل معنا",
    madeWith: "صُنع بعناية في السعودية",
    allRights: "جميع الحقوق محفوظة",

    // Chat showcase
    chatEyebrow: "محادثة ذكية",
    chatTitle: "تحدّث مع هادي\nمتى ما احتجت.",
    chatDesc:
      "معالج افتراضي ذكي يستمع إليك بصبر ويساعدك على فهم مشاعرك. محادثات آمنة وسرية، متاحة على مدار الساعة.",
    chatWelcome:
      "أهلًا بك! أنا هادي، رفيقك الذكي. كيف تشعر اليوم؟ أنا هنا للاستماع إليك.",
    chatUserMsg: "أشعر بضغط كبير في العمل ولا أستطيع النوم جيدًا",
    chatBotReply:
      "أفهم شعورك تمامًا. ضغط العمل مرهق، وتأثيره على النوم طبيعي. دعنا نبدأ بتمرين تنفّس بسيط يساعدك على الاسترخاء الآن.",
    chatSuggestions: [
      "أشعر بالقلق 😰",
      "لا أنام جيدًا 😴",
      "أريد تمارين استرخاء 🧘",
      "أحتاج نصيحة 💬",
    ],
    chatPlaceholder: "اكتب رسالتك...",
    chatFeatures: [
      "محادثات ذكية مدعومة بالذكاء الاصطناعي",
      "متاح على مدار الساعة — تحدّث وقتما تشاء",
      "سري وآمن بالكامل — لا أحد يطّلع على محادثاتك",
    ],

    // Reports showcase
    reportsEyebrow: "تقارير وإحصائيات",
    reportsTitle: "افهم نفسك\nمن خلال بياناتك.",
    reportsDesc:
      "تقارير أسبوعية ذكية تساعدك على فهم أنماط مزاجك ونومك. تتبع تقدّمك واكتشف ما يحسّن حالتك.",
    reportsFeatures: [
      "رسوم بيانية لتتبع المزاج والنوم أسبوعيًا",
      "تقارير ذكية مع توصيات مخصصة لك",
      "تتبع سلسلة الإنجازات والتمارين المنجزة",
    ],
    reportsMoodAvg: "متوسط المزاج",
    reportsSleepAvg: "متوسط النوم",
    reportsStreak: "أيام متتالية",
    reportsBreathing: "جلسات تنفّس",
    reportsMoodTrend: "تتبع المزاج",
    reportsLast7: "آخر ٧ أيام",

    // Phone mockup
    mockupGreeting: "كيف حالك اليوم؟",
    mockupMood1: "رائع",
    mockupMood2: "جيد",
    mockupMood3: "عادي",
    mockupMood4: "حزين",
    mockupMood5: "صعب",
  },
  en: {
    // Header
    download: "Download",

    // Hero
    eyebrow: "Coming soon",
    headline: "Your calm companion\nfor better days.",
    subHeadline:
      "A gentle daily check-in built around the small habits that compound.",
    comingSoon: "Available soon",
    waitlistCount: (n: number) => `${n}+ on the waitlist`,
    appStore: "Download on App Store",
    googlePlay: "Get it on Google Play",

    // Waitlist form
    placeholder: "you@example.com",
    cta: "Join the waitlist",
    successTitle: "Welcome.",
    successNumber: (n: number) => `You're #${n} on the list.`,
    successMessage: "We'll send your invite when we launch.",
    share: "Share with a friend to skip the line",
    copied: "Copied",
    error: "Please enter a valid email",
    serverError: "Something went wrong. Try again.",

    // Trust
    trustStatement:
      "Built with input from licensed therapists. Your data stays on your device.",

    // Features
    featuresEyebrow: "Why Hadi",
    feature1Title: "Smart conversations",
    feature1Desc: "Talk to Hadi — your AI therapist, available 24/7.",
    feature2Title: "Smart reports",
    feature2Desc:
      "Track your mood and sleep, discover weekly patterns.",
    feature3Title: "Private by design",
    feature3Desc:
      "End-to-end encrypted. We never see your data.",

    // Gallery
    galleryEyebrow: "A look inside",
    screen1Caption: "Daily mood check-in",
    screen2Caption: "Breathing exercises",
    screen3Caption: "Your private journal",
    screen4Caption: "Track your progress",

    // FAQ
    faqEyebrow: "Frequently asked questions",
    faq: [
      {
        q: "Is Hadi a replacement for therapy?",
        a: "No. Hadi is a self-care companion. We always recommend professional help when needed and include resources to find one.",
      },
      {
        q: "Is my data private?",
        a: "Yes. All entries are encrypted on your device. We never see your content.",
      },
      {
        q: "Is Hadi free?",
        a: "Free to start. A premium tier unlocks deeper exercises and additional features.",
      },
      {
        q: "Does it work offline?",
        a: "Yes. Daily check-ins and exercises work without internet.",
      },
      {
        q: "Which languages are supported?",
        a: "Arabic and English at launch.",
      },
      {
        q: "Is it available on iPhone and Android?",
        a: "Yes, on both platforms.",
      },
    ] as FaqItem[],

    // Final CTA
    ctaHeadline: "Start your journey to deeper calm.",
    ctaSub: "Join the waitlist and be among the first to try Hadi.",

    // Footer
    footerTagline: "Your calm companion for better days",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    madeWith: "Made with care in Saudi Arabia",
    allRights: "All rights reserved",

    // Chat showcase
    chatEyebrow: "Smart conversations",
    chatTitle: "Talk to Hadi\nwhenever you need.",
    chatDesc:
      "An AI-powered companion that listens patiently and helps you understand your feelings. Safe, confidential conversations available 24/7.",
    chatWelcome:
      "Hi there! I'm Hadi, your AI companion. How are you feeling today? I'm here to listen.",
    chatUserMsg: "I've been really stressed at work and can't sleep well",
    chatBotReply:
      "I completely understand. Work pressure is exhausting, and its effect on sleep is natural. Let's start with a simple breathing exercise to help you relax right now.",
    chatSuggestions: [
      "Feeling anxious 😰",
      "Can't sleep 😴",
      "Need relaxation 🧘",
      "Want advice 💬",
    ],
    chatPlaceholder: "Type your message...",
    chatFeatures: [
      "AI-powered conversations that truly understand you",
      "Available 24/7 — talk whenever you need to",
      "Fully private and secure — no one sees your chats",
    ],

    // Reports showcase
    reportsEyebrow: "Reports & insights",
    reportsTitle: "Understand yourself\nthrough your data.",
    reportsDesc:
      "Smart weekly reports that help you understand your mood and sleep patterns. Track your progress and discover what improves your wellbeing.",
    reportsFeatures: [
      "Visual charts tracking mood and sleep weekly",
      "Smart reports with personalized recommendations",
      "Track your streaks and completed exercises",
    ],
    reportsMoodAvg: "Mood average",
    reportsSleepAvg: "Sleep average",
    reportsStreak: "Day streak",
    reportsBreathing: "Breathing sessions",
    reportsMoodTrend: "Mood trend",
    reportsLast7: "Last 7 days",

    // Phone mockup
    mockupGreeting: "How are you today?",
    mockupMood1: "Great",
    mockupMood2: "Good",
    mockupMood3: "Okay",
    mockupMood4: "Sad",
    mockupMood5: "Hard",
  },
} as const;
