"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Trophy, Users, Building2, PartyPopper } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import EventCard from "@/components/ui/EventCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 leading-none">
              Drive <span className="text-primary text-glow">Real.</span> <br />
              Feel <span className="text-primary text-glow">Real.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 font-medium tracking-tight">
              Control high-performance RC cars from a professional racing cockpit. 
              The most immersive FPV racing experience on the planet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/events"
                className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-none skew-x-[-12deg] font-black uppercase italic text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,0,0,0.4)]"
              >
                <span className="inline-block skew-x-[12deg] flex items-center gap-2">
                  Book an Event <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                href="/franchise"
                className="w-full sm:w-auto border-2 border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-none skew-x-[-12deg] font-black uppercase italic text-lg transition-all"
              >
                <span className="inline-block skew-x-[12deg]">Partner With Us</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            subtitle="The Concept"
            title="Real Power. Zero Risk."
            description="We've bridged the gap between virtual racing and reality. Our custom-built cockpits connect you directly to real-world RC cars via low-latency FPV technology."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="metallic-finish p-8 space-y-4"
            >
              <Zap className="text-primary w-10 h-10" />
              <h3 className="text-xl font-bold uppercase italic">Real Control</h3>
              <p className="text-foreground/60">
                Direct hydraulic-feel steering and responsive pedals. You aren't just playing a game; you're driving a machine.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="metallic-finish p-8 space-y-4 border-t-2 border-primary"
            >
              <Trophy className="text-primary w-10 h-10" />
              <h3 className="text-xl font-bold uppercase italic">FPV Immersion</h3>
              <p className="text-foreground/60">
                High-definition first-person view goggles or displays that put you right in the driver's seat of the car.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="metallic-finish p-8 space-y-4"
            >
              <Users className="text-primary w-10 h-10" />
              <h3 className="text-xl font-bold uppercase italic">Multiplayer Racing</h3>
              <p className="text-foreground/60">
                Go wheel-to-wheel against your friends, colleagues, or rivals in a high-stakes competitive environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <SectionHeader
            subtitle="Use Cases"
            title="Events That Move People"
            align="left"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <EventCard
              title="Parties"
              description="Make your birthday or private party the talk of the town with an adrenaline-fueled racing setup."
              icon={PartyPopper}
              href="/events"
            />
            <EventCard
              title="College Fests"
              description="High-engagement entertainment that attracts crowds and creates unforgettable memories for students."
              icon={Trophy}
              href="/events"
            />
            <EventCard
              title="Corporate"
              description="The ultimate team-building experience. Boost morale and foster healthy competition among teams."
              icon={Building2}
              href="/corporate"
            />
            <EventCard
              title="Societies"
              description="Bring the community together with a professional racing event right in your residential complex."
              icon={Users}
              href="/events"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 racing-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic italic italic tracking-tighter mb-8">
            Ready to Take the Wheel?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">
            Book your slot now or enquire about bringing the Real Racing Experience to your next big event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-none skew-x-[-12deg] font-black uppercase italic text-lg hover:bg-zinc-100 transition-all"
            >
              <span className="inline-block skew-x-[12deg]">Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
