import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Calculators from '@/components/Calculators';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import ContactCTA from '@/components/ContactCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Calculators />
        <Testimonials />
        <Partners />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
