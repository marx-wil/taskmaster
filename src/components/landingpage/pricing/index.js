'use client';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import ScrollAnimation from '../../scrollanim/ScrollAnimation';
function PriceWrapper({ children, isPopular }) {
  const popularBorderColor = useColorModeValue('#7c3aed', '#a970ff');
  const defulatBorderColor = useColorModeValue('gray.200', 'gray.500');
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={isPopular ? popularBorderColor : defulatBorderColor}
      borderRadius={'xl'}
      flex="1" // <-- This makes all PriceWrappers equal width
      display="flex"
      flexDirection="column"
    >
      {children}
    </Box>
  );
}

export default function PricingSection() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <ScrollAnimation>
          <Heading as="h1" fontSize="4xl">
            <Text className="poppins-bold">Plans that fit your need</Text>
          </Heading>
        </ScrollAnimation>
        <ScrollAnimation>
          <Text fontSize="lg" color={'gray.500'} className="poppins-regular">
            TaskMaster is 100% free to use — no hidden charges, ever. If you
            need
            <br />
            more control or a workspace for your team, upgrade anytime.
          </Text>
        </ScrollAnimation>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 8, lg: 20 }}
        py={10}
        px={{ base: 4, md: 10, lg: 28 }}
      >
        <ScrollAnimation>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" className="poppins-regular">
                Hobby
              </Text>
              <HStack justifyContent="center">
                <Text
                  fontSize="3xl"
                  fontWeight="600"
                  className="poppins-regular"
                >
                  $
                </Text>
                <Text
                  fontSize="5xl"
                  fontWeight="700"
                  className="poppins-regular"
                >
                  0
                </Text>
                <Text
                  fontSize="3xl"
                  color="gray.500"
                  className="poppins-regular"
                >
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Create and manage tasks.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Status tracking (To Do, In Progress, Done)
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Calendar view
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Personal dashboard overview
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Basic account settings
                  </Text>
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  w="full"
                  border={'2px'}
                  className={'poppins-regular'}
                  borderColor={useColorModeValue('#7C3AED', '#A970FF')}
                  color={useColorModeValue('#7C3AED', '#A970FF')}
                >
                  Start Free
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        </ScrollAnimation>

        <ScrollAnimation>
          <PriceWrapper isPopular>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue('#7C3AED', '#A970FF')}
                  px={3}
                  py={1}
                  color={useColorModeValue('white')}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                  className="poppins-regular"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text
                  fontWeight="500"
                  fontSize="2xl"
                  className="poppins-regular"
                >
                  Professional
                </Text>
                <HStack justifyContent="center">
                  <Text
                    fontSize="3xl"
                    fontWeight="600"
                    className="poppins-regular"
                  >
                    $
                  </Text>
                  <Text
                    fontSize="5xl"
                    fontWeight="700"
                    className="poppins-regular"
                  >
                    5
                  </Text>
                  <Text
                    fontSize="3xl"
                    color="gray.500"
                    className="poppins-regular"
                  >
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text display={'inline'} className="poppins-regular">
                      Everything in Hobby.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text display={'inline'} className="poppins-regular">
                      Multiple dashboard views
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text display={'inline'} className="poppins-regular">
                      Custom status labels.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text display={'inline'} className="poppins-regular">
                      Task deadline notifications (manual reminders)
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text display={'inline'} className="poppins-regular">
                      Export tasks to CSV
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text display={'inline'} className="poppins-regular">
                      Profile customization
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text display={'inline'} className="poppins-regular">
                      Priority filter presets
                    </Text>
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    bg={useColorModeValue('#7C3AED', '#A970FF')}
                    color={useColorModeValue('white')}
                    border={'2px'}
                    borderColor={useColorModeValue('#E5E7EB', '#30363D')}
                    _hover={{
                      bg: useColorModeValue('#6d28d9', '#6e40c9'),
                    }}
                    className="poppins-regular"
                  >
                    Start Professional
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        </ScrollAnimation>

        <ScrollAnimation>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" className="poppins-regular">
                Organizational
              </Text>
              <HStack justifyContent="center">
                <Text
                  fontSize="3xl"
                  fontWeight="600"
                  className="poppins-regular"
                >
                  $
                </Text>
                <Text
                  fontSize="5xl"
                  fontWeight="700"
                  className="poppins-regular"
                >
                  12
                </Text>
                <Text
                  fontSize="3xl"
                  color="gray.500"
                  className="poppins-regular"
                >
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Everything in Growth and Hobby
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Assign tasks to teammates
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Shared calendar
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Basic activity logs
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  <Text display={'inline'} className="poppins-regular">
                    Early access to upcoming features
                  </Text>
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  w="full"
                  border={'2px'}
                  className={'poppins-regular'}
                  borderColor={useColorModeValue('#7C3AED', '#A970FF')}
                  color={useColorModeValue('#7C3AED', '#A970FF')}
                >
                  Start Scale
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        </ScrollAnimation>
      </Stack>
    </Box>
  );
}
