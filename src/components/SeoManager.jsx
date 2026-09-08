import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeoData = {
  '/': {
    title: 'Doorstep Bike Service in Pune | Free Pickup & Drop | Garage Work In',
    description: "Pune's #1 doorstep bike servicing experience. 100% transparent pricing starting at ₹399, free doorstep pickup & drop, 25-point digital health inspection & genuine engine oils at printed MRP.",
  },
  '/services': {
    title: 'Two-Wheeler Repair & Servicing Packages in Pune | Garage Work In',
    description: 'Explore comprehensive bike repair services in Pune. From general servicing to engine rebuilds, brake overhaul & denting painting.',
  },
  '/pricing': {
    title: 'Transparent Bike Service Pricing Tiers Pune (From ₹399) | Garage Work In',
    description: 'Fixed labor pricing and 100% genuine parts at printed MRP. Check service packages for 0-125cc, 125-220cc, 220-400cc and Superbikes.',
  },
  '/brands': {
    title: 'Two-Wheeler Brands We Service in Pune (Honda, RE, Yamaha, KTM) | Garage Work In',
    description: 'Expert doorstep service for all major motorcycle & scooter brands in Pune: Honda, Royal Enfield, Yamaha, KTM, Bajaj, TVS, Hero & Superbikes.',
  },
  '/engine-oils': {
    title: '100% Genuine Sealed Engine Oils at Printed MRP Pune | Garage Work In',
    description: 'We strictly use sealed, original engine oil cans from top brands: Motul, Castrol, Shell, Yamalube, Gulf & Servo. Unsealed right in front of you.',
  },
  '/how-it-works': {
    title: 'How Doorstep Bike Servicing Works in Pune & PCMC | Garage Work In',
    description: 'Simple 3-step doorstep bike service in Pune: Book online, free doorstep pickup & same-day drop, inspect & pay after delivery.',
  },
  '/health-check': {
    title: '25-Point Digital Bike Health Diagnostic Pune | Garage Work In',
    description: 'Know your bike score. Interactive 25-point digital inspection covering engine, brakes, electricals, chain & tyres with WhatsApp updates.',
  },
  '/faq': {
    title: 'Frequently Asked Questions - Doorstep Bike Service Pune | Garage Work In',
    description: 'Got questions about doorstep bike service in Pune? Find answers regarding pricing, pickup & drop, oil MRP guarantee, and service warranty.',
  },
  '/booking': {
    title: 'Book Doorstep Bike Service Online Pune | Garage Work In',
    description: 'Book your doorstep bike service slot in Pune & PCMC. Get 10% OFF on your first booking with free doorstep pickup & drop.',
  },
};

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const currentSeo = routeSeoData[location.pathname] || routeSeoData['/'];

    // Update document title
    document.title = currentSeo.title;

    // Update description meta tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSeo.description);
    }

    // Update OpenGraph title & description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentSeo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentSeo.description);

    // Update Twitter title & description
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', currentSeo.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', currentSeo.description);
  }, [location.pathname]);

  return null;
}
