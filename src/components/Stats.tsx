'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { number: '500', suffix: '+', label: 'Families Protected' },
    { number: '₹20', suffix: 'Cr+', label: 'Investments Managed' },
    { number: '10', suffix: '+', label: 'Years of Expertise' },
    { number: '97', suffix: '%', label: 'Claim Settlement Rate' },
  ];

  return (
    <div className="py-10 px-[5%] bg-[rgba(201,168,76,0.06)] border-y border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="text-center py-6 px-5 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-[20%] md:after:h-[60%] md:after:w-[1px] md:after:bg-border last:after:hidden"
          >
            <div className="font-cormorant text-[42px] font-medium text-gold leading-none">
              {stat.number}
              <span className="text-[22px] text-gold-light">{stat.suffix}</span>
            </div>
            <div className="text-[13px] text-text-muted mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
