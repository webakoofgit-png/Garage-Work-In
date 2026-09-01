import React from 'react';
import { PhoneCall, Truck, ShieldCheck, CreditCard, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  const steps = [
    {
      step: '01',
      title: 'TELL US ABOUT YOUR RIDE',
      desc: 'Book via WhatsApp or online slot picker. Select your motorcycle model, preferred pickup slot, and Pune/PCMC location.',
      icon: PhoneCall,
      detail: 'Instant WhatsApp Booking Confirmation',
    },
    {
      step: '02',
      title: 'WE PICK IT UP FREE',
      desc: 'Our uniformed pickup rider arrives at your doorstep, conducts an initial digital job-card, and safely transports your motorcycle.',
      icon: Truck,
      detail: 'Zero Pickup Charges across Pune & PCMC',
    },
    {
      step: '03',
      title: 'KNOW BEFORE WE GO',
      desc: 'Receive a transparent 22-point inspection video on WhatsApp. Estimate approved first — no parts replaced without explicit permission.',
      icon: ShieldCheck,
      detail: 'Live Photo & Video Approval',
    },
    {
      step: '04',
      title: 'PAY AFTER DELIVERY',
      desc: 'We deliver your freshly serviced motorcycle back to your doorstep. Take a test ride, inspect the workmanship, and pay via UPI or Cash.',
      icon: CreditCard,
      detail: 'Pay Only When Completely Satisfied',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-workshop-mesh relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
          <Clock className="w-3.5 h-3.5" />
          4 TO 8 HOUR TURNAROUND
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          THE VJ WAY. <br />
          <span className="metallic-text">DOORSTEP CARE REDEFINED.</span>
        </h2>
        <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
          No waiting in garage queues or calling mechanic shops. We manage pickup, transparent servicing, and doorstep return delivery across Pune.
        </p>
      </div>

      {/* Vertical Animated Roadmap Journey */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Central Connecting Road Line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF3D00] via-[#FF3D00]/50 to-white/20 -translate-x-1/2 pointer-events-none hidden sm:block" />

        <div className="space-y-12 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.step}
                className={`flex flex-col sm:flex-row items-center gap-8 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div className="w-full sm:w-1/2 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#FF3D00] transition-all">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <span className="font-display text-3xl font-black text-[#FF3D00]">
                      STEP {item.step}
                    </span>
                    <span className="text-[10px] font-tech text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/30">
                      {item.detail}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E9296] font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Central Step Icon Circle Node */}
                <div className="w-14 h-14 rounded-full bg-[#111] border-2 border-[#FF3D00] flex items-center justify-center shadow-xl shadow-[#FF3D00]/30 z-10 flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#FF3D00]" />
                </div>

                {/* Empty Spacer Column for Desktop Grid Symmetry */}
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-16 text-center glass-panel p-8 rounded-2xl border border-white/10 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-tech text-[#8E9296] uppercase mb-2">
            <MapPin className="w-4 h-4 text-[#FF3D00]" />
            SAME-DAY PICKUP ACROSS PUNE & PCMC
          </div>
          <p className="text-sm text-white font-medium mb-6">
            Routine services typically completed within 4 to 8 hours from pickup.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg inline-flex items-center gap-2"
            data-cursor="BOOK"
          >
            <span>SCHEDULE YOUR PICKUP NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
