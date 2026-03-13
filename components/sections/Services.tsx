"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionTag from "@/components/ui/SectionTag";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-[5%] bg-[#112240]"
    >
      {/* Header */}
      <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
        <div>
          <SectionTag>What We Offer</SectionTag>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15]"
          >
            Every Financial Solution,
            <br />
            <em className="italic text-[#c9a84c]">Under One Roof.</em>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] text-[#8a9ab5] leading-relaxed max-w-[480px] font-light"
        >
          From protecting your family with the right insurance to growing your
          wealth through smart investments — we cover it all.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,168,76,0.2)] 
          border border-[rgba(201,168,76,0.2)] rounded-xl overflow-hidden"
      >
        {SERVICES.map((service) => (
          <Link key={service.name} href={`/services/${service.slug}`}>
            <motion.div
              whileHover={{ backgroundColor: "rgba(201,168,76,0.06)" }}
              className="bg-[#112240] h-full p-7 md:p-9 relative cursor-pointer group overflow-hidden"
            >
              {/* Bottom gold line on hover */}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9a84c] to-[#e2c97e]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Arrow */}
              <span
                className="absolute top-7 right-6 text-[#c9a84c] text-lg 
                opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                transition-all duration-300"
              >
                →
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center 
                text-2xl mb-5 bg-[rgba(201,168,76,0.1)] 
                group-hover:bg-[rgba(201,168,76,0.18)] transition-colors duration-300"
              >
                {service.icon}
              </div>

              <h3 className="font-serif text-xl font-medium mb-2.5 text-white">
                {service.name}
              </h3>
              <p className="text-[13px] text-[#8a9ab5] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
