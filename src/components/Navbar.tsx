'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link href="#" className="nav-logo">
        <div className="logo-icon">A</div>
        <div className="logo-text">Ambay <span>Capital</span></div>
      </Link>
      <ul className="nav-links">
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#calculators">Calculators</Link></li>
        <li><Link href="#testimonials">Clients</Link></li>
        <li><Link href="#contact" className="nav-cta">Book Consultation</Link></li>
      </ul>
    </nav>
  );
}
