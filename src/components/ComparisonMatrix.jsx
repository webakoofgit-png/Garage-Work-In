import React from 'react';
import { Truck, ClipboardCheck, ShieldCheck, Tag, Droplet, Video, Wrench, Clock, Check, X, Sparkles } from 'lucide-react';

export default function ComparisonMatrix({ onOpenBooking }) {
  const comparisonData = [
    {
      feature: 'CONVENIENCE',
      icon: Truck,
      localShop: 'Need to Visit & Wait',
      localStatus: 'bad',
      authorized: 'Need to Drop & Leave',
      authorizedStatus: 'bad',
      gwi: 'Free Doorstep Pickup & Drop',
      gwiStatus: 'good',
    },
    {
      feature: 'INSPECTION & DIAGNOSTICS',
      icon: ClipboardCheck,
      localShop: 'Not Guaranteed',
      localStatus: 'bad',
      authorized: 'Basic Checklist',
      authorizedStatus: 'neutral',
      gwi: '25+ Point Digital Report',
      gwiStatus: 'good',
    },
    {
      feature: 'PRICING TRANSPARENCY',
      icon: Tag,
      localShop: 'Arbitrary / Price Changes',
      localStatus: 'bad',
      authorized: 'Expensive + Hidden Charges',
      authorizedStatus: 'bad',
      gwi: 'Fixed Labor + Printed MRP Billed',
      gwiStatus: 'good',
    },
    {
      feature: 'ENGINE OILS & PARTS',
      icon: Droplet,
      localShop: 'Unverified / Loose Oil Risk',
      localStatus: 'bad',
      authorized: 'Standard OEM Barrel',
      authorizedStatus: 'neutral',
      gwi: '100% Genuine Sealed Cans (MRP)',
      gwiStatus: 'good',
    },
    {
      feature: 'LIVE WORK VISIBILITY',
      icon: Video,
      localShop: 'Zero Visibility',
      localStatus: 'bad',
      authorized: 'Only Final Bill Paper',
      authorizedStatus: 'bad',
      gwi: 'Live WhatsApp Video & Photo Proof',
      gwiStatus: 'good',
    },
    {
      feature: 'TECHNICIAN EXPERTISE',
      icon: Wrench,
      localShop: 'Unverified Mechanics',
      localStatus: 'bad',
      authorized: 'Brand Specific Only',
      authorizedStatus: 'neutral',
      gwi: 'Master Superbike Specialists',
      gwiStatus: 'good',
    },
    {
      feature: 'SERVICE WARRANTY',
      icon: ShieldCheck,
      localShop: 'No Warranty',
      localStatus: 'bad',
      authorized: 'Limited Conditions',
      authorizedStatus: 'neutral',
      gwi: '10-Day Full Service Guarantee',
      gwiStatus: 'good',
    },
    {
      feature: 'TURNAROUND TIME',
      icon: Clock,
      localShop: '2 to 4 Days',
      localStatus: 'bad',
      authorized: '3 to 7 Days Delay',
      authorizedStatus: 'bad',
      gwi: 'Same-Day Return (4 - 8 Hours)',
      gwiStatus: 'good',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#080808] relative border-b border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF3D00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            THE GARAGE WORK IN ADVANTAGE
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            WHY PUNE RIDERS CHOOSE <br />
            <span className="text-[#FF3D00] neon-text-red">GARAGE WORK IN.</span>
          </h2>
          <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
            Compare our doorstep engineering care with traditional local workshops and expensive authorized centers.
          </p>
        </div>

        {/* Comparison Matrix Table Card */}
        <div className="glass-card rounded-3xl border border-white/15 bg-[#0d0e10] shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/10 bg-[#121316]">
                  <th className="p-5 sm:p-6 font-tech text-xs font-bold text-[#8E9296] uppercase tracking-widest w-1/4">
                    CORE FEATURE
                  </th>
                  <th className="p-5 sm:p-6 font-tech text-xs font-bold text-[#8E9296] uppercase tracking-widest w-1/4 text-center">
                    LOCAL SHOP
                  </th>
                  <th className="p-5 sm:p-6 font-tech text-xs font-bold text-[#8E9296] uppercase tracking-widest w-1/4 text-center">
                    AUTHORIZED CENTER
                  </th>
                  {/* Highlighted GWI Header Column */}
                  <th className="p-5 sm:p-6 font-tech text-sm font-black text-white uppercase tracking-widest w-1/4 text-center bg-gradient-to-b from-[#FF3D00] to-[#b32b00] shadow-lg relative">
                    <div className="flex items-center justify-center gap-1.5">
                      <span>GARAGE WORK IN</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, idx) => {
                  const FeatureIcon = row.icon;
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Feature Name */}
                      <td className="p-5 sm:p-6 font-tech text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#16181c] border border-white/10 flex items-center justify-center text-[#FF3D00] shrink-0">
                          <FeatureIcon className="w-4 h-4" />
                        </div>
                        <span>{row.feature}</span>
                      </td>

                      {/* Local Shop */}
                      <td className="p-5 sm:p-6 text-center text-xs font-tech text-[#8E9296]">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          <X className="w-4 h-4 text-red-500/80 shrink-0" />
                          <span className="uppercase">{row.localShop}</span>
                        </div>
                      </td>

                      {/* Authorized Center */}
                      <td className="p-5 sm:p-6 text-center text-xs font-tech text-[#8E9296]">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          {row.authorizedStatus === 'good' ? (
                            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : row.authorizedStatus === 'neutral' ? (
                            <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-red-500/80 shrink-0" />
                          )}
                          <span className="uppercase">{row.authorized}</span>
                        </div>
                      </td>

                      {/* Highlighted GWI Column */}
                      <td className="p-5 sm:p-6 text-center text-xs sm:text-sm font-tech font-bold text-emerald-400 bg-[#FF3D00]/[0.06] border-l border-r border-[#FF3D00]/20">
                        <div className="inline-flex items-center justify-center gap-2 text-emerald-400 drop-shadow-md">
                          <Check className="w-4 h-4 text-emerald-400 stroke-[3] shrink-0" />
                          <span className="uppercase tracking-wider">{row.gwi}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-4 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#FF3D00]/30 hover:scale-105 active:scale-95"
            data-cursor="BOOK"
          >
            EXPERIENCE GARAGE WORK IN — BOOK NOW (10% OFF)
          </button>
        </div>
      </div>
    </section>
  );
}
