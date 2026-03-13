'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const interests = [
  'Life Insurance',
  'Health Insurance',
  'Motor Insurance',
  'Mutual Funds / SIP',
  'Retirement Planning',
  'Tax Saving',
  'Wealth Management',
  'Business Insurance',
  'Complete Financial Review',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-navy py-[100px] px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-20 items-start">

        {/* Info Side */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-[11px] uppercase tracking-[2px] text-gold font-medium mb-4 flex items-center gap-3 before:content-[''] before:w-[30px] before:h-[1px] before:bg-gold">
            Get In Touch
          </div>
          <h3 className="font-cormorant text-[clamp(28px,3vw,42px)] font-normal leading-[1.15] mb-6">
            Let&apos;s Start Your<br />
            <em className="not-italic italic text-gold">Financial Journey.</em>
          </h3>
          <p className="text-text-muted text-[15px] leading-[1.7] mb-10">
            Fill out the form and one of our advisors will reach out within 24 hours for a free, no-obligation consultation.
          </p>

          <div className="space-y-5">
            {[
              { icon: '📍', label: 'Office Address', value: 'Your City, India' },
              { icon: '📞', label: 'Phone / WhatsApp', value: '+91 XXXXX XXXXX' },
              { icon: '✉️', label: 'Email', value: 'hello@ambaycapital.in' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[rgba(201,168,76,0.1)] rounded-lg flex items-center justify-center text-[16px] flex-shrink-0">
                  {icon}
                </div>
                <div className="text-[14px] text-text-muted">
                  <strong className="text-white block mb-0.5 font-medium">{label}</strong>
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[rgba(201,168,76,0.07)] border border-border rounded-xl">
            <div className="font-cormorant text-[20px] mb-2">IRDAI & AMFI Certified</div>
            <div className="text-[13px] text-text-muted leading-[1.6]">
              Ambay Capital is a SEBI registered investment advisor and IRDAI licensed insurance broker. All advice is regulated and client interests are protected.
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[rgba(255,255,255,0.03)] border border-border rounded-[20px] p-8 md:p-12"
        >
          <div className="font-cormorant text-[26px] mb-2">Book Your Free Consultation</div>
          <div className="text-[14px] text-text-muted mb-8">No charges, no obligations — just expert financial guidance.</div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="text-[48px] mb-4">✓</div>
              <div className="font-cormorant text-[24px] text-gold mb-2">Request Submitted!</div>
              <div className="text-[14px] text-text-muted">We&apos;ll call you shortly.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] uppercase tracking-[1px] text-text-muted mb-2">First Name</label>
                  <input type="text" placeholder="Rahul" className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white text-[15px] font-dm outline-none transition-colors duration-200 focus:border-gold" />
                </div>
                <div>
                  <label className="block text-[12px] uppercase tracking-[1px] text-text-muted mb-2">Last Name</label>
                  <input type="text" placeholder="Sharma" className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white text-[15px] font-dm outline-none transition-colors duration-200 focus:border-gold" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[1px] text-text-muted mb-2">Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white text-[15px] font-dm outline-none transition-colors duration-200 focus:border-gold" />
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[1px] text-text-muted mb-2">Email Address</label>
                <input type="email" placeholder="rahul@email.com" className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white text-[15px] font-dm outline-none transition-colors duration-200 focus:border-gold" />
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[1px] text-text-muted mb-2">City</label>
                <input type="text" placeholder="Mumbai" className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white text-[15px] font-dm outline-none transition-colors duration-200 focus:border-gold" />
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[1px] text-text-muted mb-2">I&apos;m Interested In</label>
                <select className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white text-[15px] font-dm outline-none transition-colors duration-200 focus:border-gold">
                  {interests.map((i) => (
                    <option key={i} className="bg-navy-mid text-white">{i}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[12px] uppercase tracking-[1px] text-text-muted mb-2">Message (Optional)</label>
                <textarea
                  placeholder="Tell us about your financial goals..."
                  rows={3}
                  className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white text-[15px] font-dm outline-none transition-colors duration-200 focus:border-gold resize-y min-h-[100px]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-gold to-gold-light text-navy py-4 border-none rounded-lg text-[15px] font-semibold font-dm cursor-pointer transition-all duration-200 mt-2 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)]"
              >
                Request Free Consultation →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
