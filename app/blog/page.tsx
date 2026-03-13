import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ui/ChatBot";
import SectionTag from "@/components/ui/SectionTag";
import Link from "next/link";
import Contact from "@/components/sections/Contact";

const BLOG_POSTS = [
  {
    title: "How much life insurance do you really need?",
    category: "Life Insurance",
    excerpt: "Learn the 15x rule of thumb and how to calculate your family's exact financial requirements to choose the perfect term plan.",
    link: "https://economictimes.indiatimes.com/wealth/insure/life-insurance/how-much-life-insurance-do-you-need/articleshow/86606822.cms",
  },
  {
    title: "Best Tax Saving Investments under Section 80C",
    category: "Tax Planning",
    excerpt: "From ELSS Mutual Funds to PPF and Life Insurance, discover the most efficient ways to lower your income tax outgo this year.",
    link: "https://cleartax.in/s/80c-80-deductions",
  },
  {
    title: "Term Insurance vs Endowment Plans - What's Better?",
    category: "Insurance Planning",
    excerpt: "A classic debate. Uncover why pure protection term plans are generally superior for life cover compared to traditional endowment policies.",
    link: "https://www.policybazaar.com/life-insurance/term-insurance/articles/term-insurance-vs-endowment-plan/",
  },
  {
    title: "The Ultimate Guide to Retirement Planning in India",
    category: "Retirement",
    excerpt: "With rising inflation and increasing life expectancy, depending solely on PF is dangerous. Here's a holistic approach to building a retirement corpus.",
    link: "https://www.livemint.com/money/personal-finance/how-to-plan-for-retirement-in-india-11626021617300.html",
  },
  {
    title: "5 Common Health Insurance Mistakes to Avoid",
    category: "Health Insurance",
    excerpt: "Not declaring pre-existing diseases, opting for low sum insured, or relying only on corporate cover. Avoid these critical errors.",
    link: "https://www.forbes.com/advisor/in/health-insurance/common-health-insurance-mistakes-to-avoid/",
  },
  {
    title: "Why regular SIPs are the key to long-term wealth",
    category: "Mutual Funds",
    excerpt: "Timing the market rarely works. See mathematical proof of why Rupee Cost Averaging via SIPs creates massive wealth over a decade.",
    link: "https://www.amfiindia.com/investor-corner/knowledge-center/sip.html",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#060f1e]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-[5%] relative overflow-hidden bg-[#0a1628]">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl relative z-10 text-center mx-auto">
          <div className="flex justify-center mb-6">
            <SectionTag>Education Hub</SectionTag>
          </div>
          <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-[1.1] mb-6 text-white">
            Financial Wisdom, <br /> <em className="italic text-[#c9a84c]">Simplified.</em>
          </h1>
          <p className="text-[17px] text-[#8a9ab5] leading-relaxed max-w-2xl mx-auto font-light">
            Empower yourself with market insights, insurance guides, and wealth creation strategies curated by experts.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-[5%] bg-[#112240]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <Link 
              href={post.link} 
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a1628] border border-[rgba(201,168,76,0.2)] rounded-2xl p-8 
                group hover:-translate-y-2 hover:border-[#c9a84c] transition-all duration-300
                flex flex-col h-full"
            >
              <span className="text-[12px] uppercase tracking-[1.5px] text-[#c9a84c] font-medium mb-4 block">
                {post.category}
              </span>
              <h3 className="font-serif text-xl text-white mb-4 leading-snug group-hover:text-[#e2c97e] transition-colors">
                {post.title}
              </h3>
              <p className="text-[14px] text-[#8a9ab5] leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-[13px] font-medium text-[#c9a84c] gap-2 mt-auto">
                Read Article
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Contact />

      <Footer />
      <ChatBot />
    </main>
  );
}
