"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Corporate", href: "/corporate" },
  { name: "Franchise", href: "/franchise" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-40 h-20 overflow-hidden transition-transform group-hover:scale-105">
            <Image 
              src="/realracinglogo.jpeg" 
              alt="Real Racing Experience Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary whitespace-nowrap",
                pathname === link.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/events"
            className="bg-primary text-white px-5 py-2 rounded-none skew-x-[-12deg] font-black uppercase text-[10px] tracking-widest hover:bg-red-700 transition-colors ml-4"
          >
            <span className="inline-block skew-x-[12deg]">Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-bold uppercase tracking-widest",
                    pathname === link.href ? "text-primary" : "text-foreground/70"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/events"
                className="bg-primary text-white px-6 py-3 text-center font-bold uppercase"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
