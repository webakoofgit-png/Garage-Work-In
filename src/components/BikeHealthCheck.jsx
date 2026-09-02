import React, { useState } from 'react';
import { Activity, Gauge, ShieldCheck, AlertTriangle, CheckCircle, RefreshCw, ArrowRight } from 'lucide-react';

export default function BikeHealthCheck({ onOpenBooking }) {
  // State for health parameters (100 is healthy, lower is degraded)
  const [params, setParams] = useState({
    oil: 'good', // 'good' (95) | 'medium' (60) | 'bad' (30)
    brakes: 'medium', // 'good' (90) | 'medium' (50) | 'bad' (20)
    battery: 'good', // 'good' (95) | 'medium' (65) | 'bad' (40)
    tyres: 'good', // 'good' (90) | 'medium' (60) | 'bad' (30)
  });

  const getScore = () => {
    const scores = {
      oil: params.oil === 'good' ? 95 : params.oil === 'medium' ? 60 : 30,
      brakes: params.brakes === 'good' ? 90 : params.brakes === 'medium' ? 50 : 20,
      battery: params.battery === 'good' ? 95 : params.battery === 'medium' ? 65 : 40,
      tyres: params.tyres === 'good' ? 90 : params.tyres === 'medium' ? 60 : 30,
    };
    return Math.round((scores.oil + scores.brakes + scores.battery + scores.tyres) / 4);
  };

  const currentScore = getScore();

  const getStatusText = (score) => {
    if (score >= 85) return { label: 'OPTIMAL CONDITION', color: 'text-emerald-400', badge: 'bg-emerald-400/10 border-emerald-400' };
    if (score >= 65) return { label: 'GOOD TO RIDE (SERVICE DUE)', color: 'text-amber-400', badge: 'bg-amber-400/10 border-amber-400' };
    return { label: 'CRITICAL ATTENTION NEEDED', color: 'text-[#FF3D00]', badge: 'bg-[#FF3D00]/10 border-[#FF3D00]' };
  };

  const status = getStatusText(currentScore);

  return (
    <section id="health-check" className="py-24 bg-[#080808] relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          DIGITAL MOTORCYCLE DIAGNOSTICS
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          KNOW YOUR BIKE. <br />
          <span className="metallic-text">RIDE WITH CLARITY.</span>
        </h2>
        <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
          Simulate your motorcycle’s health condition below. Full Garage Work in inspection covers 25+ critical engineering checkpoints.
        </p>
      </div>

      {/* Dashboard Interface Stage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/15 bg-brushed-metal shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Gauges Selector */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-tech text-xs font-bold text-[#FF3D00] uppercase tracking-widest">
              [COMPONENT DIAGNOSTIC SIMULATOR]
            </h3>

            {/* Engine Oil Condition */}
            <div className="bg-[#0d0e10] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-tech text-sm font-bold text-white uppercase">ENGINE OIL & FLUIDS</div>
                <div className="text-[11px] text-[#8E9296]">Viscosity, sludge & level check</div>
              </div>
              <div className="flex gap-2">
                {['good', 'medium', 'bad'].map((state) => (
                  <button
                    key={state}
                    onClick={() => setParams({ ...params, oil: state })}
                    className={`px-3 py-1.5 rounded text-[10px] font-tech uppercase font-bold transition-all ${params.oil === state
                        ? state === 'good'
                          ? 'bg-emerald-500 text-white'
                          : state === 'medium'
                            ? 'bg-amber-500 text-black'
                            : 'bg-[#FF3D00] text-white'
                        : 'bg-[#1a1c1e] text-[#8E9296] hover:text-white'
                      }`}
                  >
                    {state === 'good' ? 'FRESH' : state === 'medium' ? 'DUE (3K KM)' : 'DEGRADED'}
                  </button>
                ))}
              </div>
            </div>

            {/* Brakes Condition */}
            <div className="bg-[#0d0e10] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-tech text-sm font-bold text-white uppercase">BRAKE PADS & FLUID</div>
                <div className="text-[11px] text-[#8E9296]">Pad thickness & lever bite response</div>
              </div>
              <div className="flex gap-2">
                {['good', 'medium', 'bad'].map((state) => (
                  <button
                    key={state}
                    onClick={() => setParams({ ...params, brakes: state })}
                    className={`px-3 py-1.5 rounded text-[10px] font-tech uppercase font-bold transition-all ${params.brakes === state
                        ? state === 'good'
                          ? 'bg-emerald-500 text-white'
                          : state === 'medium'
                            ? 'bg-amber-500 text-black'
                            : 'bg-[#FF3D00] text-white'
                        : 'bg-[#1a1c1e] text-[#8E9296] hover:text-white'
                      }`}
                  >
                    {state === 'good' ? '90% PAD' : state === 'medium' ? '50% WEAR' : 'REPLACE NOW'}
                  </button>
                ))}
              </div>
            </div>

            {/* Battery & Electrical */}
            <div className="bg-[#0d0e10] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-tech text-sm font-bold text-white uppercase">BATTERY & VOLTAGE</div>
                <div className="text-[11px] text-[#8E9296]">Self-start crank & terminal voltage</div>
              </div>
              <div className="flex gap-2">
                {['good', 'medium', 'bad'].map((state) => (
                  <button
                    key={state}
                    onClick={() => setParams({ ...params, battery: state })}
                    className={`px-3 py-1.5 rounded text-[10px] font-tech uppercase font-bold transition-all ${params.battery === state
                        ? state === 'good'
                          ? 'bg-emerald-500 text-white'
                          : state === 'medium'
                            ? 'bg-amber-500 text-black'
                            : 'bg-[#FF3D00] text-white'
                        : 'bg-[#1a1c1e] text-[#8E9296] hover:text-white'
                      }`}
                  >
                    {state === 'good' ? '12.8V STRONG' : state === 'medium' ? 'WEAK CRANK' : 'DEAD CELL'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tyres & Suspension */}
            <div className="bg-[#0d0e10] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-tech text-sm font-bold text-white uppercase">TYRES & TREAD DEPTH</div>
                <div className="text-[11px] text-[#8E9296]">Rubber grip, cracks & air pressure</div>
              </div>
              <div className="flex gap-2">
                {['good', 'medium', 'bad'].map((state) => (
                  <button
                    key={state}
                    onClick={() => setParams({ ...params, tyres: state })}
                    className={`px-3 py-1.5 rounded text-[10px] font-tech uppercase font-bold transition-all ${params.tyres === state
                        ? state === 'good'
                          ? 'bg-emerald-500 text-white'
                          : state === 'medium'
                            ? 'bg-amber-500 text-black'
                            : 'bg-[#FF3D00] text-white'
                        : 'bg-[#1a1c1e] text-[#8E9296] hover:text-white'
                      }`}
                  >
                    {state === 'good' ? 'DEEP GRIP' : state === 'medium' ? 'HALF LIFE' : 'BALD / CRACKED'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Circular Score Ring */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-[#080808] rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center mb-6">
              {/* Circular Gauge Ring */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  className="stroke-white/10 fill-none stroke-[8px]"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  className={`fill-none stroke-[10px] transition-all duration-700 ease-out ${currentScore >= 85
                      ? 'stroke-emerald-400'
                      : currentScore >= 65
                        ? 'stroke-amber-400'
                        : 'stroke-[#FF3D00]'
                    }`}
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * currentScore) / 100}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-6xl sm:text-7xl font-black text-white">
                  {currentScore}
                </span>
                <span className="text-[10px] font-tech text-[#8E9296] tracking-widest uppercase">
                  HEALTH SCORE / 100
                </span>
              </div>
            </div>

            <div
              className={`px-4 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-widest border mb-4 ${status.badge} ${status.color}`}
            >
              {status.label}
            </div>

            <p className="text-xs text-[#8E9296] font-sans mb-6">
              Full Garage Work in doorstep inspection covers 25+ vital component parameters with digital job card report.
            </p>

            <button
              onClick={() => onOpenBooking('₹499 Doorstep Bike Inspection')}
              className="w-full py-3.5 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
              data-cursor="CHECK"
            >
              <span>GET MY BIKE CHECKED (₹499)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
