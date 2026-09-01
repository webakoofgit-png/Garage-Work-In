import React, { useState } from 'react';
import { Wrench, Gauge, Cpu, Sparkles, ShieldAlert, Disc, ArrowRight, Check } from 'lucide-react';

export default function ExplodedServices({ onOpenBooking }) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'general',
      title: 'General Servicing',
      component: 'Engine Oil & Filter Subsystem',
      icon: Wrench,
      highlightArea: 'Center Engine & Oil Bay',
      coords: { top: '55%', left: '48%' },
      specs: ['Oil Flush & Synthetic Replacement', 'Air & Fuel Filter Cleaning', '22-Point Safety Inspection', 'Chain Lube & Tensioning'],
      desc: 'Complete routine maintenance for smooth throttle response, high fuel efficiency, and quiet engine operation.',
      priceTag: 'From ₹499',
    },
    {
      id: 'major',
      title: 'Major Service & Repair',
      component: 'Clutch & Chain Sprocket System',
      icon: Gauge,
      highlightArea: 'Transmission & Drive Line',
      coords: { top: '65%', left: '35%' },
      specs: ['Clutch Plate & Friction Discs', 'Heavy Duty Chain Sprocket Kit', 'Carburetor / Injector Tuning', 'Suspension Bush Replacement'],
      desc: 'Comprehensive rebuild for high mileage motorcycles experiencing power loss, slipping clutch, or hard gear shifts.',
      priceTag: 'Custom Quote / Free Estimate',
    },
    {
      id: 'engine',
      title: 'Engine Repair & Tuning',
      component: 'Cylinder Head & Piston Assembly',
      icon: Cpu,
      highlightArea: 'Top Engine Cylinder Block',
      coords: { top: '45%', left: '50%' },
      specs: ['Engine Rebuild & Valve Grinding', 'Piston & Ring Replacement', 'Abnormal Noise Diagnosis', 'ECU Mapping & Performance Tuning'],
      desc: 'Precision mechanical diagnostics and precision rebuild by senior superbike & commuter engine specialists.',
      priceTag: 'Expert Diagnostic Guarantee',
    },
    {
      id: 'paint',
      title: 'Denting & Painting',
      component: 'Body Tank & Fairing Polish',
      icon: Sparkles,
      highlightArea: 'Fuel Tank & Body Panels',
      coords: { top: '38%', left: '42%' },
      specs: ['Fuel Tank Dent Removal', 'High-Temp Oven Spray Paint', '3-Step Ceramic Paint Protection', 'Anti-Scratch Clear Coat'],
      desc: 'Restore showroom shine and eliminate scratch marks, rust spots, and accidental dent damage.',
      priceTag: 'Showroom Finish Guarantee',
    },
    {
      id: 'accessories',
      title: 'Accessories Fitting',
      component: 'Crash Guards & Electrical Aux',
      icon: Disc,
      highlightArea: 'Front Chassis & Handlebars',
      coords: { top: '30%', left: '28%' },
      specs: ['Heavy Crash Guard & Frame Sliders', 'LED Fog Lights & Harness', 'Touring Visors & Seats', 'Mobile Mount & USB Chargers'],
      desc: 'Professional wire-harness fitting and accessory mounting without voiding bike electrical warranty.',
      priceTag: 'Precision Fitment',
    },
    {
      id: 'breakdown',
      title: 'Breakdown & Inspection',
      component: 'Battery & Doorstep Inspection',
      icon: ShieldAlert,
      highlightArea: 'Electrical Battery Box',
      coords: { top: '50%', left: '58%' },
      specs: ['Starting Problem Diagnosis', 'Doorstep Battery Jumpstart', 'Puncture Repair & Towing Assist', 'Wiring Harness Short Audit'],
      desc: 'Rapid doorstep diagnostic assistance across Pune & PCMC when your motorcycle won’t start.',
      priceTag: 'Doorstep Tech Assist',
    },
  ];

  const current = services[activeService];

  return (
    <section id="services" className="py-24 bg-[#080808] relative border-b border-white/10 overflow-hidden">
      {/* Background Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
          <Wrench className="w-3.5 h-3.5" />
          MECHANICAL PRECISION
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          ALL TWO-WHEELER SERVICES. <br />
          <span className="metallic-text">ONE DESTINATION.</span>
        </h2>
        <p className="text-[#8E9296] text-sm sm:text-base max-w-2xl mx-auto mt-4 font-sans">
          Click any component node or service tab to inspect our specialized repair & maintenance modules.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Interactive Service Selector Tabs (Second on Mobile, Left on Desktop) */}
        <div className="w-full lg:col-span-5 space-y-3">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeService === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                  isSelected
                    ? 'bg-[#16171a] border-[#FF3D00] shadow-lg shadow-[#FF3D00]/15'
                    : 'bg-[#0f1012] border-white/5 hover:border-white/20 hover:bg-[#121316]'
                }`}
                data-cursor="SELECT"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#FF3D00] text-white' : 'bg-[#1a1c1e] text-[#8E9296]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`font-tech text-sm font-bold uppercase ${isSelected ? 'text-white' : 'text-[#8E9296]'}`}>
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#8E9296] font-mono">{item.component}</div>
                  </div>
                </div>
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? 'bg-[#FF3D00] scale-125 animate-ping' : 'bg-white/10'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Interactive 3D Exploded Component Viewer (First on Mobile, Right on Desktop) */}
        <div className="w-full lg:col-span-7 relative bg-brushed-metal rounded-2xl p-6 sm:p-8 border border-white/10 min-h-[480px] flex flex-col justify-between overflow-hidden shadow-2xl">
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          {/* Top Component HUD Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
            <div>
              <span className="text-[10px] font-tech text-[#FF3D00] uppercase tracking-widest">
                [SYSTEM NODE: 0{activeService + 1}]
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-0.5">
                {current.title}
              </h3>
            </div>
            <div className="px-3 py-1 bg-[#FF3D00]/20 border border-[#FF3D00] rounded text-xs font-tech font-bold text-[#FF3D00]">
              {current.priceTag}
            </div>
          </div>

          {/* Middle Motorcycle Schematic with Pulsing Hotspots */}
          <div className="relative my-8 flex items-center justify-center min-h-[220px]">
            <img
              src="/assets/hero_motorcycle.png"
              alt="Exploded Machine Servicing"
              className="w-full max-w-[480px] opacity-75 grayscale hover:grayscale-0 transition-all duration-500 object-contain"
            />

            {/* Dynamic Target Marker for Active Service */}
            <div
              className="absolute z-20 transition-all duration-500 flex items-center gap-2"
              style={{ top: current.coords.top, left: current.coords.left }}
            >
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-[#FF3D00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF3D00]"></span>
              </div>
              <div className="glass-panel px-2.5 py-1 rounded text-[10px] font-tech text-white border border-[#FF3D00] whitespace-nowrap">
                {current.highlightArea}
              </div>
            </div>
          </div>

          {/* Specs Checklist & Booking CTA */}
          <div className="space-y-4 relative z-10 pt-4 border-t border-white/10">
            <p className="text-xs sm:text-sm text-[#8E9296] leading-relaxed">{current.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {current.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-tech text-[#F4F2ED]">
                  <Check className="w-3.5 h-3.5 text-[#FF3D00] flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all shadow-lg"
                data-cursor="BOOK"
              >
                <span>BOOK THIS SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
