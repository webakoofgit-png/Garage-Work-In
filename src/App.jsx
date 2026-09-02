import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

// Component Imports
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import BrandsPage from './pages/BrandsPage';
import EngineOilsPage from './pages/EngineOilsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import HealthCheckPage from './pages/HealthCheckPage';
import FaqPage from './pages/FaqPage';
import BookingPage from './pages/BookingPage';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('₹499 (125–220cc Performance)');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = (pkgTier = 'VJ / 02') => {
    setSelectedPackage(pkgTier);
    setBookingOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#080808] text-[#F4F2ED] relative overflow-x-hidden font-sans">
        {/* Custom Mouse Cursor */}
        <CustomCursor />

        {/* Global Navigation Header */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Multi-Page Route Views */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/pricing" element={<PricingPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/brands" element={<BrandsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/engine-oils" element={<EngineOilsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/how-it-works" element={<HowItWorksPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/health-check" element={<HealthCheckPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/faq" element={<FaqPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive WhatsApp Booking Modal */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          initialPackage={selectedPackage}
        />

        {/* Mobile Sticky Booking Bar */}
        <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />
      </div>
    </Router>
  );
}
