import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_PHONE } from "./constants";

export interface ChatOption {
  label: string;
  value: string;
}

export interface BotMessage {
  text: string;
  options?: ChatOption[];
  isEnd?: boolean;
  whatsApp?: boolean;
  link?: string;
}

// The central knowledge base the bot draws from
export const BOT_KNOWLEDGE: Record<string, BotMessage> = {
  // ── MAIN MENU ──
  start: {
    text: "Hello! 👋 I'm **Shivam**, your virtual financial advisor from **Ambay Capital**.\n\nI can help you with anything related to our services, plans, and how we work. What would you like to explore today?",
    options: [
      { label: "🛡️ Insurance Plans", value: "insurance" },
      { label: "📈 Investments & Funds", value: "investments" },
      { label: "🏦 Financial Planning", value: "financial_planning" },
      { label: "🧮 Use a Calculator", value: "calculators" },
      { label: "💬 Talk to an Advisor", value: "talk_to_advisor" },
      { label: "ℹ️ About Ambay Capital", value: "about" },
    ],
  },

  // ── INSURANCE ──
  insurance: {
    text: "Great choice! 🛡️ We offer a full suite of insurance products. Which type are you interested in?",
    options: [
      { label: "❤️ Life Insurance", value: "life_insurance" },
      { label: "🏥 Health Insurance", value: "health_insurance" },
      { label: "🚗 Motor Insurance", value: "motor_insurance" },
      { label: "✈️ Travel Insurance", value: "travel_insurance" },
      { label: "🏢 Business Insurance", value: "business_insurance" },
      { label: "← Back to Menu", value: "start" },
    ],
  },
  life_insurance: {
    text: "**Life Insurance** provides your family a financial safety net in your absence.\n\nWe offer:\n• **Term Plans** – High cover at the lowest cost\n• **Child Plans** – Secure your child's education & future\n• **ULIP / Endowment** – Insurance + investment growth\n\nWould you like a personalised plan recommendation?",
    options: [
      { label: "📞 Get a Proposal", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "insurance" },
    ],
  },
  health_insurance: {
    text: "**Health Insurance** protects you from rising medical costs.\n\nPlans we cover:\n• **Family Floater** – One policy for the whole family\n• **Critical Illness Cover** – Lump sum on diagnosis\n• **Senior Citizen Plans** – Tailored for ages 60+\n\nHealthcare costs are rising 12% every year. Let's get you covered!",
    options: [
      { label: "📞 Get a Quote", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "insurance" },
    ],
  },
  motor_insurance: {
    text: "**Motor Insurance** keeps you legally safe and financially protected on the road.\n\n• **Comprehensive Cover** – Own damage + 3rd party\n• **Zero Depreciation** – Full claim, no deduction on parts\n• **Renewals & Claims** – We handle the paperwork for you\n\nNeed to renew or buy a fresh policy?",
    options: [
      { label: "📞 Renew / Buy Now", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "insurance" },
    ],
  },
  travel_insurance: {
    text: "**Travel Insurance** ensures you can explore the world without worry.\n\nCovers include:\n• Medical emergencies abroad (cashless hospitalization)\n• Lost / delayed baggage compensation\n• Trip cancellation refunds\n• Flight delays\n\n*Note: Many Schengen visa applications require mandatory travel insurance.*",
    options: [
      { label: "📞 Get a Plan", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "insurance" },
    ],
  },
  business_insurance: {
    text: "**Business Insurance** protects your enterprise from unforeseen risks.\n\nSolutions we offer:\n• Fire & Burglary Cover for assets\n• Professional Indemnity (PI) Insurance\n• Group Health Insurance for employees\n• Business Interruption Insurance\n\nProtect what you've built. Let's find the right plan.",
    options: [
      { label: "📞 Talk to Business Advisor", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "insurance" },
    ],
  },

  // ── INVESTMENTS ──
  investments: {
    text: "📈 Smart investing is how wealth is created over time. Which investment area interests you?",
    options: [
      { label: "📊 Mutual Funds", value: "mutual_funds" },
      { label: "📅 SIP Planning", value: "sip" },
      { label: "💰 Wealth Management", value: "wealth_management" },
      { label: "🌅 Retirement Planning", value: "retirement" },
      { label: "← Back to Menu", value: "start" },
    ],
  },
  mutual_funds: {
    text: "**Mutual Funds** are one of the best ways to grow wealth over time.\n\n• **Equity Funds** – High returns over 5+ years\n• **Debt Funds** – Stable, low-risk returns\n• **ELSS Funds** – Save Tax under Sec. 80C *and* earn returns\n• **Hybrid Funds** – Balanced risk & reward\n\nWe analyse your risk profile and recommend the right portfolio.",
    options: [
      { label: "📞 Get Portfolio Advice", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "investments" },
    ],
  },
  sip: {
    text: "**Systematic Investment Plan (SIP)** is the simplest, most effective way to build wealth.\n\n✅ Start with as little as ₹500/month\n✅ Power of **compounding** over the long term\n✅ Rupee Cost Averaging reduces market risk\n\n**Example:** ₹5,000/month at 12% for 10 years = ₹11.6 Lakhs → **Corpus: ~₹11.6 L**\n\nUse our SIP Calculator to find your magic number!",
    options: [
      { label: "🧮 Open SIP Calculator", value: "calc_sip" },
      { label: "📞 Start My SIP", value: "talk_to_advisor" },
      { label: "← Back", value: "investments" },
    ],
  },
  wealth_management: {
    text: "**Wealth Management** is for those who want a holistic strategy to grow and protect their net worth.\n\nOur service includes:\n• Portfolio construction & rebalancing\n• Tax-efficient investment strategies\n• Asset allocation across equity, debt, gold, and real estate\n• Estate planning guidance\n\nMinimum investment: Typically ₹25 Lakhs and above.",
    options: [
      { label: "📞 Schedule a Wealth Review", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "investments" },
    ],
  },
  retirement: {
    text: "**Retirement Planning** ensures your golden years are truly golden. 🌅\n\nWe help you with:\n• Estimating your retirement corpus goal\n• Choosing the right mix of NPS, PPF, and Mutual Funds\n• Creating a pension-like monthly income via SWP\n\n**The earlier you start, the less you need to save each month.** Let's plan today!",
    options: [
      { label: "🧮 Retirement Calculator", value: "calc_retirement" },
      { label: "📞 Plan My Retirement", value: "talk_to_advisor" },
      { label: "← Back", value: "investments" },
    ],
  },

  // ── FINANCIAL PLANNING ──
  financial_planning: {
    text: "🏦 **Financial Planning** is the roadmap to all your life goals. We cover multiple areas:",
    options: [
      { label: "💸 Tax Saving", value: "tax_saving" },
      { label: "🏠 Goal Planning (Home, Education)", value: "goal_planning" },
      { label: "📋 Complete Financial Review", value: "talk_to_advisor" },
      { label: "← Back to Menu", value: "start" },
    ],
  },
  tax_saving: {
    text: "**Tax Saving Investments** can significantly reduce your income tax liability.\n\n**Under Section 80C (₹1.5L limit):**\n• ELSS Mutual Funds (best returns + shortest lock-in)\n• PPF (safe, 15-year)\n• Life Insurance Premiums\n• EPF Contributions\n\n**Under Section 80D:**\n• Health Insurance Premiums (up to ₹25,000–₹75,000)\n\nWould you like an advisor to help maximize your tax savings?",
    options: [
      { label: "📞 Optimize My Taxes", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "financial_planning" },
    ],
  },
  goal_planning: {
    text: "**Goal Planning** helps you stay on track for life's biggest milestones.\n\nWe help you plan for:\n• 🏠 Buying a Home\n• 🎓 Child's Education (in India or abroad)\n• 💍 Marriage Fund\n• 🌍 Dream Vacation\n\nWe reverse-engineer your goal to tell you exactly how much to invest today.",
    options: [
      { label: "📞 Plan My Goal", value: "talk_to_advisor" },
      { label: "💬 Chat on WhatsApp", value: "whatsapp" },
      { label: "← Back", value: "financial_planning" },
    ],
  },

  // ── CALCULATORS ──
  calculators: {
    text: "🧮 Our free calculators help you make informed decisions instantly. Which one would you like to try?",
    options: [
      { label: "📊 SIP Calculator", value: "calc_sip" },
      { label: "🌅 Retirement Calculator", value: "calc_retirement" },
      { label: "🛡️ Insurance Cover Calculator", value: "calc_insurance" },
      { label: "🏦 EMI Calculator", value: "calc_emi" },
      { label: "← Back to Menu", value: "start" },
    ],
  },
  calc_sip: {
    text: "Opening the **SIP Calculator** for you! 🚀\n\nEasily estimate how much your monthly SIP will grow over time. Remember: _time in the market beats timing the market._",
    options: [{ label: "← Back to Menu", value: "start" }],
    link: "/#calculators",
    isEnd: true,
  },
  calc_retirement: {
    text: "Opening the **Retirement Calculator** 🌅\n\nFind out how much corpus you'll have by age 60 based on your savings today.",
    options: [{ label: "← Back to Menu", value: "start" }],
    link: "/calculators/retirement",
    isEnd: true,
  },
  calc_insurance: {
    text: "Opening the **Insurance Cover Calculator** 🛡️\n\nFind out exactly how much life cover your family needs to stay financially secure.",
    options: [{ label: "← Back to Menu", value: "start" }],
    link: "/calculators/insurance",
    isEnd: true,
  },
  calc_emi: {
    text: "Opening the **EMI Calculator** 🏦\n\nCalculate the exact EMI for any home loan, car loan, or personal loan in seconds.",
    options: [{ label: "← Back to Menu", value: "start" }],
    link: "/calculators/emi",
    isEnd: true,
  },

  // ── ABOUT ──
  about: {
    text: "**Ambay Capital** was founded with 26+ years of deep financial expertise.\n\n✅ IRDAI Licensed Insurance Broker\n✅ AMFI Registered Mutual Fund Distributor\n✅ 5,000+ Families Protected\n✅ ₹20 Cr+ Investments Managed\n\nOur mission is simple: expert financial guidance accessible to every Indian family — transparent, personalised, and regulated.",
    options: [
      { label: "📖 Read Full Story", value: "about_link" },
      { label: "📞 Book a Free Consultation", value: "talk_to_advisor" },
      { label: "← Back to Menu", value: "start" },
    ],
  },
  about_link: {
    text: "Taking you to our **About Us** page! You'll find more about our founder's story, certifications, and our mission there.",
    options: [{ label: "← Back to Menu", value: "start" }],
    link: "/about",
    isEnd: true,
  },

  // ── ADVISOR / CONTACT ──
  talk_to_advisor: {
    text: "Excellent! 🤝 Our advisors are available **Mon–Sat, 9am–7pm IST**.\n\nYou can reach us via:\n\n📞 **Phone / WhatsApp:** +91 98185 56671\n✉️ **Email:** ambaycapital8@gmail.com\n📍 **Office:** Greater Noida, Sector 1, UP\n\nOr, the fastest route — **send us a WhatsApp message right now!**",
    options: [
      { label: "💬 Open WhatsApp Now", value: "whatsapp" },
      { label: "📋 Fill Consultation Form", value: "consultation_form" },
      { label: "← Back to Menu", value: "start" },
    ],
    whatsApp: true,
  },
  consultation_form: {
    text: "Taking you to the **Consultation Form** 📋\n\nOur free, no-obligation form takes 2 minutes. An advisor will call you back within 24 hours!",
    options: [{ label: "← Back to Menu", value: "start" }],
    link: "/#contact",
    isEnd: true,
  },

  // ── WHATSAPP ──
  whatsapp: {
    text: "You'll be connected to our team on WhatsApp instantly. 💬\n\n*Our advisors typically reply within minutes during business hours.*\n\nSee you there!",
    options: [{ label: "← Back to Menu", value: "start" }],
    isEnd: true,
    whatsApp: true,
  },
};

export const CONTACT_INFO = { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_PHONE };
