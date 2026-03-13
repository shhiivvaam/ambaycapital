"use client";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-7 right-7 w-[58px] h-[58px] bg-[#25D366] rounded-full 
        flex items-center justify-center text-2xl z-[200]
        shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 2, delay: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      💬
    </motion.a>
  );
}
