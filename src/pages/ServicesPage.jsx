import React from 'react';
import ExplodedServices from '../components/ExplodedServices';
import FinalCta from '../components/FinalCta';
import { Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="pt-24 min-h-screen bg-[#080808]">
      {/* Header Banner */}
      <div className="bg-workshop-mesh py-20 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech tracking-widest uppercase text-[#FF3D00] mb-4">
            <Wrench className="w-3.5 h-3.5" />
            FULL SERVICE CATALOGUE
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            MOTORCYCLE REPAIR & <br />
            <span className="metallic-text">PRECISION SERVICING.</span>
          </h1>
          <p className="text-[#8E9296] text-base sm:text-lg max-w-2xl mx-auto mt-4 font-sans">
            From routine oil flushes to full engine rebuilds and 3-step ceramic body polish — delivered at your doorstep across Pune & PCMC.
          </p>
        </div>
      </div>

      {/* Interactive Machine Exploder Component */}
      <ExplodedServices onOpenBooking={onOpenBooking} />

      {/* Detailed Specs Grid */}
      <div className="py-20 bg-carbon-pattern border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white">
              THE Garage Work in <span className="text-[#FF3D00]">SERVICE STANDARD</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#FF3D00]/40 flex items-center justify-center text-[#FF3D00] font-display text-2xl font-bold">
                22+
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                SAFETY CHECKPOINTS
              </h3>
              <p className="text-xs text-[#8E9296] font-sans leading-relaxed">
                Every service includes brake pad audits, chain tension adjustment, battery voltage test, spark plug inspection, and air filter flush.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#FF3D00]/40 flex items-center justify-center text-[#FF3D00] font-display text-2xl font-bold">
                100%
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                GENUINE PARTS AT MRP
              </h3>
              <p className="text-xs text-[#8E9296] font-sans leading-relaxed">
                We use original OEM brake pads, clutch cables, spark plugs, and sealed branded engine oils billed strictly at printed MRP.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#FF3D00]/40 flex items-center justify-center text-[#FF3D00] font-display text-2xl font-bold">
                LIVE
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                WHATSAPP VIDEO REPORT
              </h3>
              <p className="text-xs text-[#8E9296] font-sans leading-relaxed">
                No surprises or unapproved charges. Receive live photos and diagnostic video clips of your motorcycle during the service process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
}
