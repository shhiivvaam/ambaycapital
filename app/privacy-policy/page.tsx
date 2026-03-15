import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ui/ChatBot";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#060f1e]">
      <Navbar />

      <section className="pt-40 pb-20 px-[5%] max-w-[800px] mx-auto min-h-[60vh]">
        <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8 text-white">
          Privacy <span className="text-[#c9a84c] italic">Policy</span>
        </h1>
        
        <div className="space-y-6 text-[#8a9ab5] text-[15px] font-light leading-relaxed">
          <p>
            Welcome to Ambay Capital. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy informs you about how we look after your personal data when you visit our website 
            and tells you about your privacy rights.
          </p>

          <h2 className="text-xl font-serif text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you including:
            Identity Data (first name, last name), Contact Data (email address, telephone numbers, address), 
            and Financial Data (interests in insurance products, loan amounts, SIP planning details) to provide 
            you with personalized consultation services.
          </p>

          <h2 className="text-xl font-serif text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal 
            data to perform the service contract we are about to enter into or have entered into with you, and to 
            provide you with customized financial and insurance plan recommendations.
          </p>
          
          <h2 className="text-xl font-serif text-white mt-8 mb-4">3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally 
            lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to your personal data 
            to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  );
}
