'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🛡️',
    title: 'Life Insurance',
    desc: "Term plans, child plans, and retirement-linked policies to secure your loved ones' future.",
  },
  {
    icon: '❤️',
    title: 'Health Insurance',
    desc: 'Family floater, senior citizen plans, and critical illness covers for complete health protection.',
  },
  {
    icon: '📈',
    title: 'Mutual Funds',
    desc: 'SIP investments, ELSS tax saving, and long-term wealth creation through curated fund selection.',
  },
  {
    icon: '🚗',
    title: 'Motor Insurance',
    desc: 'Comprehensive car and bike insurance with hassle-free renewals and claim assistance.',
  },
  {
    icon: '🏦',
    title: 'Financial Planning',
    desc: 'Personalised plans for tax saving, wealth management, and achieving your financial goals.',
  },
  {
    icon: '🌅',
    title: 'Retirement Planning',
    desc: 'Build a stress-free retirement with the right corpus strategy, annuities, and pension plans.',
  },
  {
    icon: '🏢',
    title: 'Business Insurance',
    desc: 'Protect your enterprise with comprehensive business liability, fire, and asset coverage.',
  },
  {
    icon: '✈️',
    title: 'Travel Insurance',
    desc: 'Domestic and international travel coverage for medical emergencies, trip cancellations, and more.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[100px] px-[5%] bg-navy-mid">
      <div className="flex justify-between items-end mb-[60px] gap-10 flex-wrap">
        <div>
          <div className="text-[11px] uppercase tracking-[2px] text-gold font-medium mb-4 flex items-center gap-3 before:content-[''] before:w-[30px] before:h-[1px] before:bg-gold">
            What We Offer
          </div>
          <h2 className="font-cormorant text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-4">
            Every Financial Solution,<br />
            <em className="not-italic italic text-gold">Under One Roof.</em>
          </h2>
        </div>
        <p className="text-[16px] text-text-muted leading-[1.7] max-w-[560px] font-light">
          From protecting your family with the right insurance to growing your wealth through
          smart investments — we cover it all.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-border border border-border rounded-xl overflow-hidden"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-navy-mid p-7 md:p-9 relative cursor-pointer overflow-hidden transition-colors duration-300 hover:bg-[rgba(201,168,76,0.06)]"
          >
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            
            <div className="w-12 h-12 bg-[rgba(201,168,76,0.1)] rounded-xl flex items-center justify-center text-[22px] mb-5 transition-colors duration-300 group-hover:bg-[rgba(201,168,76,0.18)]">
              {service.icon}
            </div>
            
            <h3 className="font-cormorant text-[20px] font-medium mb-2.5 text-white">
              {service.title}
            </h3>
            
            <p className="text-[13px] text-text-muted leading-[1.6]">
              {service.desc}
            </p>
            
            <div className="absolute top-7 right-6 text-gold opacity-0 -translate-x-2 transition-all duration-300 text-[18px] group-hover:opacity-100 group-hover:translate-x-0">
              →
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
