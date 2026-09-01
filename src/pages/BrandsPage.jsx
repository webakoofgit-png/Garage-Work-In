import React from 'react';
import BrandMarquee from '../components/BrandMarquee';
import SuperbikeSection from '../components/SuperbikeSection';
import FinalCta from '../components/FinalCta';
import { ShieldCheck, Bike, Award } from 'lucide-react';

export default function BrandsPage({ onOpenBooking }) {
  return (
    <div className="pt-24 min-h-screen bg-[#080808]">
      {/* Header Banner */}
      <div className="bg-workshop-mesh py-20 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech tracking-widest uppercase text-[#FF3D00] mb-4">
            <Bike className="w-3.5 h-3.5" />
            ALL MAKES & MODELS SERVICED
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            EVERY MOTORCYCLE BRAND. <br />
            <span className="metallic-text">ONE EXPERT TEAM.</span>
          </h1>
          <p className="text-[#8E9296] text-base sm:text-lg max-w-2xl mx-auto mt-4 font-sans">
            Whether you ride a daily commuter, a heavy cruiser, or an imported high-revving superbike, our master mechanics carry specialized diagnostic tools and genuine spares.
          </p>
        </div>
      </div>

      <BrandMarquee />

      <SuperbikeSection onOpenBooking={onOpenBooking} />

      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
}
