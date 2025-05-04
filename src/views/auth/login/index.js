import React, { useState } from 'react';
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
  Image,
  Flex,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LoginImg from '../../../assets/auth/';
import { useAuthTheme } from '../../../theme/auth';
import { FaArrowLeft } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const theme = useAuthTheme();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (email && password) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

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
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box minH="100vh" bg={theme.bgColor} position="relative" overflow="hidden">
      <Container maxW="container.xl" h="100vh">
        <Flex h="full" align="center" justify="center">
          <Box
            w="full"
            maxW="md"
            p={8}
            borderRadius="xl"
            bg="rgba(26, 32, 44, 0.8)"
            backdropFilter="blur(10px)"
            boxShadow="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <IconButton
              aria-label="Back"
              position="absolute"
              top={4}
              left={4}
              size="sm"
              icon={<FaArrowLeft />}
              variant={'ghost'}
              background={useColorModeValue('#7C3AED', '#A970FF')}
              _hover={{ background: useColorModeValue('#7C3AED', '#A970FF') }}
              color={'#fff'}
              onClick={() => navigate('/')}
            />
            <VStack spacing={8} align="stretch">
              <Box textAlign="center">
                <Image
                  src={LoginImg}
                  alt="Login"
                  boxSize="100px"
                  mx="auto"
                  mb={6}
                />
                <Heading {...theme.headingStyles}>Welcome back</Heading>
                <Text {...theme.subheadingStyles}>
                  Sign in to continue to TaskMaster
                </Text>
              </Box>

              <VStack as="form" spacing={4} onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel {...theme.labelStyles}>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    {...theme.inputStyles}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel {...theme.labelStyles}>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    {...theme.inputStyles}
                  />
                </FormControl>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Signing in..."
                  {...theme.buttonStyles}
                  mt={6}
                >
                  Sign in
                </Button>

                <Text color={theme.textColor} fontSize="sm" textAlign="center">
                  Don't have an account?{' '}
                  <ChakraLink
                    as={RouterLink}
                    to="/register"
                    {...theme.linkStyles}
                  >
                    Sign up
                  </ChakraLink>
                </Text>

                <ChakraLink
                  as={RouterLink}
                  to="/forgot-password"
                  {...theme.linkStyles}
                  fontSize="sm"
                  textAlign="center"
                  display="block"
                >
                  Forgot Password?
                </ChakraLink>
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default LoginPage;
