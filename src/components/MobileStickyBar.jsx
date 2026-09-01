import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function MobileStickyBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#080808]/95 backdrop-blur-xl border-t border-white/10 p-3 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href="tel:+918888888888"
        className="flex-1 py-3 bg-[#111] border border-white/15 text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4 text-[#FF3D00]" />
        CALL
      </a>
      <button
        onClick={() => onOpenBooking()}
        className="flex-[2] py-3 bg-[#FF3D00] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg shadow-[#FF3D00]/40 flex items-center justify-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        BOOK SERVICE (10% OFF)
      </button>
    </div>
  );
}
