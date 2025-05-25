
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PurposeSection from '@/components/PurposeSection';
import WhySection from '@/components/WhySection';
import FlameSection from '@/components/FlameSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CallToAction from '@/components/CallToAction';
import LaunchesSection from '@/components/LaunchesSection';
import ShirtsForSaleSection from '@/components/ShirtsForSaleSection';

const Index = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout showScrollAnimations={true}>
      {/* Product-oriented sections first */}
      <HeroSection />
      {/* <LaunchesSection /> */}
      {/* <ShirtsForSaleSection /> */}
      <PortfolioSection />
      <CallToAction />
      
      {/* Informational sections moved to the end */}
      <AboutSection />
      <PurposeSection />
      <WhySection />
      <FlameSection />
      <ServicesSection />
    </Layout>
  );
};

export default Index;
