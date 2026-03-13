"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOT_KNOWLEDGE, CONTACT_INFO } from "@/lib/chatData";
import type { ChatOption } from "@/lib/chatData";
import Link from "next/link";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  options?: ChatOption[];
  link?: string;
  whatsApp?: boolean;
}

// Renders markdown-lite: **bold**, \n newlines, and bullet • points
function RenderText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-[#e2c97e]">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>
            {part.split("\n").map((line, j, arr) => (
              <span key={j}>
                {line}
                {j < arr.length - 1 && <br />}
              </span>
            ))}
          </span>
        )
      )}
    </span>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const msgId = useRef(0);

  // Auto-open greeting hint after 6s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open && !hasGreeted) setHasGreeted(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [open, hasGreeted]);

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function addBotMessage(key: string) {
    const data = BOT_KNOWLEDGE[key];
    if (!data) return;
    setTyping(true);
    const delay = Math.min(600 + data.text.length * 2, 1400);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: msgId.current++,
          from: "bot",
          text: data.text,
          options: data.options,
          link: data.link,
          whatsApp: data.whatsApp,
        },
      ]);
      // Auto-open WA if needed
      if (data.whatsApp && key === "whatsapp") {
        setTimeout(() => window.open(CONTACT_INFO.WHATSAPP_URL, "_blank"), 500);
      }
      // Auto navigate for link-type endings
      if (data.link && data.isEnd && typeof window !== "undefined") {
        setTimeout(() => {
          window.location.href = data.link!;
        }, 1000);
      }
    }, delay);
  }

  function handleOpen() {
    setOpen(true);
    setHasGreeted(false);
    if (messages.length === 0) {
      setTimeout(() => addBotMessage("start"), 300);
    }
  }

  function handleOption(value: string) {
    const label = BOT_KNOWLEDGE[value]
      ? BOT_KNOWLEDGE.start.options?.find((o) => o.value === value)?.label ?? value
      : value;

    // Append user reply bubble
    setMessages((prev) => [
      ...prev,
      { id: msgId.current++, from: "user", text: label.replace(/^[^\s]+\s/, "") },
    ]);

    if (value === "whatsapp") {
      window.open(CONTACT_INFO.WHATSAPP_URL, "_blank");
      addBotMessage("whatsapp");
    } else {
      addBotMessage(value);
    }
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatwindow"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-[92px] right-5 sm:right-7 z-[200] w-[calc(100vw-40px)] sm:w-[390px] max-h-[82vh] flex flex-col rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.25)",
              background: "linear-gradient(160deg, #0a1628 0%, #112240 100%)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #112240, #0d1e38)" }}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] flex items-center justify-center font-serif text-xl text-[#0a1628] font-bold">
                  A
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#112240]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-serif text-[16px] font-semibold text-white leading-none mb-1">
                  Shivam · Financial Advisor
                </p>
                <p className="text-[12px] text-[#8a9ab5] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full inline-block" />
                  Online · Ambay Capital
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 flex items-center justify-center transition-colors text-base"
                >
                  💬
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-[#8a9ab5] hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 overscroll-contain scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2.5 ${msg.from === "user" ? "flex-row-reverse" : ""}`}>
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] flex items-center justify-center font-serif text-xs text-[#0a1628] font-bold flex-shrink-0 mt-1">
                      A
                    </div>
                  )}
                  <div className={`max-w-[80%] space-y-3 ${msg.from === "user" ? "items-end" : "items-start"} flex flex-col`}>
                    {/* Bubble */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                        msg.from === "user"
                          ? "bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] text-[#0a1628] font-medium rounded-br-sm"
                          : "bg-white/[0.06] text-[#d0dde8] border border-white/[0.07] rounded-bl-sm"
                      }`}
                    >
                      {msg.from === "bot" ? <RenderText text={msg.text} /> : msg.text}
                    </motion.div>

                    {/* Options */}
                    {msg.from === "bot" && msg.options && (
                      <div className="flex flex-col gap-2 w-full max-w-[300px]">
                        {msg.options.map((opt) =>
                          opt.value === "whatsapp" ? (
                            <motion.button
                              key={opt.value}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              onClick={() => handleOption(opt.value)}
                              className="text-left px-4 py-2.5 rounded-xl text-[13px] font-medium
                               bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30
                               text-[#4ade80] transition-all duration-200 flex items-center gap-2"
                            >
                              {opt.label}
                            </motion.button>
                          ) : (
                            <motion.button
                              key={opt.value}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              onClick={() => handleOption(opt.value)}
                              className="text-left px-4 py-2.5 rounded-xl text-[13px] font-medium
                               bg-white/[0.05] hover:bg-[rgba(201,168,76,0.12)] 
                               border border-white/[0.08] hover:border-[rgba(201,168,76,0.35)]
                               text-[#c9d4e4] hover:text-[#e2c97e] transition-all duration-200"
                            >
                              {opt.label}
                            </motion.button>
                          )
                        )}

                        {/* CTA link if message has a link */}
                        {msg.link && (
                          <Link
                            href={msg.link}
                            className="text-center mt-1 px-4 py-2.5 rounded-xl text-[13px] font-semibold
                             bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] text-[#0a1628] hover:opacity-90 transition-opacity"
                          >
                            Open Now →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex gap-2.5 items-end">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e2c97e] flex items-center justify-center font-serif text-xs text-[#0a1628] font-bold flex-shrink-0">
                    A
                  </div>
                  <div className="bg-white/[0.06] border border-white/[0.07] rounded-2xl rounded-bl-sm px-4 py-3.5 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full block"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between flex-shrink-0">
              <p className="text-[11px] text-[#8a9ab5]">
                Powered by <span className="text-[#c9a84c]">Ambay Capital</span>
              </p>
              <a
                href={CONTACT_INFO.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium text-[#25D366] hover:text-[#4ade80] transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting Hint */}
      <AnimatePresence>
        {hasGreeted && !open && (
          <motion.div
            key="hint"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="fixed bottom-[92px] right-7 z-[199] max-w-[220px] shadow-2xl"
          >
            <div
              className="text-[13px] text-white px-4 py-3 rounded-2xl rounded-br-sm relative cursor-pointer leading-relaxed"
              style={{ background: "linear-gradient(135deg, #1a3356, #0f2444)", border: "1px solid rgba(201,168,76,0.3)" }}
              onClick={handleOpen}
            >
              👋 Hi! I&apos;m <strong className="text-[#c9a84c]">Shivam</strong>, your AI financial advisor. Got questions about insurance or investments?
              <div className="absolute -bottom-2 right-4 w-4 h-2 overflow-hidden">
                <div className="w-4 h-4 rotate-45 bg-[#1a3356] border border-[rgba(201,168,76,0.3)]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={open ? () => setOpen(false) : handleOpen}
        className="fixed bottom-7 right-5 sm:right-7 z-[200] w-[62px] h-[62px] rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #c9a84c, #e2c97e)",
          boxShadow: "0 6px 28px rgba(201,168,76,0.45), 0 0 0 2px rgba(201,168,76,0.2)",
        }}
        animate={open ? { rotate: 0, scale: 1 } : { scale: [1, 1.06, 1] }}
        transition={open ? {} : { duration: 2.5, delay: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.12, boxShadow: "0 8px 32px rgba(201,168,76,0.55)" }}
        whileTap={{ scale: 0.93 }}
        aria-label="Open AI Financial Advisor"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#0a1628] text-2xl font-bold leading-none"
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#0a1628] text-2xl"
            >
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Unread badge when closed */}
      {!open && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-[75px] right-[18px] sm:right-[30px] z-[201] w-5 h-5 bg-[#ef4444] rounded-full text-white text-[10px] font-bold flex items-center justify-center"
        >
          1
        </motion.span>
      )}
    </>
  );
}
