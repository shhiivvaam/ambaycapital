"use client";
import { motion } from "framer-motion";
import { WHY_ITEMS } from "@/lib/constants";
import SectionTag from "@/components/ui/SectionTag";

export default function WhyUs() {
  return (
    <section id="about" className="py-24 px-[5%] bg-[#0a1628]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[420px] lg:h-[480px]"
        >
          {/* Big card */}
          <div
            className="absolute top-0 left-0 w-[300px] lg:w-[320px] p-9 rounded-2xl 
              border border-[rgba(201,168,76,0.2)] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a3460, #112240)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-10 -right-10 w-[150px] h-[150px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)",
              }}
            />
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#c9a84c] mb-3 font-medium">
              Our Commitment
            </p>
            <p className="font-serif text-2xl leading-[1.3] text-white mb-4">
              &ldquo;We treat every client&rsquo;s financial future as if it
              were our own.&rdquo;
            </p>
            <p className="text-[13px] text-[#8a9ab5]">— Ambay Capital Team</p>

            <div className="mt-7 pt-6 border-t border-[rgba(201,168,76,0.2)] flex gap-6">
              <div>
                <p className="font-serif text-[28px] text-[#c9a84c]">IRDAI</p>
                <p className="text-[11px] text-[#8a9ab5]">Certified Advisor</p>
              </div>
              <div>
                <p className="font-serif text-[28px] text-[#c9a84c]">AMFI</p>
                <p className="text-[11px] text-[#8a9ab5]">Registered MFD</p>
              </div>
            </div>
          </div>

          {/* Floating small card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-0 w-[240px] lg:w-[260px] p-7 rounded-2xl 
              bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)]"
          >
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#c9a84c] mb-3 font-medium">
              Client Satisfaction
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-[40px] font-medium text-white leading-none">
                4.9
              </span>
              <span className="text-[#c9a84c] text-lg">★</span>
            </div>
            <p className="text-[13px] text-[#8a9ab5] mt-1.5">
              Based on 300+ reviews
            </p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div>
          <SectionTag>Why Ambay Capital</SectionTag>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] mb-10"
          >
            Financial Guidance You
            <br />
            <em className="italic text-[#c9a84c]">Can Actually Trust.</em>
          </motion.h2>

          <div className="flex flex-col gap-8">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start"
              >
                <span className="font-serif text-[48px] font-light text-[rgba(201,168,76,0.2)] leading-none min-w-[48px]">
                  {item.num}
                </span>
                <div>
                  <h4 className="text-[17px] font-medium mb-1.5">{item.title}</h4>
                  <p className="text-[14px] text-[#8a9ab5] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
