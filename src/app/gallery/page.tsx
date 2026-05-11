"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

// Media items (Add your filenames here)
const mediaItems = [
  { type: "image", src: "/gallery-1.jpg", alt: "Racing Event 1" },
  { type: "image", src: "/gallery-2.jpg", alt: "Racing Event 2" },
  { type: "image", src: "/gallery-3.jpg", alt: "Racing Event 3" },
  { type: "video", src: "/hero-video.mp4", alt: "Racing Action" },
  { type: "image", src: "/gallery-4.jpg", alt: "Racing Event 4" },
  { type: "image", src: "/gallery-5.jpg", alt: "Racing Event 5" },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  
  const nextItem = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % mediaItems.length);
    }
  };

  const prevItem = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + mediaItems.length) % mediaItems.length);
    }
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Visuals"
          title="The Gallery"
          description="A glimpse into the adrenaline, the technology, and the unforgettable moments at Real Racing Experience."
        />

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-video cursor-pointer overflow-hidden metallic-finish group"
            >
              {item.type === "image" ? (
                <div className="w-full h-full relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay Placeholder if image missing */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold uppercase text-xs tracking-widest border border-white/20 px-4 py-2">View Full</span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative flex items-center justify-center bg-zinc-900">
                  <video src={item.src} className="object-cover w-full h-full opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-white">
                      <ChevronRight className="w-6 h-6 ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Carousel Overlay */}
        <AnimatePresence>
          {currentIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[110]"
              >
                <X className="w-10 h-10" />
              </button>

              <button
                onClick={prevItem}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-[110]"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <button
                onClick={nextItem}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-[110]"
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-5xl aspect-video flex items-center justify-center"
              >
                {mediaItems[currentIndex].type === "image" ? (
                  <Image
                    src={mediaItems[currentIndex].src}
                    alt={mediaItems[currentIndex].alt}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <video
                    src={mediaItems[currentIndex].src}
                    controls
                    autoPlay
                    className="max-h-full max-w-full"
                  />
                )}
                <div className="absolute -bottom-10 left-0 right-0 text-center">
                  <p className="text-foreground/60 uppercase tracking-widest text-sm font-bold">
                    {mediaItems[currentIndex].alt} ({currentIndex + 1} / {mediaItems.length})
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
