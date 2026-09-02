import React, { useState, useRef } from 'react';
import { SlidersHorizontal, Sparkles, AlertCircle } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientMouseX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientMouseX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-24 bg-carbon-pattern relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-tech text-[#FF3D00] uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          WORKSHOP TRANSFORMATION
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          BEFORE SERVICE VS <br />
          <span className="text-[#FF3D00] neon-text-red">GWI SERVICED PRISTINE.</span>
        </h2>
        <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-4 font-sans">
          Drag the interactive slider below to reveal the meticulous restoration, deep foam washing, and engine polish completed by our master technicians.
        </p>
      </div>

      {/* Interactive Split-Screen Comparison Slider Stage */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[350px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl select-none cursor-ew-resize"
          data-cursor="DRAG"
        >
          {/* Right Image (AFTER / GWI SERVICED - Restored Engine) */}
          <div className="absolute inset-0 w-full h-full bg-[#111] flex items-center justify-center">
            <img
              src="/assets/superbike_beast.png"
              alt="Garage Work In Serviced Restored Motorcycle Engine"
              className="w-full h-full object-cover filter brightness-110 saturate-125"
            />
            <div className="absolute top-6 right-6 glass-panel px-4 py-2 rounded-full border border-emerald-400/40 text-xs font-tech font-bold text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              GARAGE WORK IN SERVICED & POLISHED
            </div>
          </div>

          {/* Left Image (BEFORE SERVICE - Grimy Engine Clip-path) */}
          <div
            className="absolute inset-0 w-full h-full bg-[#080808] flex items-center justify-center overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/assets/before_service.png"
              alt="Dirty Motorcycle Engine Before Service"
              className="w-full h-full object-cover filter contrast-125 brightness-90 min-w-[500px] sm:min-w-[900px]"
            />
            <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full border border-[#FF3D00]/40 text-xs font-tech font-bold text-[#FF3D00] flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              BEFORE SERVICE (ROAD GRIME & SLUDGE)
            </div>
          </div>

          {/* Draggable Divider Bar */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF3D00] border-2 border-white flex items-center justify-center shadow-2xl">
              <SlidersHorizontal className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
