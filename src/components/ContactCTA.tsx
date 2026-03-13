'use client';

import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="py-[100px] px-[5%] bg-gradient-to-br from-navy-light to-navy-mid relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(201,168,76,0.08),_transparent_60%)] rounded-full pointer-events-none"></div>

      <div className="text-[11px] uppercase tracking-[2px] text-gold font-medium mb-4 flex items-center justify-center gap-3 before:content-[''] before:w-[30px] before:h-[1px] before:bg-gold after:content-[''] after:w-[30px] after:h-[1px] after:bg-gold">
        Start Today
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="font-cormorant text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-4 relative z-10"
      >
        Ready to Secure Your<br />
        <em className="not-italic italic text-gold">Financial Future?</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[16px] text-text-muted leading-[1.7] max-w-[560px] font-light mx-auto mb-10 relative z-10"
      >
        Book a free, no-obligation consultation. We&apos;ll review your coverage, investments, and create a personalised roadmap just for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex gap-4 justify-center flex-wrap relative z-10"
      >
        <a
          href="#contact"
          className="bg-gradient-to-br from-gold to-gold-light text-navy px-8 py-3.5 rounded font-semibold text-[15px] no-underline inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
        >
          ✦ Book Free Consultation
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="bg-transparent text-white px-8 py-3.5 rounded font-normal text-[15px] no-underline border border-[rgba(255,255,255,0.15)] inline-flex items-center gap-2 transition-all duration-200 hover:border-gold hover:text-gold"
        >
          💬 Chat on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
