import React from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import Hero from '../../components/landingpage/hero';
import LandingFeatures from '../../components/landingpage/features';

const LandingPage = () => {
  const bgColor = useColorModeValue('#F5F7FA', '#161B22');

  return (
    <Box bg={bgColor}>
      <Container maxW="container.xl" py={20}>
        <Hero />
        <LandingFeatures />
      </Container>
    </Box>
  );
};

export default LandingPage; 