"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactInfo from "@/components/ui/ContactInfo";
import { Briefcase, Rocket, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation",
    description: "We push the boundaries of what's possible in human-machine interaction.",
    icon: Rocket,
  },
  {
    title: "Teamwork",
    description: "Our races and our company are won through collaboration.",
    icon: Users,
  },
  {
    title: "Passion",
    description: "We live and breathe the adrenaline of the track.",
    icon: Heart,
  },
];

export default function CareersPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Join the Team"
          title="Careers at Real Racing"
          description="We're looking for passionate individuals to help us define the future of immersive entertainment."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-20 mb-32">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-accent/20 p-8 border border-white/5 metallic-finish text-center"
            >
              <div className="w-16 h-16 bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase italic mb-4">{value.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black border border-white/5 p-12 metallic-finish">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8 text-glow">Open Positions</h2>
            <p className="text-foreground/60 mb-12">
              We are always on the lookout for talented engineers, event coordinators, and racing enthusiasts. Even if you don't see a role that fits perfectly, reach out!
            </p>
            
            <div className="space-y-6 mb-16">
              {[
                "Event Operations Manager",
                "Hardware Technician (RC & Sim)",
                "Social Media Strategist",
                "Full Stack Developer"
              ].map((role, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-accent/10 border border-white/5 hover:border-primary/50 transition-colors group">
                  <span className="text-xl font-bold uppercase italic">{role}</span>
                  <span className="text-primary font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Full Time</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-12 border-t border-white/10">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">How to Apply</h3>
              <p className="text-foreground/60 mb-8">Send your resume and a brief intro to our team.</p>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
