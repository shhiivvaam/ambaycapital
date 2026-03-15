"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#calculators", label: "Calculators" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] px-[5%] flex items-center justify-between h-[76px] 
        border-b border-[rgba(201,168,76,0.2)] backdrop-blur-xl transition-all duration-300
        ${scrolled ? "bg-[rgba(10,22,40,0.97)]" : "bg-[rgba(10,22,40,0.85)]"}`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-[8px] flex items-center justify-center 
          bg-gradient-to-br from-[#c9a84c] to-[#e2c97e]
          font-serif text-xl font-semibold text-[#0a1628]"
        >
          A
        </div>
        <span className="font-serif text-[22px] font-semibold text-white tracking-[0.5px]">
          Ambay <span className="text-[#c9a84c]">Capital</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative text-[#8a9ab5] text-sm font-normal 
                hover:text-[#c9a84c] transition-colors duration-200 group"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a84c] 
                transition-all duration-300 group-hover:w-full"
              />
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-4">
          <Link
            href="https://ambaycapital.wealthmagic.in/"
            className="px-5 py-[9px] rounded-sm font-medium text-sm
              border border-[#c9a84c] text-[#c9a84c]
              hover:bg-[rgba(201,168,76,0.1)] transition-colors"
          >
            Client Portal
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-[10px] rounded-sm font-medium text-sm
              bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] text-[#0a1628]
              hover:opacity-90 transition-opacity"
          >
            Book Consultation
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#112240] border-b border-[rgba(201,168,76,0.2)] 
            py-4 px-[5%] flex flex-col gap-3 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#8a9ab5] hover:text-[#c9a84c] transition-colors py-2 text-sm"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="https://ambaycapital.wealthmagic.in/"
              onClick={() => setMobileOpen(false)}
              className="text-center px-6 py-3 rounded-sm font-medium text-sm
                border border-[#c9a84c] text-[#c9a84c] transition-colors"
            >
              Client Portal
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="text-center px-6 py-3 rounded-sm font-medium text-sm
                bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] text-[#0a1628]"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
