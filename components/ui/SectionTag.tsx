"use client";
import { motion } from "framer-motion";

interface SectionTagProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function SectionTag({ children, center }: SectionTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 text-[11px] uppercase tracking-[2px] text-[#c9a84c] font-medium mb-4 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="w-[30px] h-px bg-[#c9a84c]" />
      {children}
    </motion.div>
  );
}
