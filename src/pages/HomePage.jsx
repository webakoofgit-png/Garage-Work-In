import React, { Suspense, lazy } from 'react';
import Hero3D from '../components/Hero3D';
import TrustStrip from '../components/TrustStrip';
import ComparisonMatrix from '../components/ComparisonMatrix';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';

// Lazy loaded below-the-fold components for instant initial page load
const BikeHealthCheck = lazy(() => import('../components/BikeHealthCheck'));
const ExplodedServices = lazy(() => import('../components/ExplodedServices'));
const OilExperience = lazy(() => import('../components/OilExperience'));
const SuperbikeSection = lazy(() => import('../components/SuperbikeSection'));
const BrandMarquee = lazy(() => import('../components/BrandMarquee'));
const BeforeAfterSlider = lazy(() => import('../components/BeforeAfterSlider'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const ServiceAreaMap = lazy(() => import('../components/ServiceAreaMap'));
const FaqSection = lazy(() => import('../components/FaqSection'));
const FinalCta = lazy(() => import('../components/FinalCta'));

function SectionLoader() {
  return <div className="py-12 bg-[#080808] text-center text-xs font-tech text-white/30">LOADING...</div>;
}

export default function HomePage({ onOpenBooking }) {
  return (
    <>
      {/* 1. Hero 3D Showcase */}
      <Hero3D onOpenBooking={onOpenBooking} />

      {/* 2. Trust Stats & Guarantees */}
      <TrustStrip />

      {/* 3. Comparison Matrix: Value Proposition Upfront */}
      <ComparisonMatrix onOpenBooking={onOpenBooking} />

      {/* 4. How It Works: Clear 3-Step Doorstep Process */}
      <HowItWorks onOpenBooking={onOpenBooking} />

      {/* 5. Service Packages & Pricing */}
      <PricingSection onOpenBooking={onOpenBooking} />

      {/* Lazy Loaded Below-the-Fold Sections */}
      <Suspense fallback={<SectionLoader />}>
        {/* 6. Interactive Bike Health Check Diagnostic */}
        <div className="section-lazy-render">
          <BikeHealthCheck onOpenBooking={onOpenBooking} />
        </div>

        {/* 7. Exploded Services & 22-Point Inspection Details */}
        <div className="section-lazy-render">
          <ExplodedServices onOpenBooking={onOpenBooking} />
        </div>

        {/* 8. Engine Oil Selection & Guarantee */}
        <OilExperience onOpenBooking={onOpenBooking} />

        {/* 9. Superbike & High-Performance Motorcycle Care */}
        <div className="section-lazy-render">
          <SuperbikeSection onOpenBooking={onOpenBooking} />
        </div>

        {/* 10. Brands We Support */}
        <BrandMarquee />

        {/* 11. Visual Proof: Before & After Transformation */}
        <div className="section-lazy-render">
          <BeforeAfterSlider />
        </div>

        {/* 12. Verified Customer Reviews */}
        <div className="section-lazy-render">
          <Testimonials />
        </div>

        {/* 13. Service Coverage Map across Pune & PCMC */}
        <div className="section-lazy-render">
          <ServiceAreaMap />
        </div>

        {/* 14. Frequently Asked Questions */}
        <div className="section-lazy-render">
          <FaqSection />
        </div>

        {/* 15. Final Call to Action */}
        <FinalCta onOpenBooking={onOpenBooking} />
      </Suspense>
    </>
  );
}
