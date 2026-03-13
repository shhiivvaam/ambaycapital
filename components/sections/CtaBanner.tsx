"use client";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import SectionTag from "@/components/ui/SectionTag";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section
      className="py-24 px-[5%] text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a3460 0%, #112240 100%)",
      }}
    >
      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.08), transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <SectionTag center>Start Today</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(32px,4vw,56px)] font-normal leading-[1.15] mb-4"
        >
          Ready to Secure Your
          <br />
          <em className="italic text-[#c9a84c]">Financial Future?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] text-[#8a9ab5] leading-relaxed max-w-[480px] 
            mx-auto mb-10 font-light"
        >
          Book a free, no-obligation consultation. We&rsquo;ll review your
          coverage, investments, and create a personalised roadmap just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <PrimaryButton href="#contact">✦ Book Free Consultation</PrimaryButton>
          <SecondaryButton href={WHATSAPP_URL}>💬 Chat on WhatsApp</SecondaryButton>
        </motion.div>
      </div>
    </section>
  );
}
