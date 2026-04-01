"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { 
  CONTACT_EMAIL, 
  CONTACT_PHONE, 
  CONSULTATION_INTERESTS, 
  WHATSAPP_URL, 
  GOOGLE_MAPS_URL 
} from "@/lib/constants";

const ACTION_CARDS = [
  { icon: "📞", label: "Direct Call", value: CONTACT_PHONE, href: "tel:+919818556671" },
  { icon: "💬", label: "WhatsApp", value: "+91 98185 56671", href: WHATSAPP_URL, target: "_blank" },
  { icon: "✉️", label: "Email Us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: "📍", label: "Office Location", value: "Supertech Eco Village-1, Gr. Noida", href: GOOGLE_MAPS_URL, target: "_blank" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "",
    email: "", city: "", interest: CONSULTATION_INTERESTS[0], message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or WhatsApp us directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            Fill out the form and one of our advisors will reach out. Or, use the options below to connect with us immediately.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {ACTION_CARDS.map((d) => (
              <a 
                key={d.label}
                href={d.href}
                target={d.target}
                rel={d.target ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 
                  hover:bg-white/[0.05] hover:border-[#c9a84c]/30 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center 
                  text-[18px] bg-[rgba(201,168,76,0.1)] group-hover:bg-[#c9a84c] group-hover:text-[#0a1628] 
                  transition-colors flex-shrink-0"
                >
                  {d.icon}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[12px] uppercase tracking-wider text-[#8a9ab5] mb-0.5">{d.label}</p>
                  <p className="text-[14px] font-medium text-white truncate">{d.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Map View */}
          <div className="relative rounded-xl overflow-hidden mb-10 border border-[rgba(201,168,76,0.15)] h-[250px] w-full bg-[#112240] group">
            <iframe 
              src="https://maps.google.com/maps?q=Supertech%20Eco%20Village-1,%20Sector%201,%20Greater%20Noida,%20UP%20201318&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
            
            <a 
              href={GOOGLE_MAPS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 bg-[#0a1628]/80 backdrop-blur-md text-white px-4 py-2 rounded-lg font-medium text-[13px] 
                shadow-xl flex items-center gap-2 hover:bg-[#c9a84c] hover:text-[#0a1628] transition-colors border border-white/10"
            >
              <span className="text-base">🗺️</span> Get Directions
            </a>
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
                <FormField label="First Name" name="firstName" type="text" placeholder="Rajesh" value={form.firstName} onChange={handleChange} />
                <FormField label="Last Name" name="lastName" type="text" placeholder="Kumar" value={form.lastName} onChange={handleChange} />
              </div>
              <FormField label="Phone Number" name="phone" type="tel" placeholder="+91 98185 56671" value={form.phone} onChange={handleChange} />
              <FormField label="Email Address" name="email" type="email" placeholder="ambaycapital8@gmail.com" value={form.email} onChange={handleChange} />
              <FormField label="City" name="city" type="text" placeholder="Noida" value={form.city} onChange={handleChange} />

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
                disabled={isSubmitting}
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(201,168,76,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-[15px] text-[#0a1628]
                  bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] mt-2 cursor-pointer 
                  ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Sending Request..." : "Request Free Consultation →"}
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
