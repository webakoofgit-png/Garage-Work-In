import React from 'react';
import Hero3D from '../components/Hero3D';
import TrustStrip from '../components/TrustStrip';
import ExplodedServices from '../components/ExplodedServices';
import PricingSection from '../components/PricingSection';
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
      <Hero3D onOpenBooking={onOpenBooking} />
      <TrustStrip />
      <ExplodedServices onOpenBooking={onOpenBooking} />
      <PricingSection onOpenBooking={onOpenBooking} />
      <BrandMarquee />
      <SuperbikeSection onOpenBooking={onOpenBooking} />
      <OilExperience onOpenBooking={onOpenBooking} />
      <HowItWorks onOpenBooking={onOpenBooking} />
      <BikeHealthCheck onOpenBooking={onOpenBooking} />
      <BeforeAfterSlider />
      <Testimonials />
      <ServiceAreaMap />
      <FaqSection />
      <FinalCta onOpenBooking={onOpenBooking} />
    </>
  );
}
