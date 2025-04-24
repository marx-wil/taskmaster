import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Hero from '../../components/landingpage/hero';
import LandingFeatures from '../../components/landingpage/features';
import HowItWorks from '../../components/landingpage/howitworks';
import Testimonials from '../../components/landingpage/testimonials';
import PricingSection from '../../components/landingpage/pricing';
import ScrollAnimation from '../../components/landingpage/scrollanim/ScrollAnimation';

const LandingPage = () => {
  const bgColor = useColorModeValue('#F5F7FA', '#161B22');

  return (
    <Box bg={bgColor}>
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <LandingFeatures />
      </ScrollAnimation>
      <ScrollAnimation>
        <HowItWorks />
      </ScrollAnimation>
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation>
        <PricingSection />
      </ScrollAnimation>
    </Box>
  );
};

export default LandingPage;
