"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, CONSULTATION_INTERESTS } from "@/lib/constants";

interface ContactDetail {
  icon: string;
  label: string;
  value: string;
}

const DETAILS: ContactDetail[] = [
  { icon: "📍", label: "Office Address", value: CONTACT_ADDRESS },
  { icon: "📞", label: "Phone / WhatsApp", value: CONTACT_PHONE },
  { icon: "✉️", label: "Email", value: CONTACT_EMAIL },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "",
    email: "", city: "", interest: CONSULTATION_INTERESTS[0], message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-[5%] bg-[#0a1628]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">

        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Get In Touch</SectionTag>
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-normal leading-[1.15] mb-4">
            Let&rsquo;s Start Your
            <br />
            <em className="italic text-[#c9a84c]">Financial Journey.</em>
          </h2>
          <p className="text-[15px] text-[#8a9ab5] leading-relaxed mb-10 font-light">
            Fill out the form and one of our advisors will reach out within 24
            hours for a free, no-obligation consultation.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center 
                  text-base bg-[rgba(201,168,76,0.1)] flex-shrink-0"
                >
                  {d.icon}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-white">{d.label}</p>
                  <p className="text-[13px] text-[#8a9ab5]">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certification box */}
          <div
            className="p-6 rounded-xl border border-[rgba(201,168,76,0.2)]"
            style={{ background: "rgba(201,168,76,0.07)" }}
          >
            <p className="font-serif text-xl mb-2">IRDAI &amp; AMFI Certified</p>
            <p className="text-[13px] text-[#8a9ab5] leading-relaxed">
              Ambay Capital is a SEBI registered investment advisor and IRDAI
              licensed insurance broker. All advice is regulated and client
              interests are fully protected.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/[0.03] border border-[rgba(201,168,76,0.2)] rounded-2xl p-10 md:p-12"
        >
          <h3 className="font-serif text-[26px] mb-2">Book Your Free Consultation</h3>
          <p className="text-[14px] text-[#8a9ab5] mb-8">
            No charges, no obligations — just expert financial guidance.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-5xl mb-4">✓</div>
              <p className="font-serif text-2xl text-[#c9a84c] mb-2">Request Submitted!</p>
              <p className="text-[#8a9ab5] text-[15px]">
                We&rsquo;ll call you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="First Name" name="firstName" type="text" placeholder="Rahul" value={form.firstName} onChange={handleChange} />
                <FormField label="Last Name" name="lastName" type="text" placeholder="Sharma" value={form.lastName} onChange={handleChange} />
              </div>
              <FormField label="Phone Number" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
              <FormField label="Email Address" name="email" type="email" placeholder="rahul@email.com" value={form.email} onChange={handleChange} />
              <FormField label="City" name="city" type="text" placeholder="Mumbai" value={form.city} onChange={handleChange} />

              {/* Select */}
              <div>
                <label className="block text-[12px] uppercase tracking-[1px] text-[#8a9ab5] mb-2">
                  I&rsquo;m Interested In
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg 
                    px-4 py-3.5 text-white text-[15px] outline-none 
                    focus:border-[#c9a84c] transition-colors"
                >
                  {CONSULTATION_INTERESTS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Textarea */}
              <div>
                <label className="block text-[12px] uppercase tracking-[1px] text-[#8a9ab5] mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your financial goals..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg 
                    px-4 py-3.5 text-white text-[15px] outline-none resize-y
                    focus:border-[#c9a84c] transition-colors placeholder:text-[#8a9ab5]/50"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(201,168,76,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-lg font-semibold text-[15px] text-[#0a1628]
                  bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] mt-2 cursor-pointer"
              >
                Request Free Consultation →
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Reusable input field
function FormField({
  label, name, type, placeholder, value, onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-[12px] uppercase tracking-[1px] text-[#8a9ab5] mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/10 rounded-lg 
          px-4 py-3.5 text-white text-[15px] outline-none 
          focus:border-[#c9a84c] transition-colors placeholder:text-[#8a9ab5]/50"
      />
    </div>
  );
}
