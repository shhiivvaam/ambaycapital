"use client";
import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

export default function Partners() {
  // Triple the partners list for the scrolling marquee to ensure seamless looping
  const scrollingPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="py-24 px-[5%] border-t border-[rgba(201,168,76,0.1)] bg-[#0a1628] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Section Header */}
        <p className="text-[12px] uppercase tracking-[3px] text-[#8a9ab5] mb-12 opacity-80">
          Trusted Partner for India&apos;s Leading Financial Institutions
        </p>
        
        {/* 1. Static Grid of Partner Names */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16 md:gap-y-12 mb-20"
        >
          {PARTNERS.map((partner, i) => (
            <motion.span
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                color: [
                  "rgba(255, 255, 255, 0.2)", 
                  i % 2 === 0 ? "#c9a84c" : "rgba(255, 255, 255, 0.2)", 
                  i % 2 !== 0 ? "#c9a84c" : "rgba(255, 255, 255, 0.2)", 
                  "rgba(255, 255, 255, 0.2)"
                ] 
              }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.8, delay: i * 0.05 },
                color: { 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: (i % 2 === 0 ? 0 : 2) + (i * 0.1), 
                  ease: "easeInOut" 
                }
              }}
              className="font-serif text-[16px] md:text-[19px] font-medium tracking-tight cursor-default transition-colors duration-500 hover:text-[#c9a84c] hover:opacity-100"
            >
              {partner.name}
            </motion.span>
          ))}
        </motion.div>

        {/* 2. Scrolling Marquee of Real Logos (Integrated as part of the same flow) */}
        <div className="relative flex overflow-hidden group/marquee mt-10">
          {/* Gradient Masks for ultra-smooth disappearance */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#0a1628] via-[#0a1628]/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ 
              x: ["0%", "-33.33%"] 
            }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center gap-16 md:gap-28 whitespace-nowrap py-4"
          >
            {scrollingPartners.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="relative flex flex-col items-center justify-center opacity-70 
                  hover:opacity-100 transition-all duration-700 hover:scale-110 group"
              >
                <div className="w-24 h-10 md:w-32 md:h-12 relative flex items-center justify-center transition-all">
                  <img
                    src={`https://www.google.com/s2/favicons?sz=128&domain_url=${partner.domain}`}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-110 transition-all"
                    loading="lazy"
                    onError={(e) => {
                       e.currentTarget.parentElement!.innerHTML = `<span class="text-[#c9a84c]/40 text-[10px] font-bold tracking-tighter uppercase italic text-center">${partner.name}</span>`;
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
