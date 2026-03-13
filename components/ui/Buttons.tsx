"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export function PrimaryButton({
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const cls = `inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold text-[15px] 
    bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] text-[#0a1628] 
    shadow-[0_4px_20px_rgba(201,168,76,0.25)] 
    hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)] 
    hover:-translate-y-0.5 transition-all duration-200 ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={cls}
    >
      {children}
    </motion.button>
  );
}

export function SecondaryButton({
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const cls = `inline-flex items-center gap-2 px-8 py-4 rounded-sm font-normal text-[15px] 
    text-white border border-white/15 
    hover:border-[#c9a84c] hover:text-[#c9a84c] 
    transition-all duration-200 ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cls}
    >
      {children}
    </motion.button>
  );
}
