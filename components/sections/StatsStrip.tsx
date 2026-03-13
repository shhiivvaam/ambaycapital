"use client";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function StatsStrip() {
  return (
    <div className="px-[5%] py-10 bg-[rgba(201,168,76,0.06)] border-t border-b border-[rgba(201,168,76,0.2)]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center py-6 px-5 relative"
          >
            {/* Divider */}
            {i < STATS.length - 1 && (
              <span className="hidden md:block absolute right-0 top-[20%] h-[60%] w-px bg-[rgba(201,168,76,0.2)]" />
            )}
            <p className="font-serif text-[42px] font-medium text-[#c9a84c] leading-none">
              {stat.number}
              <span className="text-[22px] text-[#e2c97e]">{stat.suffix}</span>
            </p>
            <p className="text-[13px] text-[#8a9ab5] mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
