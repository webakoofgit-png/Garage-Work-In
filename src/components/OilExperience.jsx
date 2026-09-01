import React, { useState } from 'react';
import { Droplet, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OilExperience({ onOpenBooking }) {
  const [selectedOil, setSelectedOil] = useState(0);

  const oils = [
    {
      brand: 'MOTUL',
      name: '300V / 7100 100% SYNTHETIC',
      tagline: 'ESTER Core® Technology for Max Horsepower',
      badge: '100% SYNTHETIC',
      viscosity: '10W40 / 15W50',
      idealFor: 'Superbikes, KTM, Royal Enfield & High RPM Riding',
      mrpPromise: 'Unsealed in front of customer / MRP Billed',
      color: '#FF3D00',
    },
    {
      brand: 'CASTROL',
      name: 'POWER1 ULTIMATE 4T',
      tagline: '3-in-1 Formula for Ultimate Acceleration & Smooth Shift',
      badge: 'ACTIVE PROTECTION',
      viscosity: '10W40 / 20W50',
      idealFor: 'Pulsar, Apache, FZ, MT-15 & Daily Commute',
      mrpPromise: 'Original Sealed Container Guarantee',
      color: '#00E676',
    },
    {
      brand: 'SHELL',
      name: 'ADVANCE ULTRA 4T',
      tagline: 'PurePlus Technology Made from Natural Gas',
      badge: 'ACTIVE CLEANSING',
      viscosity: '10W40 Fully Synthetic',
      idealFor: 'Honda CB350, Unicorn, Activa & Tourers',
      mrpPromise: 'Strictly Billed at Printed MRP',
      color: '#FFD600',
    },
    {
      brand: 'YAMALUBE',
      name: '4T HIGH PERFORMANCE',
      tagline: 'Yamaha Factory Spec Formula for R15 & FZ Engine Health',
      badge: 'FACTORY APPROVED',
      viscosity: '10W40 Semi-Synthetic',
      idealFor: 'Yamaha R15, FZ, Aerox 155 & RayZR',
      mrpPromise: 'Direct Factory Authorized Batch',
      color: '#29B6F6',
    },
    {
      brand: 'GULF',
      name: 'PRIDE 4T SYNTHETIC',
      tagline: 'Faster Pick-up and Enhanced Thermal Protection',
      badge: 'FASTER PICK-UP',
      viscosity: '10W30 / 20W40',
      idealFor: 'Splendor, HF Deluxe, Passion & Scooters',
      mrpPromise: '100% Genuine Sealed Bottle',
      color: '#FF9100',
    },
    {
      brand: 'SERVO',
      name: 'SUPER 4T GENUINE',
      tagline: 'Proven Engine Protection and Long Drain Oil Life',
      badge: 'GENUINE PROTECTION',
      viscosity: '20W40 Mineral',
      idealFor: 'Economy Commuters & Classic Motorcycles',
      mrpPromise: 'Strict MRP Invoice Provided',
      color: '#E0E0E0',
    },
  ];

  const active = oils[selectedOil];

  return (
    <section id="engine-oils" className="py-24 bg-[#080808] relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
          <Droplet className="w-3.5 h-3.5 fill-[#FF3D00]" />
          LUBRICATION ENGINE CARE
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          THE RIGHT OIL. <br />
          <span className="metallic-text">THE RIGHT PERFORMANCE.</span>
        </h2>
        <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
          We never use loose or duplicate oil. Choose your preferred brand — opened fresh at your doorstep and billed strictly at printed MRP.
        </p>

        {/* MRP Guarantee Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="glass-panel px-4 py-2 rounded-full text-xs font-tech text-white border border-white/10 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% Genuine Sealed Containers
          </div>
          <div className="glass-panel px-4 py-2 rounded-full text-xs font-tech text-white border border-white/10 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF3D00]" />
            Billed Strictly at Printed MRP
          </div>
        </div>
      </div>

      {/* Interactive Oil Grid Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Brand Selection Cards */}
        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {oils.map((item, idx) => {
            const isSelected = selectedOil === idx;
            return (
              <button
                key={item.brand}
                onClick={() => setSelectedOil(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between min-h-[120px] ${
                  isSelected
                    ? 'bg-[#16171a] border-[#FF3D00] shadow-lg shadow-[#FF3D00]/20 scale-105'
                    : 'bg-[#0d0e10] border-white/10 hover:border-white/20'
                }`}
                data-cursor="OIL"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-black text-white">{item.brand}</span>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <div>
                  <span className="text-[9px] font-tech text-[#8E9296] uppercase tracking-widest block">
                    {item.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Oil Detailed Showcase */}
        <div className="lg:col-span-6 glass-card p-8 rounded-2xl border border-white/15 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-30"
            style={{ backgroundColor: active.color }}
          />

          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <span className="font-display text-4xl font-black text-white">{active.brand}</span>
              <span className="px-3 py-1 bg-[#111] border border-white/10 rounded text-xs font-tech font-bold text-white">
                {active.badge}
              </span>
            </div>

            <h3 className="font-tech text-lg font-bold text-[#FF3D00] uppercase mb-2">
              {active.name}
            </h3>
            <p className="text-sm text-[#8E9296] font-sans mb-6">{active.tagline}</p>

            <div className="space-y-3 font-mono text-xs text-[#F4F2ED] bg-[#0d0e10] p-4 rounded-xl border border-white/5 mb-6">
              <div className="flex justify-between">
                <span className="text-[#8E9296]">VISCOSITY GRADES:</span>
                <span className="font-bold text-white">{active.viscosity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9296]">RECOMMENDED FOR:</span>
                <span className="font-bold text-white">{active.idealFor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9296]">BILLING PROMISE:</span>
                <span className="font-bold text-emerald-400">{active.mrpPromise}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="w-full py-3.5 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
            data-cursor="BOOK"
          >
            <span>CHOOSE {active.brand} FOR SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
