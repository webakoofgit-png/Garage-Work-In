import React from 'react';

export default function CinematicTicker() {
  return (
    <section className="relative h-[60vh] sm:h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center border-b border-white/10">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity scale-105 hover:scale-110 transition-transform duration-1000">
        <img
          src="/assets/superbike_beast.png"
          alt="Cinematic Superbike Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
      </div>

      {/* Oversized Moving Marquee Banner */}
      <div className="relative z-10 w-full overflow-hidden whitespace-nowrap py-10 pointer-events-none select-none">
        <div className="inline-flex animate-[marquee_25s_linear_infinite] gap-12 items-center">
          <span className="font-display text-7xl sm:text-9xl font-black text-transparent stroke-text text-white/90 tracking-tighter uppercase">
            BUILT FOR THE RIDE AHEAD •
          </span>
          <span className="font-display text-7xl sm:text-9xl font-black text-[#FF3D00] tracking-tighter uppercase">
            Garage Work in PUNE •
          </span>
          <span className="font-display text-7xl sm:text-9xl font-black text-transparent stroke-text text-white/90 tracking-tighter uppercase">
            BUILT FOR THE RIDE AHEAD •
          </span>
          <span className="font-display text-7xl sm:text-9xl font-black text-[#FF3D00] tracking-tighter uppercase">
            Garage Work in PUNE •
          </span>
        </div>
      </div>

      {/* Overlay Badge */}
      <div className="absolute bottom-10 z-20 glass-panel px-6 py-2.5 rounded-full border border-white/20 text-xs font-tech text-[#F4F2ED] uppercase tracking-widest flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#FF3D00] animate-ping"></span>
        AUTOMOTIVE PRECISION IN EVERY BOLT
      </div>
    </section>
  );
}
