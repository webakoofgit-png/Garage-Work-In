import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Where does Garage Work in provide doorstep bike service?',
      a: 'We provide free doorstep pickup and return delivery across all areas of Pune & PCMC including Hinjewadi, Baner, Wakad, Kothrud, Aundh, Viman Nagar, Kharadi, PCMC (Chinchwad/Nigdi), Hadapsar, Magarpatta, Camp, and surrounding localities.',
    },
    {
      q: 'Is doorstep pickup and drop really 100% free?',
      a: 'Yes! Doorstep pickup and return drop delivery are completely free across Pune & PCMC for all standard servicing packages (₹399, ₹499, ₹599, ₹1200). There are zero additional travel or logistics fees.',
    },
    {
      q: 'Are there any hidden charges or unexpected part replacements?',
      a: 'Absolutely none. Labor charges are strictly fixed based on your motorcycle engine displacement (0-125cc ₹399, 125-220cc ₹499, 220-400cc ₹599). Spare parts and engine oils are billed strictly at printed MRP. We send a digital inspection report on WhatsApp before replacing any part, and no work is performed without your explicit approval.',
    },
    {
      q: 'When do I make the payment for my motorcycle service?',
      a: 'You pay ONLY AFTER your motorcycle is delivered back to your doorstep, after you inspect the workmanship and take a test ride. Payment can be made via UPI (GPay, PhonePe, Paytm), Net Banking, or Cash.',
    },
    {
      q: 'How do I book a doorstep bike service slot?',
      a: 'You can book instantly by clicking "BOOK SERVICE" or "BOOK ON WHATSAPP" on our website, or calling our helpline at +91 88888 88888. Share your bike model, location, and preferred time slot, and our pickup executive will be assigned immediately.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-workshop-mesh relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-tech text-[#8E9296] uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#FF3D00]" />
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
          CLEAR ANSWERS. <br />
          <span className="metallic-text">ZERO CONFUSION.</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIdx === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                  ? 'bg-[#16171a] border-[#FF3D00] shadow-xl shadow-[#FF3D00]/10'
                  : 'bg-[#0d0e10] border-white/10 hover:border-white/20'
                }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-tech text-base sm:text-lg font-bold text-white uppercase"
                data-cursor="FAQ"
              >
                <span>{faq.q}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#111] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FF3D00] text-white' : 'text-[#8E9296]'
                    }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-[#8E9296] font-sans leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
