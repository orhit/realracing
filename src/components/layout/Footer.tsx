import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Camera, Send, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center mb-6 group">
            <div className="relative w-48 h-24 overflow-hidden">
              <Image 
                src="/realracinglogo.jpeg" 
                alt="Real Racing Experience Logo" 
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-foreground/60 text-sm leading-relaxed mb-6">
            The ultimate professional-grade racing simulation experience. Feel the adrenaline, master the track, and push your limits.
          </p>
          <div className="flex gap-4">
            <Link 
              href="https://www.instagram.com/real_racinggg/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-white"
            >
              <Camera className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.youtube.com/@RealRacing8187/shorts" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-white"
            >
              <Play className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/events" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">Events</Link></li>
            <li><Link href="/corporate" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">Corporate</Link></li>
            <li><Link href="/franchise" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">Franchise</Link></li>
            <li><Link href="/gallery" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">Company</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">About Us</Link></li>
            <li><Link href="/careers" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">Careers</Link></li>
            <li><Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">Contact</Link></li>
            <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm uppercase">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">Newsletter</h4>
          <p className="text-foreground/60 text-sm mb-4">Subscribe to get racing tips and event updates.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-accent/50 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-primary flex-1 text-white"
            />
            <button className="bg-primary px-4 py-2 text-sm font-bold uppercase hover:bg-red-700 transition-colors text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-foreground/40 text-xs">© 2026 Real Racing Experience. All rights reserved.</p>
        <p className="text-foreground/40 text-xs">Crafted for performance.</p>
      </div>
    </footer>
  );
}
