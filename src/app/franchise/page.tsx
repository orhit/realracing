"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TrendingUp, Shield, Rocket, Globe } from "lucide-react";
import ContactInfo from "@/components/ui/ContactInfo";
import { motion } from "framer-motion";

const franchiseBenefits = [
  {
    title: "Proven Model",
    description: "A business model tested in various events and cities with high ROI potential.",
    icon: TrendingUp,
  },
  {
    title: "Full Tech Support",
    description: "Proprietary software and hardware setup provided by our central engineering team.",
    icon: Shield,
  },
  {
    title: "Brand Marketing",
    description: "Benefit from our central marketing campaigns and established brand identity.",
    icon: Rocket,
  },
  {
    title: "Territory Rights",
    description: "Exclusive rights to operate in your designated city or territory.",
    icon: Globe,
  },
];

export default function FranchisePage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Partnership"
          title="Drive the Future of Entertainment"
          description="We are expanding rapidly and looking for passionate partners to bring the Real Racing Experience to cities across the country."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-20 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Why Franchise With Us?</h2>
            <p className="text-foreground/60 leading-relaxed">
              Real Racing Experience is more than just a business; it's a category creator. By bridging the gap between digital simulation and real-world mechanics, we provide an experience that is impossible to replicate at home.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {franchiseBenefits.map((benefit, index) => (
                <div key={index} className="space-y-3">
                  <benefit.icon className="w-8 h-8 text-primary" />
                  <h4 className="font-bold uppercase italic">{benefit.title}</h4>
                  <p className="text-sm text-foreground/40">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-accent/10 border border-white/5 p-8 metallic-finish"
          >
             <h3 className="text-2xl font-black uppercase italic mb-6">What's in the Box?</h3>
             <ul className="space-y-4">
               {[
                 "4-6 Professional Racing Cockpits",
                 "Custom FPV-enabled RC Fleet",
                 "Portable Track Modules & Barriers",
                 "Live Leaderboard System",
                 "Race Management Software",
                 "On-site Training & Support"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                   <span className="text-foreground/80">{item}</span>
                 </li>
               ))}
             </ul>
          </motion.div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-zinc-900/50 p-10 border border-white/5 relative metallic-finish">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4 text-glow">Apply for Franchise</h3>
            <p className="text-foreground/60 mb-8">Reach out to our business development team to receive the franchise deck and schedule a discovery call.</p>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
