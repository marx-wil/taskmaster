import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Hero from '../../components/landingpage/hero';
import LandingFeatures from '../../components/landingpage/features';
import HowItWorks from '../../components/landingpage/howitworks';
import Testimonials from '../../components/landingpage/testimonials';
import PricingSection from '../../components/landingpage/pricing';

const LandingPage = () => {
  const bgColor = useColorModeValue('#F5F7FA', '#161B22');

  return (
    <Box bg={bgColor}>
      <Hero />
      <LandingFeatures />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
    </Box>
  );
};

export default LandingPage;
