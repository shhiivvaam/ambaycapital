import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";
import Contact from "@/components/sections/Contact";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060f1e]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-[5%] relative overflow-hidden bg-[#0a1628]">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          <SectionTag>Service Detail</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-[1.1] mb-6 text-white">
            {service.title}
          </h1>
          <p className="text-xl text-[#c9a84c] mb-6 italic">{service.subtitle}</p>
          <p className="text-[17px] text-[#8a9ab5] leading-relaxed max-w-2xl font-light">
            {service.description}
          </p>
          
          <div className="mt-10 flex gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-sm font-semibold text-[15px]
                bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] text-[#0a1628]
                hover:opacity-90 transition-opacity"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits & Who Should Buy */}
      <section className="py-24 px-[5%] bg-[#112240]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Benefits */}
          <div>
            <h2 className="font-serif text-[32px] text-white mb-10">Key Benefits</h2>
            <div className="flex flex-col gap-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/5 p-6 rounded-xl flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center text-2xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">{benefit.title}</h3>
                    <p className="text-[14px] text-[#8a9ab5] leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Buy & FAQ */}
          <div className="space-y-16">
            <div>
              <h2 className="font-serif text-[32px] text-white mb-10">Who Should Buy?</h2>
              <ul className="space-y-4">
                {service.whoShouldBuy.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#8a9ab5] text-[15px]">
                    <span className="w-6 h-6 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[32px] text-white mb-10">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="pb-6 border-b border-white/5 last:border-0">
                    <h4 className="text-[16px] text-[#e2c97e] font-medium mb-2">{faq.question}</h4>
                    <p className="text-[14px] text-[#8a9ab5] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Contact Form */}
      <Contact />

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
