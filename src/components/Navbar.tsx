'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-[5%] flex items-center justify-between h-[76px] transition-all duration-300 border-b border-border backdrop-blur-[20px] ${
        scrolled ? 'bg-[#0a1628f7]' : 'bg-[#0a1628d9]'
      }`}
    >
      <Link href="#" className="flex items-center gap-3 no-underline">
        <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center font-cormorant text-[20px] font-semibold text-navy">
          A
        </div>
        <div className="font-cormorant text-[22px] font-semibold text-white tracking-[0.5px]">
          Ambay <span className="text-gold">Capital</span>
        </div>
      </Link>
      <ul className="hidden md:flex gap-8 list-none m-0 p-0 text-[14px]">
        {['Services', 'About', 'Calculators', 'Clients'].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-text-muted no-underline transition-colors duration-200 relative group hover:text-gold"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#contact"
            className="bg-gradient-to-br from-gold to-gold-light text-navy px-6 py-2.5 rounded hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)] transition-all font-semibold"
          >
            Book Consultation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
