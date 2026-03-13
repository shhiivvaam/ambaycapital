export interface ServiceBenefit {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  benefits: ServiceBenefit[];
  whoShouldBuy: string[];
  faqs: ServiceFaq[];
}

export const servicesData: Record<string, ServiceData> = {
  "life-insurance": {
    title: "Life Insurance",
    subtitle: "Secure your family's future with the right life cover.",
    description: "Life insurance provides a financial safety net for your dependents in your absence. We help you choose the best term plans, child education plans, and retirement-linked policies to ensure your family's lifestyle and goals are never compromised.",
    benefits: [
      { icon: "🛡️", title: "Financial Security", desc: "Guarantees a lump sum payout to your family." },
      { icon: "📉", title: "Tax Benefits", desc: "Save tax under Section 80C and 10(10D) of the Income Tax Act." },
      { icon: "🎓", title: "Future Planning", desc: "Fund your child's education or marriage without worry." },
    ],
    whoShouldBuy: ["Breadwinners of the family", "Parents with young children", "Young professionals starting their careers"],
    faqs: [
      { question: "How much life insurance do I need?", answer: "A general rule of thumb is 15-20 times your annual income, factoring in your debts and future goals." },
      { question: "What is a Term Plan?", answer: "It is a pure protection plan that offers high coverage at a very low premium for a specific period." },
    ],
  },
  "health-insurance": {
    title: "Health Insurance",
    subtitle: "Comprehensive protection against rising medical costs.",
    description: "A single hospitalization can wipe out years of savings. We provide health insurance plans that cover hospital stay, day-care procedures, and critical illnesses for you and your family.",
    benefits: [
      { icon: "💸", title: "Cashless Treatment", desc: "Access top hospitals without paying out of pocket." },
      { icon: "🩺", title: "Critical Illness Cover", desc: "Receive a lump sum on diagnosis of severe illnesses." },
      { icon: "🛡️", title: "Tax Savings", desc: "Save tax under Section 80D." },
    ],
    whoShouldBuy: ["Every individual", "Families needing floater policies", "Senior citizens"],
    faqs: [
      { question: "Does it cover pre-existing diseases?", answer: "Yes, but usually after a waiting period of 2-4 years, depending on the policy." },
      { question: "What is a family floater?", answer: "A single policy that covers the entire family under one collective sum insured." },
    ],
  },
  "mutual-funds": {
    title: "Mutual Funds",
    subtitle: "Grow your wealth with expert-led market investments.",
    description: "Mutual funds pool money from multiple investors to invest in equities, bonds, and other securities. With SIPs and lump sum options, we curate the best funds to match your risk appetite and financial goals.",
    benefits: [
      { icon: "📈", title: "Compounding Growth", desc: "Harness the power of compounding over long periods." },
      { icon: "💼", title: "Professional Management", desc: "Your money is managed by expert fund managers." },
      { icon: "💧", title: "High Liquidity", desc: "Easily withdraw your money when needed (except ELSS)." },
    ],
    whoShouldBuy: ["Long-term investors", "Salaried professionals (via SIP)", "Individuals seeking inflation-beating returns"],
    faqs: [
      { question: "What is SIP?", answer: "Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly, building wealth over time." },
      { question: "Are mutual funds safe?", answer: "They are subject to market risks, but choosing the right diversified funds significantly reduces risk." },
    ],
  },
  "motor-insurance": {
    title: "Motor Insurance",
    subtitle: "Complete protection for your vehicles on the road.",
    description: "Whether it's a minor dent or a major accident, motor insurance ensures your vehicle is protected against damages and third-party liabilities, keeping you legally and financially safe.",
    benefits: [
      { icon: "⚖️", title: "Legal Compliance", desc: "Third-party insurance is mandatory by law." },
      { icon: "🚗", title: "Own Damage Cover", desc: "Covers repairs against accidents, theft, and natural calamities." },
      { icon: "🛠️", title: "Roadside Assistance", desc: "Get help anywhere with 24/7 towing and repair support." },
    ],
    whoShouldBuy: ["Car owners", "Two-wheeler owners", "Commercial vehicle operators"],
    faqs: [
      { question: "What is Zero Depreciation?", answer: "It ensures you get the full claim amount without deduction for the depreciation of vehicle parts." },
      { question: "Can I transfer my No Claim Bonus (NCB)?", answer: "Yes, NCB belongs to you and can be transferred when you change your vehicle or insurer." },
    ],
  },
  "financial-planning": {
    title: "Financial Planning",
    subtitle: "A roadmap to achieve all your life goals.",
    description: "Financial planning is not just about investing; it's about mapping your income to your dreams. We create bespoke strategies to help you buy a house, fund education, and retire peacefully.",
    benefits: [
      { icon: "🎯", title: "Goal Achievement", desc: "Structured plans for buying a home, marriage, or education." },
      { icon: "📊", title: "Portfolio Diversification", desc: "Balanced investments across asset classes to minimize risk." },
      { icon: "💡", title: "Peace of Mind", desc: "Clear understanding of where your money is and how it's growing." },
    ],
    whoShouldBuy: ["Anyone earning an income", "Families planning for future milestones", "High Net-Worth Individuals"],
    faqs: [
      { question: "When should I start financial planning?", answer: "As soon as you start earning. Early planning leverages compounding." },
      { question: "Do I need a plan if I earn less?", answer: "Yes, financial planning is even more crucial with a limited income to ensure optimal savings." },
    ],
  },
  "retirement-planning": {
    title: "Retirement Planning",
    subtitle: "Build a corpus that takes care of you when you stop working.",
    description: "Retirement should be your golden years, not a time of financial stress. We help you estimate your future expenses and invest today so you generate a steady, inflation-adjusted income post-retirement.",
    benefits: [
      { icon: "💰", title: "Continuous Income", desc: "Generate passive income that replaces your salary." },
      { icon: "📈", title: "Inflation Protection", desc: "Ensure your corpus outlives you despite rising costs." },
      { icon: "🏥", title: "Medical Buffer", desc: "Dedicated funds for healthcare expenses in old age." },
    ],
    whoShouldBuy: ["Professionals in their 30s and 40s", "Business owners without pension benefits", "Anyone aiming for early retirement"],
    faqs: [
      { question: "How much corpus do I need to retire?", answer: "It depends on your current lifestyle and inflation. Typically, you need 25-30x your annual expenses." },
      { question: "Can I start planning at 45?", answer: "Yes, but you will need to allocate a larger portion of your income compared to starting at 25." },
    ],
  },
  "business-insurance": {
    title: "Business Insurance",
    subtitle: "Shield your enterprise from unforeseen liabilities.",
    description: "Businesses face numerous risks from fire, theft, employee liabilities to transit damages. Our tailored business insurance solutions protect your assets and ensure business continuity.",
    benefits: [
      { icon: "🏢", title: "Asset Protection", desc: "Covers factory, office, and inventory against damages." },
      { icon: "⚖️", title: "Liability Coverage", desc: "Protects against legal claims from third parties or employees." },
      { icon: "🔄", title: "Business Continuity", desc: "Compensates for loss of profit during business interruptions." },
    ],
    whoShouldBuy: ["SME Owners", "Factory Operators", "Corporate Entities"],
    faqs: [
      { question: "What does Fire and Burglary insurance cover?", answer: "It covers your property, raw materials, and finished goods against fire, natural disasters, and theft." },
      { question: "Is Group Health Insurance mandatory?", answer: "While not universally mandatory, it is highly recommended to retain talent and provide employee welfare." },
    ],
  },
  "travel-insurance": {
    title: "Travel Insurance",
    subtitle: "Travel the world without worries.",
    description: "Medical emergencies abroad can cost a fortune. Travel insurance covers medical expenses, loss of baggage, trip cancellations, and flight delays so you can enjoy your trip peacefully.",
    benefits: [
      { icon: "🏥", title: "Global Medical Cover", desc: "Cashless hospitalization in foreign countries." },
      { icon: "🧳", title: "Baggage Loss", desc: "Compensation for lost or delayed checked-in luggage." },
      { icon: "❌", title: "Trip Cancellation", desc: "Refunds for flights and hotels if trips are cancelled due to emergencies." },
    ],
    whoShouldBuy: ["International travelers", "Students studying abroad", "Frequent business flyers"],
    faqs: [
      { question: "Is travel insurance mandatory for visas?", answer: "Yes, many countries, notably the Schengen area, require mandatory travel insurance for visa approval." },
      { question: "Does it cover pre-existing diseases?", answer: "Most standard plans only cover life-threatening emergencies related to pre-existing conditions." },
    ],
  },
};
