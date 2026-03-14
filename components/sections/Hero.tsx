"use client";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const SPARKLINE_HEIGHTS = [30, 50, 40, 70, 60, 90, 100];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative px-[5%] pt-[120px] pb-20 overflow-hidden">
      {/* Backgrounds */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 60%), linear-gradient(160deg, #0a1628 0%, #112240 60%, #0d1f3c 100%)",
        }}
      />
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-[680px]">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <span
            className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.1)] 
            border border-[rgba(201,168,76,0.2)] px-4 py-2 rounded-full 
            text-xs font-medium text-[#e2c97e] tracking-[1px] uppercase"
          >
            <motion.span
              className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Trusted by 500+ Families Across India
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-serif text-[clamp(42px,6vw,72px)] font-normal leading-[1.1] mb-6"
        >
          Secure Your Future
          <span className="block">with</span>
          <em className="block font-serif not-italic italic text-[#c9a84c] whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
            Smart Financial Planning.
          </em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-[17px] font-light text-[#8a9ab5] leading-relaxed mb-11 max-w-[520px]"
        >
          Insurance, Investments, Retirement Planning & Wealth Advisory — all
          under one roof. Your complete financial partner for every stage of
          life.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
          <PrimaryButton href="#contact">✦ Book Free Consultation</PrimaryButton>
          <SecondaryButton href="#services">Explore Services →</SecondaryButton>
        </motion.div>
      </div>

      {/* Visual Cards — hidden on mobile */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[42%] max-w-[520px] hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative h-[420px]"
        >
          {/* Float card top-right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[220px] p-7 rounded-2xl 
              bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)]"
          >
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#c9a84c] mb-3 font-medium">
              Portfolio Growth
            </p>
            <p className="font-serif text-4xl font-medium text-white leading-none">
              +18.4%
            </p>
            <p className="text-[13px] text-[#8a9ab5] mt-1.5">
              Avg. annual returns
            </p>
            <div className="mt-4 h-10 flex items-end gap-1">
              {SPARKLINE_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      "linear-gradient(to top, #c9a84c, rgba(201,168,76,0.3))",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Main card */}
          <div
            className="absolute top-10 left-10 w-[340px] p-7 rounded-2xl border border-[rgba(201,168,76,0.15)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(17,34,64,0.9), rgba(26,52,96,0.9))",
            }}
          >
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#c9a84c] mb-3 font-medium">
              Total Assets Managed
            </p>
            <p className="font-serif text-4xl font-medium text-white leading-none">
              ₹20 Cr+
            </p>
            <p className="text-[13px] text-[#8a9ab5] mt-1.5">
              Across 500+ client portfolios
            </p>
          </div>

          {/* Float card bottom-left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[30px] left-0 w-[200px] p-7 rounded-2xl 
              bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)]"
          >
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#c9a84c] mb-3 font-medium">
              Claim Success Rate
            </p>
            <p className="font-serif text-4xl font-medium text-white leading-none">
              97%
            </p>
            <p className="text-[13px] text-[#8a9ab5] mt-1.5">
              Insurance claims settled
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
