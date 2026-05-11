"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactInfo from "@/components/ui/ContactInfo";

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Get in Touch"
          title="Contact Us"
          description="Have questions? Want to see a live demo? Reach out to us through any of the channels below."
        />

        <div className="max-w-xl mx-auto mt-20">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
