import React, { useState, useEffect } from 'react';
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
import RegisterImg from '../../../assets/auth/';
import { useAuthTheme } from '../../../theme/auth';
import { FaArrowLeft } from 'react-icons/fa';

const RegisterPage = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('taskmaster_token');
    if (token) {
      toast({
        title: 'You are already logged in.',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      navigate('/taskmaster');
    }
    // eslint-disable-next-line
  }, [navigate]);
  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/;

    if (!name.trim()) return 'First name is required.';
    if (!email.trim()) return 'Email is required.';
    if (!emailRegex.test(email)) return 'Enter a valid email address.';
    if (!password.trim()) return 'Password is required.';
    if (!passwordRegex.test(password))
      return 'Password must be at least 8 characters, include a number and a special character.';
    if (password !== confirmPassword) return 'Passwords do not match.';

    return null; 
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      toast({
        title: 'Error',
        description: errorMsg,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(
        'https://taskmaster-be-production.up.railway.app/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        toast({
          title: 'Error',
          description: data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
        throw new Error(data.message);
      }
      toast({
        title: 'Success',
        description: data.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const theme = useAuthTheme();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const { name, email, password, confirmPassword } = formData;

  //     if (!name || !email || !password || !confirmPassword) {
  //       throw new Error('Please fill in all fields');
  //     }

  //     if (password !== confirmPassword) {
  //       throw new Error('Passwords do not match');
  //     }

  //     // Simulate API call delay
  //     await new Promise(resolve => setTimeout(resolve, 1000));

  //     toast({
  //       title: 'Registration successful',
  //       description: 'Welcome to TaskMaster!',
  //       status: 'success',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     navigate('/login');
  //   } catch (error) {
  //     toast({
  //       title: 'Error',
  //       description: error.message || 'An error occurred',
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
                  src={RegisterImg}
                  alt="Register"
                  boxSize="100px"
                  mx="auto"
                  mb={6}
                />
                <Heading {...theme.headingStyles}>Create Account</Heading>
                <Text {...theme.subheadingStyles}>
                  Get started with TaskMaster
                </Text>
              </Box>

              <VStack as="form" spacing={4} onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel {...theme.labelStyles}>First name</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    {...theme.inputStyles}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel {...theme.labelStyles}>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    {...theme.inputStyles}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel {...theme.labelStyles}>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    {...theme.inputStyles}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel {...theme.labelStyles}>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    {...theme.inputStyles}
                  />
                </FormControl>

                <Button
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Creating account..."
                  {...theme.buttonStyles}
                  mt={6}
                >
                  Create Account
                </Button>

                <Text color={theme.textColor} fontSize="sm" textAlign="center">
                  Already have an account?{' '}
                  <ChakraLink as={RouterLink} to="/login" {...theme.linkStyles}>
                    Sign in
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

export default RegisterPage;
