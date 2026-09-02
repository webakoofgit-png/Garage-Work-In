import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';

export default function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState('Hinjewadi');

  const areas = [
    { name: 'Hinjewadi', hub: 'IT Tech Park Node 01', slots: '15 Mins Doorstep Pickup' },
    { name: 'Baner', hub: 'West Pune Hub', slots: 'Free Pickup Available' },
    { name: 'Wakad', hub: 'Highway Express Node', slots: 'Same-Day Return' },
    { name: 'Kothrud', hub: 'Central Pune Hub', slots: 'Daily Doorstep Slots' },
    { name: 'Viman Nagar', hub: 'East Pune Node 02', slots: 'Instant Booking' },
    { name: 'Kharadi', hub: 'EON IT Hub Node', slots: 'Office Pickup Available' },
    { name: 'Aundh', hub: 'West Hub Node 03', slots: 'Free Doorstep Service' },
    { name: 'PCMC (Chinchwad & Nigdi)', hub: 'Industrial Corridor', slots: 'Full PCMC Coverage' },
    { name: 'Pimple Saudagar', hub: 'PCMC Node 04', slots: 'Doorstep Pickup' },
    { name: 'Hadapsar & Magarpatta', hub: 'Cybercity Node', slots: 'Free Pickup & Drop' },
  ];

  return (
    <section className="py-24 bg-[#080808] relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
          <Navigation className="w-3.5 h-3.5" />
          PUNE & PCMC COVERAGE RADAR
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          PUNE. WE'VE GOT <br />
          <span className="metallic-text">YOU COVERED.</span>
        </h2>
        <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
          Free doorstep pickup and return delivery available across all major residential, IT park, and commercial sectors of Pune & PCMC.
        </p>
      </div>

      {/* Interactive Radar Grid Stage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Radar Vector Display (Detail Card - Screenshot 1) - TOP on mobile, RIGHT on lg */}
        <div className="order-1 lg:order-2 lg:col-span-5 glass-card p-8 rounded-2xl border border-white/15 relative overflow-hidden flex flex-col justify-between min-h-[320px] bg-brushed-metal">
          {/* Radar Sweep Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#ff3d00_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <span className="text-[10px] font-tech text-[#FF3D00] uppercase tracking-widest">
                [RADAR NODE: {selectedArea.toUpperCase()}]
              </span>
              <span className="px-2.5 py-1 bg-emerald-400/10 border border-emerald-400/30 rounded text-[10px] font-tech text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE PICKUP ZONE
              </span>
            </div>

            <h3 className="font-display text-3xl font-bold uppercase text-white mb-2">
              {selectedArea}
            </h3>
            <p className="text-xs text-[#8E9296] font-mono mb-6">
              Assigned Hub: {areas.find((a) => a.name === selectedArea)?.hub || 'Pune Central'}
            </p>

            <div className="space-y-2 text-xs font-tech text-[#F4F2ED] bg-[#080808] p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF3D00]" />
                <span>Zero Pickup & Drop Delivery Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF3D00]" />
                <span>Uniformed Garage Work in Transport Rider</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF3D00]" />
                <span>Same-Day Return (4-8 Hours Turnaround)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Locality Grid (Buttons Grid - Screenshot 2) - BELOW on mobile, LEFT on lg */}
        <div className="order-2 lg:order-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {areas.map((area) => {
            const isSelected = selectedArea === area.name;
            return (
              <button
                key={area.name}
                onClick={() => setSelectedArea(area.name)}
                className={`p-4 rounded-xl text-left border transition-all ${isSelected
                    ? 'bg-[#16171a] border-[#FF3D00] text-white shadow-lg shadow-[#FF3D00]/20 scale-105'
                    : 'bg-[#0d0e10] border-white/10 text-[#8E9296] hover:border-white/20 hover:text-white'
                  }`}
                data-cursor="MAP"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#FF3D00]' : 'text-[#8E9296]'}`} />
                  <span className="font-tech text-xs font-bold uppercase">{area.name}</span>
                </div>
                <div className="text-[10px] text-[#8E9296] font-mono">{area.slots}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
