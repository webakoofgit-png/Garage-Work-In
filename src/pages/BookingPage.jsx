import React, { useState } from 'react';
import { Calendar, Phone, MapPin, Wrench, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bikeModel: '',
    packageTier: 'VJ / 02',
    location: 'Hinjewadi',
    pickupDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
    });

    const text = `*NEW ONLINE BIKE SERVICE BOOKING — Garage Work in PUNE* 🏍️
---------------------------------
👤 *Rider Name:* ${formData.name || 'Rider'}
📞 *Phone:* ${formData.phone || 'N/A'}
🏍️ *Bike:* ${formData.bikeModel || 'Standard Motorcycle'}
📦 *Service Package:* ${formData.packageTier}
📍 *Pune Location:* ${formData.location}
📅 *Preferred Slot:* ${formData.pickupDate || 'Earliest Available'}
📝 *Notes:* ${formData.notes || 'Routine Doorstep Service'}
---------------------------------
Please confirm my pickup slot!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918888888888?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#080808] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#FF3D00]/40 text-xs font-tech tracking-widest uppercase text-[#FF3D00] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            ONLINE DOORSTEP SLOT RESERVATION
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            BOOK YOUR BIKE SERVICE <br />
            <span className="text-[#FF3D00] neon-text-red">IN 60 SECONDS.</span>
          </h1>
          <p className="text-[#8E9296] text-sm sm:text-base max-w-xl mx-auto mt-3 font-sans">
            10% OFF your first service! Free doorstep pickup across Pune & PCMC. Pay after delivery.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/15 bg-brushed-metal shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-12 h-12 animate-bounce" />
              </div>
              <h2 className="font-display text-4xl font-black text-white uppercase">
                BOOKING RESERVED!
              </h2>
              <p className="text-sm text-[#8E9296] font-sans max-w-md mx-auto">
                Opening direct WhatsApp chat with Garage Work in Pune... If it doesn't open automatically, click below:
              </p>
              <a
                href={`https://wa.me/918888888888?text=${encodeURIComponent(
                  `Hi Garage Work in! I booked doorstep bike service for my ${formData.bikeModel}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF3D00] text-white font-tech font-bold text-sm uppercase tracking-widest rounded-xl shadow-xl"
              >
                <MessageSquare className="w-5 h-5" />
                OPEN WHATSAPP NOW
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-tech text-[#8E9296] uppercase tracking-widest block mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#16171a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
                  />
                </div>

                <div>
                  <label className="text-xs font-tech text-[#8E9296] uppercase tracking-widest block mb-2">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#16171a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-tech text-[#8E9296] uppercase tracking-widest block mb-2">
                  BIKE MAKE & MODEL *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Enfield Classic 350 / Pulsar 220 / Activa 6G / KTM Duke 390"
                  value={formData.bikeModel}
                  onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                  className="w-full bg-[#16171a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-tech text-[#8E9296] uppercase tracking-widest block mb-2">
                    SERVICE TIER *
                  </label>
                  <select
                    value={formData.packageTier}
                    onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                    className="w-full bg-[#16171a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF3D00]"
                  >
                    <option value="VJ / 01">VJ / 01 — ₹499 (0-125cc Commuters)</option>
                    <option value="VJ / 02">VJ / 02 — ₹699 (125-220cc Performance)</option>
                    <option value="VJ / 03">VJ / 03 — ₹799 (220-350cc Cruisers)</option>
                    <option value="VJ / 04">VJ / 04 — CUSTOM (350cc+ Superbikes)</option>
                    <option value="VJ / 05">VJ / 05 — ₹499 Doorstep Bike Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-tech text-[#8E9296] uppercase tracking-widest block mb-2">
                    PUNE LOCALITY *
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#16171a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF3D00]"
                  >
                    <option value="Hinjewadi">Hinjewadi (Ph 1/2/3)</option>
                    <option value="Baner">Baner / Balewadi</option>
                    <option value="Wakad">Wakad / Tathawade</option>
                    <option value="Kothrud">Kothrud / Karve Nagar</option>
                    <option value="Viman Nagar">Viman Nagar / Airport Rd</option>
                    <option value="Kharadi">Kharadi / EON Free Zone</option>
                    <option value="Aundh">Aundh / Pashan</option>
                    <option value="PCMC">PCMC / Chinchwad / Nigdi</option>
                    <option value="Pimple Saudagar">Pimple Saudagar</option>
                    <option value="Hadapsar">Hadapsar / Magarpatta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-tech text-[#8E9296] uppercase tracking-widest block mb-2">
                  PREFERRED PICKUP DATE / TIME
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tomorrow morning 10 AM"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  className="w-full bg-[#16171a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-sm uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#FF3D00]/30 flex items-center justify-center gap-3 mt-4"
              >
                <MessageSquare className="w-5 h-5" />
                <span>CONFIRM & BOOK ON WHATSAPP</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap justify-center gap-4 text-xs text-[#8E9296] font-mono pt-2">
                <span>🔒 Zero Advance Required</span>
                <span>•</span>
                <span>Pay After Delivery & Test Ride</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
