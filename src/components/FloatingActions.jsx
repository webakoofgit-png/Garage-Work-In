import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

// Official Original WhatsApp SVG Icon Component
function WhatsAppIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2A13.93 13.93 0 0 0 2.07 15.93c0 2.47.64 4.88 1.87 7.01L2 29.87l7.15-1.87a13.88 13.88 0 0 0 6.85 1.79h.01A13.93 13.93 0 0 0 29.93 16 13.93 13.93 0 0 0 16 2zm0 25.54h-.01a11.53 11.53 0 0 1-5.88-1.6l-.42-.25-4.37 1.15 1.16-4.26-.27-.44a11.58 11.58 0 0 1-1.78-6.14C4.43 9.61 9.61 4.43 16 4.43c3.09 0 6 1.2 8.19 3.39A11.51 11.51 0 0 1 27.57 16c0 6.39-5.18 11.54-11.57 11.54zm6.34-8.66c-.35-.17-2.06-1.02-2.38-1.13-.32-.12-.55-.17-.79.17-.23.35-.91 1.13-1.11 1.36-.2.23-.4.26-.75.09-.35-.17-1.48-.54-2.81-1.73-1.04-.92-1.74-2.06-1.94-2.41-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.79-1.9-1.08-2.61-.28-.68-.57-.59-.79-.6h-.67c-.23 0-.6.09-.91.43-.32.35-1.22 1.19-1.22 2.91 0 1.72 1.25 3.38 1.43 3.61.17.23 2.46 3.76 5.96 5.27.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 2.06-.84 2.35-1.65.29-.81.29-1.5.2-1.65-.08-.14-.31-.23-.66-.4z" />
    </svg>
  );
}

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3">
      {/* 1. Official WhatsApp Floating Button (Above Back to Top) */}
      <a
        href="https://wa.me/917219490145?text=Hi%20Garage%20Work%20In%2C%20I%20want%20to%20book%20a%20doorstep%20bike%20service%20in%20Pune."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center border border-white/20"
      >
        {/* Ambient Pulsing Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

        {/* Official WhatsApp SVG Icon */}
        <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />

        {/* Tooltip Hover Badge */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#111]/90 backdrop-blur-md text-white text-xs font-tech font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 pointer-events-none shadow-xl">
          CHAT ON WHATSAPP
        </span>
      </a>

      {/* 2. Back to Top Floating Button (Below WhatsApp) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group bg-[#111113]/90 hover:bg-[#FF3D00] text-white p-3 rounded-full shadow-2xl border border-white/20 hover:border-[#FF3D00] transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-fade-in"
        >
          <ChevronUp className="w-5 h-5 text-white group-hover:animate-bounce" />

          {/* Tooltip Hover Badge */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#111]/90 backdrop-blur-md text-white text-xs font-tech font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 pointer-events-none shadow-xl">
            BACK TO TOP
          </span>
        </button>
      )}
    </div>
  );
}
