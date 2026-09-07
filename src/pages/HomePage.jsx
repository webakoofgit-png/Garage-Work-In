import React from 'react';
import Hero3D from '../components/Hero3D';
import TrustStrip from '../components/TrustStrip';
import ExplodedServices from '../components/ExplodedServices';
import PricingSection from '../components/PricingSection';
import ComparisonMatrix from '../components/ComparisonMatrix';
import BrandMarquee from '../components/BrandMarquee';
import SuperbikeSection from '../components/SuperbikeSection';
import OilExperience from '../components/OilExperience';
import HowItWorks from '../components/HowItWorks';
import BikeHealthCheck from '../components/BikeHealthCheck';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Testimonials from '../components/Testimonials';
import ServiceAreaMap from '../components/ServiceAreaMap';
import FaqSection from '../components/FaqSection';
import FinalCta from '../components/FinalCta';

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

      {/* 6. Interactive Bike Health Check Diagnostic */}
      <BikeHealthCheck onOpenBooking={onOpenBooking} />

      {/* 7. Exploded Services & 22-Point Inspection Details */}
      <ExplodedServices onOpenBooking={onOpenBooking} />

      {/* 8. Engine Oil Selection & Guarantee */}
      <OilExperience onOpenBooking={onOpenBooking} />

      {/* 9. Superbike & High-Performance Motorcycle Care */}
      <SuperbikeSection onOpenBooking={onOpenBooking} />

      {/* 10. Brands We Support */}
      <BrandMarquee />

      {/* 11. Visual Proof: Before & After Transformation */}
      <BeforeAfterSlider />

      {/* 12. Verified Customer Reviews */}
      <Testimonials />

      {/* 13. Service Coverage Map across Pune & PCMC */}
      <ServiceAreaMap />

      {/* 14. Frequently Asked Questions */}
      <FaqSection />

      {/* 15. Final Call to Action */}
      <FinalCta onOpenBooking={onOpenBooking} />
    </>
  );
}
