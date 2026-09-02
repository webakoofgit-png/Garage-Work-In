import React, { useState } from 'react';
import { Gauge, Zap, Flame, Shield, ArrowRight } from 'lucide-react';

export default function SuperbikeSection({ onOpenBooking }) {
  const [activeTier, setActiveTier] = useState('1000cc');

  const superbikeData = {
    '350cc': {
      label: '350CC – 500CC RANGE',
      title: 'TWIN & SINGLE CYLINDER PRECISION',
      bikes: 'Royal Enfield 650 Twins, KTM Duke 390, Aprilia RS457, Ninja 300/400',
      power: '44 to 48 HP',
      rpm: '9,500 RPM',
      techSpecs: ['High-flow air filter cleaning', 'ECU fault code diagnostics', 'Torque-wrench spec bolt check'],
    },
    '600cc': {
      label: '600CC – 900CC MIDDLEWEIGHTS',
      title: 'INLINE-4 & TRIPLE PERFORMANCE',
      bikes: 'Kawasaki Z900, ZX-6R, Triumph Street Triple RS, Ducati Monster, CBR650R',
      power: '95 to 125 HP',
      rpm: '12,000 RPM',
      techSpecs: ['Valve clearance inspection', 'Brembo brake pad & fluid flush', 'Slipper clutch friction audit'],
    },
    '1000cc': {
      label: '1000CC+ LITER SUPERBIKES',
      title: 'TRACK READY RACE HYPERBIKES',
      bikes: 'BMW S1000RR, Ducati Panigale V4, Kawasaki ZX-10R, Yamaha YZF-R1, Suzuki Hayabusa',
      power: '200+ HP',
      rpm: '14,500 RPM',
      techSpecs: ['Full telemetry diagnostic audit', 'Ohlins suspension rebound setup', 'Race spec synthetic oil flush'],
    },
  };

  const current = superbikeData[activeTier];

  return (
    <section className="py-24 bg-carbon-pattern relative border-b border-white/10 overflow-hidden">
      {/* Red Ambient Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3D00]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            SUPERBIKE DIVISION PUNE
          </div>
          <h2 className="font-display text-4xl sm:text-7xl font-black uppercase text-white tracking-tight">
            FROM DAILY COMMUTERS <br />
            <span className="text-[#FF3D00] neon-text-red">TO SUPERBIKES.</span>
          </h2>
          <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
            Specialized master mechanics, enclosed van transit, factory diagnostic tools, and race-spec care for high-displacement machines.
          </p>
        </div>

        {/* Displacement Selector Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['350cc', '600cc', '1000cc'].map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              className={`px-6 py-3 rounded-lg font-tech font-bold text-xs sm:text-sm uppercase tracking-widest transition-all ${activeTier === tier
                  ? 'bg-[#FF3D00] text-white shadow-lg shadow-[#FF3D00]/30 border border-[#FF3D00]'
                  : 'bg-[#111] text-[#8E9296] hover:text-white border border-white/10'
                }`}
              data-cursor="DISPLACEMENT"
            >
              {tier.toUpperCase()}+
            </button>
          ))}
        </div>

        {/* Superbike Visual & Telemetry Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brushed-metal p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          {/* Left Telemetry Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF3D00]/20 text-xs font-tech text-[#FF3D00] border border-[#FF3D00]">
              <Zap className="w-3.5 h-3.5" />
              {current.label}
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
              {current.title}
            </h3>

            <div className="space-y-3 font-mono text-xs text-[#8E9296] border-y border-white/10 py-4">
              <div className="flex justify-between">
                <span>COMPATIBLE MACHINES:</span>
                <span className="text-white font-bold">{current.bikes}</span>
              </div>
              <div className="flex justify-between">
                <span>ESTIMATED POWER OUTPUT:</span>
                <span className="text-[#FF3D00] font-bold">{current.power}</span>
              </div>
              <div className="flex justify-between">
                <span>MAX REV LIMIT:</span>
                <span className="text-white font-bold">{current.rpm}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-tech text-[#FF3D00] uppercase tracking-widest">
                [SPECIALIZED SERVICE PROTOCOLS]
              </span>
              {current.techSpecs.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-tech text-white">
                  <Shield className="w-3.5 h-3.5 text-[#FF3D00]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenBooking('₹1200 (600cc Superbikes)')}
              className="w-full py-4 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 transition-all shadow-xl"
              data-cursor="SUPERBIKE"
            >
              <span>BOOK SUPERBIKE CARE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Superbike Visual */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <img
              src="/assets/superbike_beast.png"
              alt="1000cc Superbike Garage Work in Pune"
              className="w-full max-w-[620px] object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(255,61,0,0.3)] transform hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
