import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Calculators from "@/components/sections/Calculators";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <Services />
      <WhyUs />
      <Calculators />
      <Testimonials />
      <Partners />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
