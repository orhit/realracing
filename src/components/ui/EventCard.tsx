"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export default function EventCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "metallic-finish p-8 flex flex-col items-start gap-4 transition-all hover:border-primary/50",
        className
      )}
    >
      <div className="w-12 h-12 rounded-none skew-x-[-12deg] bg-primary/20 flex items-center justify-center text-primary mb-2">
        <Icon className="w-6 h-6 skew-x-[12deg]" />
      </div>
      <h3 className="text-2xl font-black uppercase italic tracking-tighter">
        {title}
      </h3>
      <p className="text-foreground/60 leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 text-primary font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform inline-flex items-center gap-2"
      >
        Learn More &rarr;
      </Link>
    </motion.div>
  );
}
