import React, { useState, useEffect } from 'react';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BrandMarquee() {
  const brands = [
    { name: 'HERO', tag: 'Commuter Leader', logo: '/assets/Brand logos/Hero.jpeg' },
    { name: 'TVS', tag: 'RTR & Jupiter Tech', logo: '/assets/Brand logos/TVS.jpeg' },
    { name: 'BAJAJ', tag: 'Pulsar & Dominar', logo: '/assets/Brand logos/Bajaj.jpeg' },
    { name: 'KTM', tag: 'Duke & Adventure', logo: '/assets/Brand logos/KTM.jpeg' },
    { name: 'YAMAHA', tag: 'R15 & FZ Racing', logo: '/assets/Brand logos/yamaha.jpeg' },
    { name: 'ROYAL ENFIELD', tag: 'Bullet & Continental', logo: '/assets/Brand logos/RE.jpeg' },
    { name: 'JAWA', tag: 'Classic & 42', logo: '/assets/Brand logos/jawa.jpeg' },
    { name: 'HONDA', tag: 'Scooters & Bikes', logo: '/assets/Brand logos/Honda.jpeg' },
    { name: 'SUZUKI', tag: 'GS & RR Series', logo: '/assets/Brand logos/suzuki.jpeg' },
    { name: 'APRILIA', tag: 'RSV4 & Tuono', logo: '/assets/Brand logos/aprilla.jpeg' },
    { name: 'BMW MOTORRAD', tag: 'GS & RR Series', logo: '/assets/Brand logos/BMW.jpeg' },
    { name: 'DUCATI', tag: 'Panigale & Monster', logo: '/assets/Brand logos/Dukati.jpeg' },
    { name: 'TRIUMPH', tag: 'Speed 400 & Street', logo: '/assets/Brand logos/Triamph.jpeg' },
    { name: 'KAWASAKI', tag: 'Ninja & Z Series', logo: '/assets/Brand logos/kawasaki.jpeg' },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-Carousel Timer (Cycles every 2.5 seconds seamlessly)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 2500);

    return () => clearInterval(interval);
  }, [totalPages, isPaused]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="brands" className="py-20 bg-workshop-mesh relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-tech text-[#8E9296] uppercase tracking-widest mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF3D00]" />
          ALL MAKES & MODELS SERVICED
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          EVERY MACHINE <br />
          <span className="metallic-text">DESERVES EXPERT CARE.</span>
        </h2>
      </div>

      {/* Auto-Carousel Container */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Chevron Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#111]/90 border border-white/20 hover:border-[#FF3D00] text-white hover:text-[#FF3D00] flex items-center justify-center transition-all shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
          aria-label="Previous Brands"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#111]/90 border border-white/20 hover:border-[#FF3D00] text-white hover:text-[#FF3D00] flex items-center justify-center transition-all shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
          aria-label="Next Brands"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden px-4 sm:px-6">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {brands.map((b, i) => (
              <div
                key={i}
                className="w-full min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(25%-1.5rem)] p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-[#FF3D00] transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer shadow-xl hover:-translate-y-1"
                data-cursor="BRAND"
              >
                {/* Uncropped Pure White Logo Container */}
                <div className="w-full h-32 sm:h-36 mb-4 flex items-center justify-center p-3 rounded-xl bg-white border border-white/20 group-hover:border-[#FF3D00] transition-all duration-300 overflow-hidden shadow-lg">
                  <img
                    src={b.logo}
                    alt={`${b.name} Logo`}
                    className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-[#8E9296] group-hover:text-white transition-all text-center">
                  {b.name}
                </span>
                <span className="text-[10px] font-tech text-white/40 group-hover:text-[#FF3D00] uppercase tracking-widest mt-1 text-center">
                  {b.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Glowing Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`transition-all duration-300 rounded-full ${currentPage === index
                  ? 'w-8 h-2.5 bg-[#FF3D00] shadow-[0_0_12px_#FF3D00]'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/50'
                }`}
              aria-label={`Go to brand page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
