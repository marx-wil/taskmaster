'use client';

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Feature = ({ heading, text, delay = 0 }) => {
  const ref = useRef();
  const cardBg = useColorModeValue('#ffffff', '#0D1117');
  const primaryTextColor = useColorModeValue('#1e1e1e', '#E6EDF3');
  const secondaryTextColor = useColorModeValue('#4B5563', '#8B949E');
  const cardBorderColor = useColorModeValue('#e5e7eb', '#30363d');
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        delay,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, [delay]);
  const handleMouseEnter = () => {
    gsap.to(ref.current, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    });
  };
  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };
  return (
    <GridItem
      ref={ref}
      bg={cardBg}
      p={6}
      borderRadius="2xl"
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
      border={'1px solid'}
      borderColor={cardBorderColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <chakra.h3
        fontSize="xl"
        fontWeight="700"
        color={primaryTextColor}
        mb={2}
        className="poppins-bold"
      >
        {heading}
      </chakra.h3>
      <chakra.p
        fontSize="md"
        color={secondaryTextColor}
        className="poppins-regular"
      >
        {text}
      </chakra.p>
    </GridItem>
  );
};

export default function HowItWorks() {
  const borderColor = useColorModeValue('#E5E7EB', '#30363D');
  const containerRef = useRef();
  const primaryTextColor = useColorModeValue('#1e1e1e', '#E6EDF3');
  const secondaryTextColor = useColorModeValue('#4B5563', '#8B949E');
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(containerRef.current, { opacity: 0, duration: 0.8 });
  }, []);

  return (
    <Box
      ref={containerRef}
      as={Container}
      maxW="7xl"
      mt={20}
      p={{ base: 6, md: 10 }}
      borderRadius="2xl"
      position="relative"
    >
      <Box
        position="absolute"
        top="-8%"
        right="-6%"
        width="250px"
        height="250px"
        bgGradient="radial(circle, rgba(124,58,237,0.15), transparent 70%)"
        filter="blur(30px)"
        borderRadius="full"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-8%"
        left="-6%"
        width="250px"
        height="250px"
        bgGradient="radial(circle, rgba(109,40,217,0.15), transparent 70%)"
        filter="blur(30px)"
        borderRadius="full"
        zIndex={0}
      />

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        gap={6}
        position="relative"
        zIndex={1}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing={6}>
            <chakra.h1
              fontSize="4xl"
              fontWeight="extrabold"
              lineHeight="shorter"
              className="poppins-bold"
              color={primaryTextColor}
            >
              How it works?
            </chakra.h1>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex
            direction="column"
            alignItems="flex-start"
            justifyContent={'center'}
            alignContent={'center'}
          >
            <chakra.p
              fontSize="lg"
              color={secondaryTextColor}
              lineHeight="tall"
              className="poppins-regular"
            >
              Getting started is quick and easy – no learning curve required.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={10} mb={16} borderColor={borderColor} opacity={0.4} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={{ base: '10', sm: '14', md: '20' }}
        position="relative"
        zIndex={1}
      >
        <Feature
          heading={'Sign Up'}
          text={'Create your free account in seconds.'}
          delay={0.2}
        />
        <Feature
          heading={'Create Tasks'}
          text={'Add tasks, set deadlines, and prioritize your work.'}
          delay={0.4}
        />
        <Feature
          heading={'Stay Productive'}
          text={'Track your progress and manage your day like a pro.'}
          delay={0.6}
        />
      </Grid>
    </Box>
  );
}
