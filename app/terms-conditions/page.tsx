import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ui/ChatBot";

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-[#060f1e]">
      <Navbar />

      <section className="pt-40 pb-20 px-[5%] max-w-[800px] mx-auto min-h-[60vh]">
        <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 text-white">
          Terms &amp; <span className="text-[#c9a84c] italic">Conditions</span>
        </h1>
        
        <div className="space-y-6 text-[#8a9ab5] text-[15px] font-light leading-relaxed">
          <p>
            By accessing or using the Ambay Capital website and services, you agree to be bound by these 
            Terms and Conditions. Please read them carefully before using our financial consultation platform.
          </p>

          <h2 className="text-xl font-serif text-white mt-8 mb-4">1. Service Disclaimer</h2>
          <p>
            Ambay Capital acts as a financial advisory and insurance brokerage platform. While we make every 
            effort to provide accurate calculators and recommendations, financial markets and insurance premiums 
            are highly dynamic. All calculated amounts (like SIP returns and EMI structures) are indicative estimates 
            and not guaranteed guarantees of actual market payout or premium.
          </p>

          <h2 className="text-xl font-serif text-white mt-8 mb-4">2. User Responsibilities</h2>
          <p>
            You agree to provide true, accurate, current, and complete information about yourself as prompted 
            by our consultation forms. The accuracy of our financial planning recommendations relies entirely 
            on the transparency and accuracy of the details you provide us regarding your income, dependents, 
            and existing liabilities.
          </p>

          <h2 className="text-xl font-serif text-white mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            All content included on this site, such as text, graphics, logos, images, and software, is the property 
            of Ambay Capital or its content suppliers and protected by international copyright laws.
          </p>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  );
}
