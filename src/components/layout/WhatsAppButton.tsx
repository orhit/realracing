"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919373522408"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </motion.a>
  );
}
