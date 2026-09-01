import React, { useState } from 'react';
import { X, Calendar, MapPin, Wrench, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialPackage = 'VJ / 02' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bikeModel: '',
    packageTier: initialPackage,
    location: 'Hinjewadi',
    pickupDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Format WhatsApp message
    const text = `*NEW BIKE SERVICE BOOKING — Garage Work in PUNE* 🏍️
---------------------------------
👤 *Name:* ${formData.name || 'Rider'}
📞 *Phone:* ${formData.phone || 'N/A'}
🏍️ *Bike:* ${formData.bikeModel || 'Standard Two-Wheeler'}
📦 *Service Package:* ${formData.packageTier}
📍 *Pune Location:* ${formData.location}
📅 *Preferred Slot:* ${formData.pickupDate || 'Earliest Available'}
📝 *Notes:* ${formData.notes || 'Routine Servicing'}
---------------------------------
Please confirm my doorstep pickup slot!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918888888888?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl bg-[#0d0e10] overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF3D00] flex items-center justify-center text-white font-bold font-display text-xl">
              VJ
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                BOOK DOORSTEP SERVICE
              </h3>
              <div className="text-[10px] font-tech text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                FREE PICKUP & DROP IN PUNE & PCMC
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8E9296] hover:text-white rounded-full bg-[#111] hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h4 className="font-display text-3xl font-black text-white uppercase">
              BOOKING GENERATED!
            </h4>
            <p className="text-xs text-[#8E9296] font-sans max-w-xs mx-auto">
              Opening WhatsApp chat with Garage Work in Pune... If it doesn't open automatically, click below:
            </p>
            <a
              href={`https://wa.me/918888888888?text=${encodeURIComponent(
                `Hi Garage Work in! I want to book doorstep bike service for my ${formData.bikeModel}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF3D00] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              OPEN WHATSAPP NOW
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-tech text-[#8E9296] uppercase tracking-widest block mb-1">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#16171a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
                />
              </div>

              <div>
                <label className="text-[11px] font-tech text-[#8E9296] uppercase tracking-widest block mb-1">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#16171a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-tech text-[#8E9296] uppercase tracking-widest block mb-1">
                BIKE MAKE & MODEL *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Royal Enfield Classic 350 / Pulsar 220 / Activa 6G"
                value={formData.bikeModel}
                onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                className="w-full bg-[#16171a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-tech text-[#8E9296] uppercase tracking-widest block mb-1">
                  SERVICE TIER *
                </label>
                <select
                  value={formData.packageTier}
                  onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                  className="w-full bg-[#16171a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF3D00]"
                >
                  <option value="VJ / 01">VJ / 01 — ₹499 (0-125cc)</option>
                  <option value="VJ / 02">VJ / 02 — ₹699 (125-220cc)</option>
                  <option value="VJ / 03">VJ / 03 — ₹799 (220-350cc)</option>
                  <option value="VJ / 04">VJ / 04 — CUSTOM (350cc+ Superbike)</option>
                  <option value="VJ / 05">VJ / 05 — ₹499 Bike Inspection</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-tech text-[#8E9296] uppercase tracking-widest block mb-1">
                  PUNE LOCALITY *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#16171a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF3D00]"
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
              <label className="text-[11px] font-tech text-[#8E9296] uppercase tracking-widest block mb-1">
                PREFERRED PICKUP DATE / TIME
              </label>
              <input
                type="text"
                placeholder="e.g. Tomorrow morning 10 AM"
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                className="w-full bg-[#16171a] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#FF3D00]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#FF3D00] hover:bg-[#ff551c] text-white font-tech font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-xl shadow-[#FF3D00]/30 flex items-center justify-center gap-2 mt-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CONFIRM & BOOK ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-[10px] text-[#8E9296] font-mono pt-2">
              🔒 Zero advance payment required. Pay after delivery & test ride.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
