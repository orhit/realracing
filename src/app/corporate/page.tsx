"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Briefcase, Target, Zap, Award } from "lucide-react";
import ContactInfo from "@/components/ui/ContactInfo";
import { motion } from "framer-motion";

const corporateBenefits = [
  {
    title: "Team Building",
    description: "Break the ice and build trust through friendly competition and shared adrenaline.",
    icon: Target,
  },
  {
    title: "Brand Activation",
    description: "Launch your product with a high-impact, memorable experience that draws crowds.",
    icon: Zap,
  },
  {
    title: "Employee Engagement",
    description: "Reward your high-performers with a unique experience they can't get anywhere else.",
    icon: Award,
  },
  {
    title: "Custom Branding",
    description: "We can brand the cars, the track, and the UI to match your company's identity.",
    icon: Briefcase,
  },
];

export default function CorporatePage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Enterprise Solutions"
          title="Elevate Your Corporate Culture"
          description="Transform your next corporate gathering into a high-octane racing event. Professional, scalable, and guaranteed to engage."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 mb-32">
          {corporateBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-accent/20 p-8 border-l-4 border-primary group hover:bg-accent/40 transition-colors"
            >
              <benefit.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase italic mb-4">{benefit.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Why Companies Choose Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white" />
                </div>
                <p className="text-foreground/80"><strong>Turnkey Setup:</strong> We handle everything from transportation to track setup and technical support.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white" />
                </div>
                <p className="text-foreground/80"><strong>Professional Staff:</strong> Trained race marshals and technicians ensure a smooth and safe experience.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white" />
                </div>
                <p className="text-foreground/80"><strong>Data & Analytics:</strong> Live leaderboards and performance tracking for competitive team building.</p>
              </div>
            </div>
          </div>

          <div className="bg-black border border-white/5 p-8 metallic-finish">
            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Request a Proposal</h3>
            <p className="text-foreground/60 mb-8">Contact us to discuss your corporate event requirements and get a customized quote.</p>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
