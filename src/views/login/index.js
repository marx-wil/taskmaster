import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
  useToast,
  useColorModeValue,
  Image,
  Flex,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import LoginImg from '../../assets/landingpage/auth/Computer login-amico.png'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const pageRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  const bgColor = useColorModeValue('#FFF5EE', '#2D3748');
  const textColor = useColorModeValue('#4A5568', '#E2E8F0');
  const primaryColor = '#7928CA';
  const accentColor = '#4E36AA';
  const glassEffect = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  };

  useEffect(() => {
    const tl = gsap.timeline();

    if (window.innerWidth >= 992) { // Desktop animation
      tl.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
        .from(formRef.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.5');
    } else { // Mobile animation
      tl.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }

    tl.from('.form-element', {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/taskmaster');
    } else {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      minH="100vh"
      bg={bgColor}
      ref={pageRef}
      position="relative"
      overflow="hidden"
    >
      {/* Background Image for Mobile */}
      <Box
        display={{ base: 'block', lg: 'none' }}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
      >
        <Image
          src={LoginImg}
          alt="Background"
          objectFit="cover"
          w="full"
          h="full"
          opacity={0.15}
        />
      </Box>

      <Container maxW="7xl" h="100dvh" position="relative" zIndex={1}>
        <Flex
          h="full"
          align="center"
          justify="space-between"
          direction={{ base: 'column', lg: 'row' }}
          gap={8}
          py={8}
        >
          {/* Left side - Image (Desktop only) */}
          <Box
            flex="1"
            ref={imageRef}
            display={{ base: 'none', lg: 'block' }}
          >
            <Image
              src={LoginImg}
              alt="Login Illustration"
              w="full"
              maxW="500px"
              mx="auto"
            />
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={textColor}
              mt={4}
              className="form-element"
            >
              Turn your ideas into reality.
            </Text>
            <Text
              color={textColor}
              opacity={0.8}
              className="form-element"
            >
              Start for free and get attractive offers from the community
            </Text>
          </Box>

          {/* Right side - Form */}
          <Box
            flex="1"
            ref={formRef}
            maxW={{ base: '100%', lg: '450px' }}
            w="full"
            p={6}
            {...(window.innerWidth < 992 ? glassEffect : {})}
          >
            <VStack spacing={6} align="stretch">
              <Box className="form-element">
                <HStack alignItems="center">
                  <Heading size="lg" color={textColor}>
                    <IconButton as={RouterLink} to="/" icon={<FaArrowLeft />} me={2} />Login to TaskMaster</Heading>
                </HStack>
                <Text color={textColor} opacity={0.8} mt={2}>
                  Welcome back! Please enter your details
                </Text>
              </Box>

              <VStack as="form" spacing={4} onSubmit={handleSubmit}>
                <FormControl isRequired className="form-element">
                  <FormLabel color={textColor}>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    bg={useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.1)')}
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    color={textColor}
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }}
                    _focus={{
                      borderColor: primaryColor,
                      boxShadow: `0 0 0 1px ${primaryColor}`,
                    }}
                  />
                </FormControl>

                <FormControl isRequired className="form-element">
                  <FormLabel color={textColor}>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    bg={useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.1)')}
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    color={textColor}
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }}
                    _focus={{
                      borderColor: primaryColor,
                      boxShadow: `0 0 0 1px ${primaryColor}`,
                    }}
                  />
                </FormControl>
                <Button
                  type="submit"
                  w="full"
                  bg={primaryColor}
                  color="white"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <Text color={textColor} textAlign="center" className="form-element">
                  Don't have an account?{' '}
                  <ChakraLink
                    as={RouterLink}
                    to="/register"
                    color={primaryColor}
                    _hover={{
                      color: accentColor,
                    }}
                  >
                    Sign up
                  </ChakraLink>
                </Text>
                <Text color={textColor} textAlign="center" className="form-element">
                  Forgot Password?{' '}
                  <ChakraLink
                    as={RouterLink}
                    to="/forgot-password"
                    color={primaryColor}
                    _hover={{
                      color: accentColor,
                    }}
                  >
                    Reset Password
                  </ChakraLink>
                </Text>
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default LoginPage; 