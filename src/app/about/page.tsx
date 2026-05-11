"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Our Journey"
          title="From Idea to Asphalt"
          description="The story of how we decided to bridge the digital and physical worlds."
        />

        <div className="max-w-4xl mx-auto space-y-16 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg"
          >
            <h2 className="text-3xl font-bold uppercase italic italic tracking-tight text-white mb-6">The Spark</h2>
            <p className="text-foreground/70">
              It started with a simple question: "Why should racing simulators be limited to pixels?" We loved the precision of sim racing but missed the visceral physics of the real world. In late 2023, we built our first prototype—a jury-rigged RC car with a cheap camera strapped to it, controlled by a Logitech wheel.
            </p>
            <p className="text-foreground/70 mt-4">
              The moment we saw the first-person feed from the car's perspective while feeling the steering wheel tug in our hands, we knew we had something special.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-accent/20 border border-white/5 flex items-center justify-center italic text-primary/40 font-black text-2xl"
            >
              [Early Prototype Image]
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold uppercase italic italic tracking-tight text-white mb-6">Building the System</h2>
              <p className="text-foreground/70">
                We spent the next year refining the low-latency transmission system and engineering professional-grade cockpits. We focused on making the experience accessible yet deep—easy enough for a child to start, but challenging enough for a pro to master.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 border-l-4 border-primary p-12 metallic-finish"
          >
            <h2 className="text-4xl font-black uppercase italic italic tracking-tighter mb-8">The Vision</h2>
            <p className="text-xl text-foreground/80 leading-relaxed font-medium">
              Our vision is to define the future of human-machine control. Today it's racing RC cars for entertainment; tomorrow, our technology could be used to control machines in environments too dangerous for humans, all while maintaining the intuitive feel of being right there in the driver's seat.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
