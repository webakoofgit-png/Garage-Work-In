import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Calendar, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Brands', path: '/brands' },
    { name: 'Engine Oils', path: '/engine-oils' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Health Check', path: '/health-check' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
        : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" data-cursor="HOME">

          <div>
            <div className="font-display text-xl sm:text-2xl font-black tracking-wider text-white flex items-center gap-1.5 leading-none">
              Garage<span className="text-[#FF3D00]">Work In</span>
            </div>
            <div className="text-[9px] font-tech text-[#8E9296] tracking-widest uppercase flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              NO HIDDEN CHARGES
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] uppercase font-tech font-medium tracking-widest relative group py-1 transition-colors ${isActive ? 'text-[#FF3D00] font-bold' : 'text-[#8E9296] hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#FF3D00] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+918888888888"
            className="flex items-center gap-2 px-3 py-2 text-xs font-tech font-medium text-[#F4F2ED] hover:text-[#FF3D00] transition-colors"
            data-cursor="CALL"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF3D00]" />
            <span>+91 88888 88888</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-tech font-bold uppercase tracking-wider text-white bg-[#FF3D00] hover:bg-[#ff551c] rounded-md shadow-lg shadow-[#FF3D00]/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            data-cursor="BOOK"
          >
            <Calendar className="w-4 h-4 mr-2" />
            BOOK SERVICE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-tech font-bold text-white bg-[#FF3D00] rounded"
          >
            BOOK
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#FF3D00] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-tech uppercase tracking-widest py-1 border-b border-white/5 ${isActive ? 'text-[#FF3D00] font-bold' : 'text-[#F4F2ED] hover:text-[#FF3D00]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:+918888888888"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-tech text-[#F4F2ED] bg-[#111] border border-white/10 rounded-md"
              >
                <Phone className="w-4 h-4 text-[#FF3D00]" />
                CALL: +91 88888 88888
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-tech font-bold uppercase tracking-widest text-white bg-[#FF3D00] rounded-md shadow-lg"
              >
                BOOK YOUR SERVICE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
