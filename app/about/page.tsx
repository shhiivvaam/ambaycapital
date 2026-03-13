import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ui/ChatBot";
import SectionTag from "@/components/ui/SectionTag";
import Contact from "@/components/sections/Contact";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060f1e]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-[5%] relative overflow-hidden bg-[#0a1628]">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          <SectionTag>Our Story</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-[1.1] mb-6 text-white">
            Building Wealth, <br /> Protecting Families.
          </h1>
          <p className="text-[17px] text-[#8a9ab5] leading-relaxed max-w-2xl font-light">
            Ambay Capital helps families and businesses secure their true potential through smart financial planning, transparent advice, and genuine care.
          </p>
        </div>
      </section>

      {/* Founder & Mission */}
      <section className="py-24 px-[5%] bg-[#112240]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Image/Visual Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/20 to-transparent rounded-2xl blur-2xl" />
            <div className="aspect-[4/5] bg-[#0a1628] rounded-2xl border border-[rgba(201,168,76,0.3)] p-10 flex flex-col justify-end relative z-10 overflow-hidden">
               {/* Decorative background */}
              <div 
                className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: "radial-gradient(#c9a84c 1px, transparent 1px)", backgroundSize: "24px 24px" }} 
              />
              <div className="relative z-10">
                <div className="w-16 h-1 bg-[#c9a84c] mb-6" />
                <h3 className="font-serif text-[28px] text-white leading-snug mb-3">
                  A Legacy of Trust & Excellence
                </h3>
                <p className="text-[#8a9ab5]">Over decades of financial stewardship.</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-[#c9a84c] text-[#0a1628] p-6 rounded-xl font-serif text-lg z-20 shadow-2xl">
              <span className="block text-3xl font-bold mb-1">26+</span>
              Years Experience
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-serif text-[clamp(32px,4vw,42px)] text-white mb-8">
              Guided by Experience, <br />
              <em className="italic text-[#c9a84c]">Driven by Integrity.</em>
            </h2>
            <div className="space-y-6 text-[16px] text-[#8a9ab5] leading-relaxed font-light">
              <p>
                Founded on the extensive knowledge and 26+ years of industry experience of our founder, Ambay Capital has grown from a humble advisory firm into a comprehensive financial powerhouse. 
              </p>
              <p>
                Our mission is simple: to make expert financial guidance accessible, transparent, and absolutely tailored to the individual. We believe that no two families are exactly alike, and therefore, no two financial plans should be either.
              </p>
              <p>
                We are proud to be an IRDAI licensed and AMFI registered entity. This means every recommendation we make is strictly regulated, compliance-driven, and most importantly, in your absolute best interest. We answer to you, and we grow when you grow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white/[0.03] border border-white/5 p-5 rounded-xl">
                <div className="text-[#c9a84c] text-3xl mb-3">🏅</div>
                <h4 className="text-white font-medium mb-1">IRDAI Certified</h4>
                <p className="text-[13px] text-[#8a9ab5]">Registered Insurance Brokers</p>
              </div>
              <div className="bg-white/[0.03] border border-white/5 p-5 rounded-xl">
                <div className="text-[#c9a84c] text-3xl mb-3">📜</div>
                <h4 className="text-white font-medium mb-1">AMFI Registered</h4>
                <p className="text-[13px] text-[#8a9ab5]">Mutual Fund Distributors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Contact Form */}
      <Contact />

      <Footer />
      <ChatBot />
    </main>
  );
}
