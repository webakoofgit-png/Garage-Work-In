import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rohan Deshmukh',
      location: 'Hinjewadi Phase 1, Pune',
      bike: 'Royal Enfield Interceptor 650',
      rating: 5,
      text: 'Garage Work in saved me an entire Saturday! They picked up my Interceptor right from my tech park office in Hinjewadi. Received live video of oil change & clutch adjustment on WhatsApp. Paid after test ride.',
    },
    {
      name: 'Aditya Kulkarni',
      location: 'Baner Road, Pune',
      bike: 'KTM Duke 390',
      rating: 5,
      text: 'Most transparent bike service in Pune. Authorized service centers always try to add unnecessary paid add-ons. Garage Work in billed Motul Synthetic oil strictly at MRP with zero hidden charges!',
    },
    {
      name: 'Priya Shinde',
      location: 'Kothrud, Pune',
      bike: 'TVS Jupiter 125',
      rating: 5,
      text: 'Extremely polite mechanics and hassle-free doorstep pickup. Returned my scooter within 5 hours spotless clean with high-gloss polish. Will definitely use VJ for all future servicing.',
    },
    {
      name: 'Sameer Joshi',
      location: 'Wakad & PCMC',
      bike: 'Yamaha YZF R15 V4',
      rating: 5,
      text: 'Superbike and sports bike owners know how hard it is to trust local garages. VJ technicians handled my R15 with extreme care and torque wrench precision. 10/10 service experience.',
    },
  ];

  return (
    <section className="py-24 bg-workshop-mesh relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-tech text-[#8E9296] uppercase tracking-widest mb-3">
          <Star className="w-3.5 h-3.5 text-[#FF3D00] fill-[#FF3D00]" />
          COMMUNITY FEEDBACK
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          WHAT PUNE <br />
          <span className="metallic-text">RIDERS SAY.</span>
        </h2>
      </div>

      {/* Editorial Horizontal Scrolling Cards Deck */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#FF3D00] transition-all relative flex flex-col justify-between"
              data-cursor="TESTIMONIAL"
            >
              <Quote className="w-10 h-10 text-[#FF3D00]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FF3D00] fill-[#FF3D00]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#F4F2ED] font-sans leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl font-bold text-white uppercase">
                    {rev.name}
                  </div>
                  <div className="text-[11px] font-tech text-[#8E9296] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FF3D00]" />
                    {rev.location}
                  </div>
                </div>

                <div className="px-3 py-1 bg-[#111] border border-white/10 rounded text-[10px] font-tech font-bold text-[#FF3D00]">
                  {rev.bike}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
