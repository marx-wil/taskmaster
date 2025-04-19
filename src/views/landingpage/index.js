import React from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import Hero from '../../components/landingpage/hero';

const LandingPage = () => {
  const bgColor = useColorModeValue('#F4F7FE', '#111C44');

  return (
    <Box bg={bgColor}>
      <Container maxW="container.xl" py={20}>
        <Hero />
      </Container>
    </Box>
  );
};

export default LandingPage; 