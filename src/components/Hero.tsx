'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-[120px] pb-[80px] px-[5%] overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,_rgba(201,168,76,0.07)_0%,_transparent_60%),_linear-gradient(160deg,_var(--navy)_0%,_var(--navy-mid)_60%,_#0d1f3c_100%)]"></div>
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(201,168,76,0.04)_1px,_transparent_1px)] bg-[size:60px_60px]"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
        }}
      ></div>

      <div className="relative z-10 max-w-full md:max-w-[680px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.1)] border border-border px-4 py-2 rounded-full text-[12px] font-medium text-gold-light tracking-[1px] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
          Trusted by 500+ Families Across India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cormorant text-[clamp(42px,6vw,72px)] font-normal leading-[1.1] mb-6"
        >
          Secure Your Future with
          <em className="not-italic italic text-gold block">Smart Financial Planning.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17px] font-light text-text-muted leading-[1.7] mb-11 max-w-[520px]"
        >
          Insurance, Investments, Retirement Planning & Wealth Advisory — all under one roof. Your
          complete financial partner for every stage of life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="bg-gradient-to-br from-gold to-gold-light text-navy px-8 py-3.5 rounded font-semibold text-[15px] no-underline border-none cursor-pointer transition-transform duration-200 hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)] inline-flex items-center gap-2"
          >
            ✦ Book Free Consultation
          </a>
          <a
            href="#services"
            className="bg-transparent text-white px-8 py-3.5 rounded font-normal text-[15px] no-underline border border-[rgba(255,255,255,0.15)] cursor-pointer transition-all duration-200 inline-flex items-center gap-2 hover:border-gold hover:text-gold"
          >
            Explore Services →
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[42%] max-w-[520px]"
      >
        <div className="relative h-[420px]">
          {/* Main Card */}
          <div className="absolute w-[340px] top-[40px] left-[40px] bg-gradient-to-br from-[rgba(17,34,64,0.9)] to-[rgba(26,52,96,0.9)] border border-[rgba(201,168,76,0.15)] rounded-2xl p-7 backdrop-blur-[10px] z-10">
            <div className="text-[11px] uppercase tracking-[1.5px] text-gold mb-3 font-medium">Total Assets Managed</div>
            <div className="font-cormorant text-[36px] font-medium text-white leading-none">₹20 Cr+</div>
            <div className="text-[13px] text-text-muted mt-1.5">Across 500+ client portfolios</div>
          </div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
            className="absolute w-[220px] top-0 right-0 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)] rounded-2xl p-7 backdrop-blur-[10px]"
          >
            <div className="text-[11px] uppercase tracking-[1.5px] text-gold mb-3 font-medium">Portfolio Growth</div>
            <div className="font-cormorant text-[36px] font-medium text-white leading-none">+18.4%</div>
            <div className="text-[13px] text-text-muted mt-1.5">Avg. annual returns</div>
            <div className="mt-4 h-10 flex items-end gap-1">
              {[30, 50, 40, 70, 60, 90, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: 'linear-gradient(to top, var(--gold), rgba(201,168,76,0.3))'
                  }}
                ></div>
              ))}
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 1.5 }}
            className="absolute w-[200px] bottom-[30px] left-0 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)] rounded-2xl p-7 backdrop-blur-[10px] z-20"
          >
            <div className="text-[11px] uppercase tracking-[1.5px] text-gold mb-3 font-medium">Claim Success Rate</div>
            <div className="font-cormorant text-[36px] font-medium text-white leading-none">97%</div>
            <div className="text-[13px] text-text-muted mt-1.5">Insurance claims settled</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
