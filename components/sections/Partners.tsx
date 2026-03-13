"use client";
import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

export default function Partners() {
  return (
    <div className="py-16 px-[5%] border-t border-[rgba(201,168,76,0.2)] bg-[#0a1628]">
      <p className="text-center text-[12px] uppercase tracking-[2px] text-[#8a9ab5] mb-10">
        Partnered with India&rsquo;s Leading Financial Institutions
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {PARTNERS.map((name, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ color: "rgba(201,168,76,0.5)" }}
            className="font-serif text-[18px] font-semibold text-white/25 
              tracking-wide cursor-default transition-colors duration-300"
          >
            {name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
