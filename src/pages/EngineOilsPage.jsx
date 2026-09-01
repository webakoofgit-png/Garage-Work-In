import React from 'react';
import OilExperience from '../components/OilExperience';
import FinalCta from '../components/FinalCta';
import { Droplet, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function EngineOilsPage({ onOpenBooking }) {
  return (
    <div className="pt-24 min-h-screen bg-[#080808]">
      {/* Header Banner */}
      <div className="bg-workshop-mesh py-20 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech tracking-widest uppercase text-[#FF3D00] mb-4">
            <Droplet className="w-3.5 h-3.5 fill-[#FF3D00]" />
            100% GENUINE BRANDED OILS AT MRP
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            THE RIGHT OIL. <br />
            <span className="metallic-text">UNMATCHED PERFORMANCE.</span>
          </h1>
          <p className="text-[#8E9296] text-base sm:text-lg max-w-2xl mx-auto mt-4 font-sans">
            We never use loose or duplicate oil. Every bottle is unsealed right in front of you or verified with original QR hologram seals, billed strictly at printed MRP.
          </p>
        </div>
      </div>

      <OilExperience onOpenBooking={onOpenBooking} />

      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
}
