import React, { useEffect, useState, useRef } from 'react';
import { Award, Bike, Clock, Headphones, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TrustStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Award,
      value: '4.8 / 5',
      label: 'RIDER RATING',
      sublabel: 'Based on 2,500+ Google Reviews in Pune',
    },
    {
      icon: Bike,
      value: '2,500+',
      label: 'BIKES CARED FOR',
      sublabel: 'Commuters, Cruisers & Superbikes',
    },
    {
      icon: Clock,
      value: 'SAME DAY',
      label: 'PICKUP & DROP',
      sublabel: '4 to 8 Hour Turnaround Time',
    },
    {
      icon: Headphones,
      value: 'ZERO CHASE',
      label: 'HUMAN SUPPORT',
      sublabel: 'Live WhatsApp Video & Invoice Updates',
    },
    {
      icon: ShieldCheck,
      value: '24 / 7',
      label: 'SERVICE AVAILABLE',
      sublabel: 'Round-the-Clock Doorstep Assistance & Pickup',
    },
    {
      icon: CheckCircle2,
      value: 'ZERO',
      label: 'HIDDEN CHARGES',
      sublabel: 'Strict Printed MRP & Pre-Approved Parts Billed',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#0d0e0f] via-[#16171a] to-[#0d0e0f] py-12 border-y border-white/10 overflow-hidden"
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-2 divide-y md:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#FF3D00]/40 flex items-center justify-center mb-3 shadow-lg group">
                  <Icon className="w-6 h-6 text-[#FF3D00] group-hover:scale-110 transition-transform" />
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-white tracking-wider metallic-text">
                  {item.value}
                </div>
                <div className="font-tech text-xs font-bold text-[#FF3D00] uppercase tracking-widest mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#8E9296] mt-0.5 max-w-[170px]">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
