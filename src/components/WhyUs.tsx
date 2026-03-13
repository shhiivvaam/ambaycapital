'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: 'Expert, Unbiased Advice',
    desc: 'We analyse your financial profile and goals to recommend products that genuinely suit you — not what pays us the highest commission.',
  },
  {
    num: '02',
    title: 'End-to-End Support',
    desc: "From policy selection to claim settlement and portfolio reviews — we're with you at every step, not just at the point of sale.",
  },
  {
    num: '03',
    title: 'Personalised for Every Stage of Life',
    desc: "Whether you're a young professional, a growing family, or approaching retirement — we have solutions tailored precisely to your situation.",
  },
  {
    num: '04',
    title: 'Transparent & Accountable',
    desc: 'No hidden charges, no jargon. We explain every recommendation clearly so you always know where your money is going.',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-[100px] px-[5%] bg-navy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative h-[300px] md:h-[480px]"
        >
          {/* Big Card */}
          <div className="absolute w-[320px] top-0 left-0 bg-gradient-to-br from-navy-light to-navy-mid border border-border rounded-2xl p-9 overflow-hidden z-10">
            <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-[radial-gradient(circle,_rgba(201,168,76,0.15),_transparent_70%)] rounded-full"></div>
            <div className="text-[11px] uppercase tracking-[1.5px] text-gold font-medium mb-3">
              Our Commitment
            </div>
            <div className="font-cormorant text-[24px] my-3 leading-[1.3]">
              &quot;We treat every client&apos;s financial future as if it were our own.&quot;
            </div>
            <div className="text-[13px] text-text-muted mt-4">
              — Ambay Capital Team
            </div>
            <div className="mt-7 pt-6 border-t border-border flex gap-6">
              <div>
                <div className="font-cormorant text-[28px] text-gold leading-none">IRDAI</div>
                <div className="text-[11px] text-text-muted mt-1">Certified Advisor</div>
              </div>
              <div>
                <div className="font-cormorant text-[28px] text-gold leading-none">AMFI</div>
                <div className="text-[11px] text-text-muted mt-1">Registered MFD</div>
              </div>
            </div>
          </div>

          {/* Small Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
            className="absolute w-[260px] bottom-10 right-0 md:bottom-10 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] rounded-2xl p-7 z-20 backdrop-blur-sm"
          >
            <div className="text-[11px] uppercase tracking-[1.5px] text-gold font-medium mb-3">
              Client Satisfaction
            </div>
            <div className="flex items-baseline gap-2">
              <div className="font-cormorant text-[40px] font-medium leading-none">4.9</div>
              <div className="text-gold text-[18px]">★</div>
            </div>
            <div className="text-[13px] text-text-muted mt-2">
              Based on 300+ reviews
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <div>
          <div className="text-[11px] uppercase tracking-[2px] text-gold font-medium mb-4 flex items-center gap-3 before:content-[''] before:w-[30px] before:h-[1px] before:bg-gold">
            Why Ambay Capital
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="font-cormorant text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-8"
          >
            Financial Guidance You<br />
            <em className="not-italic italic text-gold">Can Actually Trust.</em>
          </motion.h2>

          <div className="flex flex-col gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="font-cormorant text-[48px] font-light text-[rgba(201,168,76,0.2)] leading-none min-w-[48px]">
                  {reason.num}
                </div>
                <div>
                  <h4 className="text-[17px] font-medium mb-1.5">{reason.title}</h4>
                  <p className="text-[14px] text-text-muted leading-[1.6]">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
