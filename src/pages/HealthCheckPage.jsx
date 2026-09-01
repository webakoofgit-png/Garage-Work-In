import React from 'react';
import BikeHealthCheck from '../components/BikeHealthCheck';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FinalCta from '../components/FinalCta';
import { Activity, ShieldCheck } from 'lucide-react';

export default function HealthCheckPage({ onOpenBooking }) {
  return (
    <div className="pt-24 min-h-screen bg-[#080808]">
      {/* Header Banner */}
      <div className="bg-workshop-mesh py-20 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech tracking-widest uppercase text-[#FF3D00] mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            25-POINT MOTORCYCLE DIAGNOSTICS
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            KNOW YOUR BIKE. <br />
            <span className="metallic-text">RIDE WITH CONFIDENCE.</span>
          </h1>
          <p className="text-[#8E9296] text-base sm:text-lg max-w-2xl mx-auto mt-4 font-sans">
            Simulate your bike's health score or schedule a comprehensive doorstep diagnostic technician visit for ₹499 across Pune & PCMC.
          </p>
        </div>
      </div>

      <BikeHealthCheck onOpenBooking={onOpenBooking} />

      <BeforeAfterSlider />

      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
}
