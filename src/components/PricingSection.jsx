import React from 'react';
import { ShieldCheck, Check, Sparkles, ArrowRight, Zap } from 'lucide-react';

export default function PricingSection({ onOpenBooking }) {
  const plans = [
    {
      code: 'VJ / 01',
      price: '₹499',
      category: '0 – 125 CC COMMUTERS',
      popular: false,
      models: 'Splendor, Shine, Passion, Platina, HF Deluxe, Discover, Activa, Jupiter & similar',
      features: [
        'Complete General Servicing',
        'Free Doorstep Pickup & Drop',
        'Foam Washing & High-Gloss Polish',
        '22-Point Safety Inspection Audit',
        'Detailed Digital Work Report on WhatsApp',
        'Guaranteed Mechanical Workmanship',
        'Engine Oil of Choice — billed strictly at MRP',
      ],
    },
    {
      code: 'VJ / 02',
      price: '₹699',
      category: '125 – 220 CC PERFORMANCE',
      popular: true,
      models: 'Pulsar, Apache, FZ, Unicorn, Hornet, MT-15, R15, Aerox & similar',
      features: [
        'Complete Performance Servicing',
        'Free Doorstep Pickup & Drop',
        'Pressure Foam Wash & Body Wax',
        '22-Point Safety & Throttle Inspection',
        'Digital WhatsApp Photo/Video Updates',
        'Guaranteed Workmanship Guarantee',
        'Engine Oil of Choice — billed strictly at MRP',
      ],
    },
    {
      code: 'VJ / 03',
      price: '₹799',
      category: '220 – 350 CC CRUISERS & ADV',
      popular: false,
      models: 'Royal Enfield Classic/Bullet/Himalayan, KTM Duke 250/390, Dominar 400, CB350',
      features: [
        'Heavy Machine General Servicing',
        'Free Doorstep Pickup & Drop',
        'Heavy Dirt Foam Cleaning & Polish',
        '22-Point High Torque Safety Inspection',
        'Full Diagnostics & WhatsApp Live Report',
        'Master Mechanic Assigned',
        'Synthetic Engine Oil — billed strictly at MRP',
      ],
    },
    {
      code: 'VJ / 04',
      price: 'CUSTOM',
      category: '350 CC+ SUPERBIKES',
      popular: false,
      models: 'Kawasaki Ninja, Hayabusa, ZX-10R, Z900, BMW Motorrad, Ducati, Triumph, Benelli, Aprilia',
      features: [
        'Superbike Master Mechanic Service',
        'Dedicated Enclosed Pickup Van Available',
        'Premium Detail Foam & Ceramic Sealant',
        '30-Point High Performance Telemetry Audit',
        'Live Video Call Work Approval',
        '100% Genuine Imported Spare Parts at MRP',
        'Track & Street Setup Tuning',
      ],
    },
    {
      code: 'VJ / 05',
      price: '₹499',
      category: 'DOORSTEP BIKE INSPECTION',
      popular: false,
      models: 'All Two-Wheelers — Used Bike Buyers & Diagnostic Checkups',
      features: [
        '25-Point Comprehensive Health Audit',
        'Doorstep Diagnostic Technician Visit',
        'Engine Compression & Noise Check',
        'Chassis, Brakes & Battery Health Test',
        'Full Digital Condition Scorecard',
        'Repair Cost Estimation Report',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#080808] relative border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#FF3D00]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          100% TRANSPARENT GUARANTEE
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          TRANSPARENT SERVICE. <br />
          <span className="metallic-text">NO HIDDEN COST.</span>
        </h2>
        <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
          Labor charges are fixed by engine displacement. Spare parts & oil billed strictly at printed MRP. No replacements without your approval.
        </p>
      </div>

      {/* Horizontal Scroll Deck */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto pb-10 pt-4 snap-x snap-mandatory scrollbar-thin">
          {plans.map((plan, idx) => (
            <div
              key={plan.code}
              className={`flex-none w-[320px] sm:w-[360px] snap-center glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-[#FF3D00] shadow-2xl shadow-[#FF3D00]/20 bg-[#16171a]' : ''
              }`}
              data-cursor="PLAN"
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF3D00] text-white px-4 py-1 rounded-full text-[10px] font-tech font-bold uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  MOST CHOSEN IN PUNE
                </div>
              )}

              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <span className="font-tech text-xs font-bold text-[#FF3D00] uppercase tracking-widest">
                    {plan.code}
                  </span>
                  <div className="text-right">
                    <div className="font-display text-4xl font-black text-white">{plan.price}</div>
                    <div className="text-[10px] font-tech text-[#8E9296]">LABOR CHARGE</div>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                  {plan.category}
                </h3>
                <p className="text-[11px] text-[#8E9296] font-mono mt-1 mb-6 line-clamp-2">
                  Fits: {plan.models}
                </p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#F4F2ED]">
                      <Check className="w-4 h-4 text-[#FF3D00] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(plan.code)}
                className={`w-full py-3.5 rounded-lg font-tech font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-[#FF3D00] hover:bg-[#ff551c] text-white shadow-lg'
                    : 'bg-[#111] hover:bg-white/10 text-white border border-white/15'
                }`}
                data-cursor="BOOK"
              >
                <span>BOOK THIS TIER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
