"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionTag from "@/components/ui/SectionTag";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-[5%] bg-[#112240]">
      <SectionTag>Client Stories</SectionTag>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-14"
      >
        Trusted by Families
        <br />
        <em className="italic text-[#c9a84c]">Across India.</em>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.35)" }}
            className="bg-white/[0.03] border border-[rgba(201,168,76,0.2)] 
              rounded-2xl p-9 transition-colors duration-300"
          >
            {/* Stars */}
            <div className="text-[#c9a84c] text-sm mb-4">★★★★★</div>

            {/* Quote mark */}
            <span className="block font-serif text-[80px] text-[rgba(201,168,76,0.15)] leading-[0.7] mb-5">
              &ldquo;
            </span>

            <p className="text-[15px] leading-[1.75] text-white/80 mb-7 font-light">
              {t.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center 
                font-serif text-lg font-semibold text-[#0a1628] flex-shrink-0
                bg-gradient-to-br from-[#c9a84c] to-[#e2c97e]"
              >
                {t.initial}
              </div>
              <div>
                <p className="text-[14px] font-medium">{t.name}</p>
                <p className="text-[12px] text-[#8a9ab5]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
