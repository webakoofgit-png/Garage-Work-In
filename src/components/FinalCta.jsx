import React from 'react';
import { Phone, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function FinalCta({ onOpenBooking }) {
  return (
    <section className="relative py-32 bg-carbon-pattern border-b border-white/10 overflow-hidden flex items-center justify-center text-center">
      {/* Dual Headlight Ignition Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#FF3D00]/30 via-[#FF3D00]/10 to-transparent blur-[140px] pointer-events-none animate-pulse" />

      {/* Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111] border border-[#FF3D00] text-xs font-tech text-[#FF3D00] uppercase tracking-widest neon-glow-red">
          <Zap className="w-4 h-4 animate-bounce" />
          SPECIAL OFFER: 10% OFF YOUR FIRST SERVICE
        </div>

        <h2 className="font-display text-5xl sm:text-8xl font-black uppercase text-white tracking-tight leading-none drop-shadow-2xl">
          PUNE, YOUR BIKE IS NEXT. <br />
          <span className="text-[#FF3D00] neon-text-red">GIVE IT TO THE GARAGE WORK IN.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#8E9296] font-sans max-w-2xl mx-auto leading-relaxed">
          Book your doorstep service now. Free pickup & drop across Pune & PCMC, 22-point safety inspection, genuine engine oils at MRP, and pay after delivery.
        </p>

        {/* CTA Buttons Stage with Glow */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={onOpenBooking}
            className="px-10 py-5 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-sm sm:text-base uppercase tracking-widest rounded-xl shadow-2xl shadow-[#FF3D00]/40 transition-all transform hover:-translate-y-1 flex items-center gap-3 group"
            data-cursor="BOOK"
          >
            <span>BOOK ON WHATSAPP NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:+918888888888"
            className="px-8 py-5 bg-[#111] hover:bg-[#1f2124] text-white font-tech font-bold text-sm sm:text-base uppercase tracking-widest rounded-xl border border-white/20 transition-all flex items-center gap-3"
            data-cursor="CALL"
          >
            <Phone className="w-5 h-5 text-[#FF3D00]" />
            <span>CALL HELPLINE NOW</span>
          </a>
        </div>

        {/* Assurance Pills */}
        <div className="pt-8 flex flex-wrap justify-center gap-6 text-xs font-tech text-[#8E9296]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Advance Required</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Pay After Delivery & Test Ride</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Same-Day Return Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
