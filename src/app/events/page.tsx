"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import EventCard from "@/components/ui/EventCard";
import ContactInfo from "@/components/ui/ContactInfo";
import { PartyPopper, Trophy, Building2, Users } from "lucide-react";
import Link from "next/link";

const eventTypes = [
  {
    title: "Society Events",
    description: "Weekend fun or festive celebrations for residential complexes. We bring the track to your clubhouse or parking zone.",
    icon: Users,
    href: "#contact",
  },
  {
    title: "Birthday Parties",
    description: "The ultimate gift for racing fans. We provide everything needed for a high-octane birthday competition.",
    icon: PartyPopper,
    href: "#contact",
  },
  {
    title: "College Fests",
    description: "Engage students with a professional racing setup. Perfect for technical or cultural festivals.",
    icon: Trophy,
    href: "#contact",
  },
  {
    title: "Corporate Events",
    description: "Dynamic team building and employee engagement. Foster leadership and collaboration through racing.",
    icon: Building2,
    href: "/corporate",
  },
];

export default function EventsPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Join the Race"
          title="Events & Bookings"
          description="From small private gatherings to massive corporate activations, we scale the Real Racing Experience to fit your needs."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {eventTypes.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Pricing Placeholders */}
        <section className="mb-24">
          <SectionHeader
            subtitle="Packages"
            title="Choose Your Tier"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="metallic-finish p-8 flex flex-col items-center text-center space-y-6">
              <span className="text-foreground/40 font-bold uppercase tracking-widest text-sm">Starter</span>
              <h4 className="text-3xl font-black uppercase italic tracking-tight">Compact</h4>
              <p className="text-foreground/60 text-sm">Perfect for small home parties. 2 Cockpits + Track.</p>
              <div className="w-full h-px bg-white/10" />
              <Link href="#contact" className="text-primary font-bold uppercase text-sm border-b border-primary pb-1 hover:text-red-400 hover:border-red-400 transition-colors">Enquire for Pricing</Link>
            </div>
            <div className="metallic-finish p-8 flex flex-col items-center text-center space-y-6 border-primary/50 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 text-[10px] font-bold uppercase italic tracking-widest">Most Popular</div>
              <span className="text-foreground/40 font-bold uppercase tracking-widest text-sm">Professional</span>
              <h4 className="text-3xl font-black uppercase italic tracking-tight">Grand Prix</h4>
              <p className="text-foreground/60 text-sm">Ideal for corporate & society events. 4 Cockpits + Full Track + Live Stream.</p>
              <div className="w-full h-px bg-white/10" />
              <Link href="#contact" className="text-primary font-bold uppercase text-sm border-b border-primary pb-1 hover:text-red-400 hover:border-red-400 transition-colors">Enquire for Pricing</Link>
            </div>
            <div className="metallic-finish p-8 flex flex-col items-center text-center space-y-6">
              <span className="text-foreground/40 font-bold uppercase tracking-widest text-sm">Elite</span>
              <h4 className="text-3xl font-black uppercase italic tracking-tight">Custom</h4>
              <p className="text-foreground/60 text-sm">Bespoke setups for large festivals and brand launches.</p>
              <div className="w-full h-px bg-white/10" />
              <Link href="#contact" className="text-primary font-bold uppercase text-sm border-b border-primary pb-1 hover:text-red-400 hover:border-red-400 transition-colors">Contact for Proposal</Link>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <div id="contact" className="max-w-xl mx-auto">
          <SectionHeader
            subtitle="Get Started"
            title="Book Your Event"
            description="Ready to bring the experience to your event? Reach out to us directly for bookings and enquiries."
          />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
