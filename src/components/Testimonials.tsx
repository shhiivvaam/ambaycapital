'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    initial: 'R',
    name: 'Rahul Sharma',
    role: 'Software Engineer, Pune',
    text: 'Ambay Capital completely transformed how I think about money. They set up my SIP, got me adequate life insurance, and sorted my tax planning — all in one place. I finally feel financially secure.',
  },
  {
    initial: 'P',
    name: 'Priya Mehta',
    role: 'Homemaker, Mumbai',
    text: 'When my husband was hospitalised, the claim process was completely smooth because Ambay Capital guided us at every step. Their after-sales support is unmatched. I recommend them to everyone.',
  },
  {
    initial: 'A',
    name: 'Arjun Patel',
    role: 'Business Owner, Ahmedabad',
    text: 'As a business owner I needed personal and business insurance along with investment planning. Ambay Capital handled everything seamlessly. Their expertise and genuine care for clients sets them apart.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[100px] px-[5%] bg-navy-mid">
      <div className="text-[11px] uppercase tracking-[2px] text-gold font-medium mb-4 flex items-center gap-3 before:content-[''] before:w-[30px] before:h-[1px] before:bg-gold">
        Client Stories
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="font-cormorant text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-4"
      >
        Trusted by Families<br />
        <em className="not-italic italic text-gold">Across India.</em>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {testimonials.map((test, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="bg-[rgba(255,255,255,0.03)] border border-border rounded-2xl p-9 transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:-translate-y-1"
          >
            <div className="text-gold text-[13px] mb-4">★★★★★</div>
            <span className="quote-icon">&quot;</span>
            <p className="text-[15px] leading-[1.75] text-[rgba(255,255,255,0.8)] mb-7 font-light">
              {test.text}
            </p>
            <div className="flex items-center gap-3.5 mt-auto">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-cormorant text-[18px] font-semibold text-navy">
                {test.initial}
              </div>
              <div>
                <div className="text-[14px] font-medium mb-0.5">{test.name}</div>
                <div className="text-[12px] text-text-muted">{test.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
