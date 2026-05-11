"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col mb-12", alignClasses[align], className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="h-1 bg-primary mt-6"
      />
    </div>
  );
}
