import React from 'react';
import PricingSection from '../components/PricingSection';
import FinalCta from '../components/FinalCta';
import { ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';

export default function PricingPage({ onOpenBooking }) {
  return (
    <div className="pt-24 min-h-screen bg-[#080808]">
      {/* Header Banner */}
      <div className="bg-workshop-mesh py-20 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech tracking-widest uppercase text-[#FF3D00] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            FIXED LABOR RATES & MRP TRANSPARENCY
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            TRANSPARENT SERVICE PRICING. <br />
            <span className="metallic-text">ZERO HIDDEN FEES.</span>
          </h1>
          <p className="text-[#8E9296] text-base sm:text-lg max-w-2xl mx-auto mt-4 font-sans">
            Choose your engine displacement tier. Labor charges are fixed, spare parts & oils are billed strictly at printed MRP. Pay only after delivery.
          </p>
        </div>
      </div>

      {/* Pricing Cards Deck */}
      <PricingSection onOpenBooking={onOpenBooking} />

      {/* Comparison Matrix Table */}
      <div className="py-20 bg-carbon-pattern border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white text-center mb-12">
            PACKAGE COMPARISON <span className="text-[#FF3D00]">MATRIX</span>
          </h2>

          <div className="overflow-x-auto glass-card rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs font-tech">
              <thead>
                <tr className="border-b border-white/10 bg-[#111] text-white">
                  <th className="p-4 uppercase">Inclusions</th>
                  <th className="p-4 text-[#FF3D00]">0–125cc (₹399)</th>
                  <th className="p-4 text-[#FF3D00]">125–220cc (₹499)</th>
                  <th className="p-4 text-[#FF3D00]">220–400cc (₹599)</th>
                  <th className="p-4 text-[#FF3D00]">600cc+ (₹1200)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#8E9296]">
                <tr>
                  <td className="p-4 font-bold text-white">Engine Displacement</td>
                  <td className="p-4">0 – 125 CC</td>
                  <td className="p-4">125 – 220 CC</td>
                  <td className="p-4">220 – 400 CC</td>
                  <td className="p-4">600 CC+ Superbikes</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Free Doorstep Pickup & Drop</td>
                  <td className="p-4 text-emerald-400">✔ Included</td>
                  <td className="p-4 text-emerald-400">✔ Included</td>
                  <td className="p-4 text-emerald-400">✔ Included</td>
                  <td className="p-4 text-emerald-400">✔ Enclosed Van</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Washing & Polish</td>
                  <td className="p-4">Foam Wash</td>
                  <td className="p-4">Pressure Foam + Wax</td>
                  <td className="p-4">Heavy Foam + Gloss</td>
                  <td className="p-4">Detailing & Ceramic</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Safety Checkpoints Audit</td>
                  <td className="p-4">22 Points</td>
                  <td className="p-4">22 Points</td>
                  <td className="p-4">22 Points</td>
                  <td className="p-4">30 Telemetry Points</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">WhatsApp Live Inspection Video</td>
                  <td className="p-4 text-emerald-400">✔ Included</td>
                  <td className="p-4 text-emerald-400">✔ Included</td>
                  <td className="p-4 text-emerald-400">✔ Included</td>
                  <td className="p-4 text-emerald-400">✔ Live Video Call</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Spare Parts & Oil Billing</td>
                  <td className="p-4">Strictly at MRP</td>
                  <td className="p-4">Strictly at MRP</td>
                  <td className="p-4">Strictly at MRP</td>
                  <td className="p-4">Strictly at MRP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
}
