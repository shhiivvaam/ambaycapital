import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ui/ChatBot";
import Calculators from "@/components/sections/Calculators";

export function generateStaticParams() {
  return [
    { type: "sip" },
    { type: "retirement" },
    { type: "insurance" },
    { type: "emi" },
  ];
}

export default async function CalculatorPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  
  // Mapping the URL segment to the Calculator's internal state types
  const tabType = ["sip", "retirement", "insurance", "emi"].includes(type) ? type as any : "sip";

  return (
    <main className="min-h-screen bg-[#060f1e]">
      <Navbar />

      <div className="pt-24 min-h-screen">
        <Calculators initialTab={tabType} />
      </div>

      <Footer />
      <ChatBot />
    </main>
  );
}
