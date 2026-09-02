import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#040404] text-[#8E9296] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">

              <span className="font-display text-3xl font-black text-white tracking-wider">
                Garage<span className="text-[#FF3D00]"> Work In</span>
              </span>
            </Link>
            <p className="text-xs font-sans text-[#8E9296] leading-relaxed max-w-sm">
              No Hidden Charges
            </p>
            <div className="flex items-center gap-3 text-xs font-tech text-white">
              <MapPin className="w-4 h-4 text-[#FF3D00]" />
              <span>Serving All Pune & PCMC Localities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-tech text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              EXPLORE PAGES
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link to="/services" className="hover:text-[#FF3D00] transition-colors">All Motorcycle Services</Link></li>
              <li><Link to="/pricing" className="hover:text-[#FF3D00] transition-colors">Transparent Pricing Tiers</Link></li>
              <li><Link to="/brands" className="hover:text-[#FF3D00] transition-colors">Brands We Service</Link></li>
              <li><Link to="/engine-oils" className="hover:text-[#FF3D00] transition-colors">Engine Oils & Lubrication</Link></li>
              <li><Link to="/health-check" className="hover:text-[#FF3D00] transition-colors">25-Point Bike Health Check</Link></li>
            </ul>
          </div>

          {/* Process & Tiers */}
          <div className="space-y-3">
            <h4 className="font-tech text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              PACKAGES & PROCESS
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link to="/how-it-works" className="hover:text-[#FF3D00] transition-colors">How It Works (Doorstep)</Link></li>
              <li><Link to="/pricing" className="hover:text-[#FF3D00] transition-colors">₹399 (0–125cc Commuters)</Link></li>
              <li><Link to="/pricing" className="hover:text-[#FF3D00] transition-colors">₹499 (125–220cc Performance)</Link></li>
              <li><Link to="/pricing" className="hover:text-[#FF3D00] transition-colors">₹599 (220–400cc Cruisers & ADV)</Link></li>
              <li><Link to="/pricing" className="hover:text-[#FF3D00] transition-colors">₹1200 (600cc Superbikes)</Link></li>
              <li><Link to="/faq" className="hover:text-[#FF3D00] transition-colors">FAQ & Support Center</Link></li>
            </ul>
          </div>

          {/* Direct Support */}
          <div className="space-y-3">
            <h4 className="font-tech text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">
              PUNE HELPLINE
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+918888888888"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#111] border border-white/10 text-xs font-tech text-white hover:border-[#FF3D00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF3D00]" />
                +91 88888 88888
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#FF3D00] text-xs font-tech font-bold text-white uppercase tracking-widest hover:bg-[#ff551c] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                WHATSAPP BOOKING
              </button>
            </div>
          </div>
        </div>

        {/* Huge Faded Branding Text */}
        <div className="my-12 text-center select-none pointer-events-none overflow-hidden">
          <span className="font-display text-8xl sm:text-[140px] lg:text-[180px] font-black text-white/5 leading-none uppercase tracking-tighter block">
            Garage Work in
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-[#8E9296]">
          <div>
            © {new Date().getFullYear()} Garage Work in Pune. All Rights Reserved.
          </div>
          <div className="font-bold text-white uppercase tracking-widest">
            BUILT FOR THE RIDE AHEAD.
          </div>
        </div>
      </div>
    </footer>
  );
}
