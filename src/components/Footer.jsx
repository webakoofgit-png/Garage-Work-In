import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd"/>
    </svg>
  );
}

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
              <MapPin className="w-4 h-4 text-[#FF3D00] shrink-0" />
              <span>Address-Garage Work In,handewadi Katraj Rd,near Cygnet Public School,Adarsh Nagar,Pune-412308</span>
            </div>

            {/* Instagram Social Media Link */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/garageworkinofficial?stkn=MWdzeWpoZ29lZzBwNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Garage Work In Official Instagram"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#111] border border-white/10 text-xs font-tech text-white hover:border-[#E4405F] hover:text-[#E4405F] transition-all group shadow-md"
              >
                <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:scale-110 transition-transform" />
                <span className="font-bold tracking-wider">@garageworkinofficial</span>
              </a>
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
                href="tel:+917219490145"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#111] border border-white/10 text-xs font-tech text-white hover:border-[#FF3D00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF3D00]" />
                +91 7219490145
              </a>
              <a
                href="tel:+917219390145"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#111] border border-white/10 text-xs font-tech text-white hover:border-[#FF3D00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF3D00]" />
                +91 7219390145
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#FF3D00] text-xs font-tech font-bold text-white uppercase tracking-widest hover:bg-[#ff551c] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                WHATSAPP BOOKING
              </button>
              <a
                href="https://www.instagram.com/garageworkinofficial?stkn=MWdzeWpoZ29lZzBwNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Garage Work In on Instagram"
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-xs font-tech font-bold text-white uppercase tracking-widest hover:opacity-90 transition-all shadow-md"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                FOLLOW ON INSTAGRAM
              </a>
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
            © {new Date().getFullYear()} Garage Work in Pune. All Rights Reserved, Design by <a href="https://webakoof.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3D00] transition-colors">Webakoof</a>
          </div>
          <div className="font-bold text-white uppercase tracking-widest">
            BUILT FOR THE RIDE AHEAD.
          </div>
        </div>
      </div>
    </footer>
  );
}
