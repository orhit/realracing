"use client";

import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 p-6 bg-accent/20 border border-white/5 metallic-finish"
      >
        <div className="w-12 h-12 bg-primary/20 flex items-center justify-center text-primary">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Email</h4>
          <p className="font-bold text-lg">rgc19feb@gmail.com</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-6 p-6 bg-accent/20 border border-white/5 metallic-finish"
      >
        <div className="w-12 h-12 bg-primary/20 flex items-center justify-center text-primary">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Phone</h4>
          <p className="font-bold text-lg">+91 9373522408</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-6 p-6 bg-accent/20 border border-white/5 metallic-finish"
      >
        <div className="w-12 h-12 bg-primary/20 flex items-center justify-center text-primary">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Location</h4>
          <p className="font-bold text-lg">Pune, Maharashtra, India</p>
        </div>
      </motion.div>

      <motion.a
        href="https://wa.me/919373522408"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-6 p-6 bg-green-500/10 border border-green-500/20 group hover:bg-green-500/20 transition-colors metallic-finish"
      >
        <div className="w-12 h-12 bg-green-500/20 flex items-center justify-center text-green-500">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-green-500/60">WhatsApp</h4>
          <p className="font-bold text-lg text-green-500">Chat with us &rarr;</p>
        </div>
      </motion.a>
    </div>
  );
}
