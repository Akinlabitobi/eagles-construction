"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/data";
import Icon from "./Icon";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-black/25"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <Icon name="chat" className="h-6 w-6" strokeWidth={2} />
      <span className="hidden pr-1 text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}
