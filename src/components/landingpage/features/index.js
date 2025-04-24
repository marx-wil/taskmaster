'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ScrollAnimation from '../../scrollanim/ScrollAnimation';
import {
  HiViewBoards,
  HiClipboardCheck,
  HiUserGroup,
  HiChartPie,
  HiClock,
} from 'react-icons/hi';
const Card = ({ heading, description, icon, href }) => {
  const cardBg = useColorModeValue(
    'linear-gradient(135deg, #F5F7FA 0%, #E4E9F0 100%)',
    'linear-gradient(135deg, #161B22 0%, #1C1F26 100%)'
  );
  const cardText = useColorModeValue('#1E1E1E', '#E6EDF3');
  const cardSubText = useColorModeValue('#4B5563', '#8B949E');
  const borderColor = useColorModeValue('#E5E7EB', '#30363D');

  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      p={5}
      bg={cardBg}
      borderColor={borderColor}
      boxShadow="md"
      _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
    >
      <Stack align={'start'} spacing={3}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={useColorModeValue('#7C3AED', '#A970FF')}
          color={useColorModeValue('#ffffff', '#ffffff')}
        >
          {icon}
        </Flex>
        <Box>
          <Heading size="md" >
            <Text color={cardText} className='poppins-bold'>
            {heading}</Text>
          </Heading>
          <Text mt={1} fontSize={'sm'} color={cardSubText} className='poppins-regular'>
            {description}
          </Text>
        </Box>
        <Button
          variant={'link'}
          color={useColorModeValue('#7C3AED', '#A970FF')}
          _hover={{ color: useColorModeValue('#6D28D9', '#6E40C9') }}
          size={'sm'}
          className='poppins-semibold'
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function LandingFeatures() {
  const bg = useColorModeValue('#FFFFFF', '#0D1117');
  const text = useColorModeValue('#1E1E1E', '#E6EDF3');
  const subtext = useColorModeValue('#4B5563', '#8B949E');
  const blobBg = useColorModeValue(
    'rgba(124, 58, 237, 0.15)',
    'rgba(169, 112, 255, 0.1)'
  );
  const blobRef = useRef();

  useEffect(() => {
    const pulse = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: 'power1.inOut' },
    });
    pulse
      .to(blobRef.current, {
        scale: 1.1,
        duration: 2,
      })
      .to(blobRef.current, {
        scale: 0.95,
        duration: 2,
      });
  }, []);
  const features = [
    {
      heading: 'Project Management',
      description:
        'Stay on top of deadlines, track your progress, and manage team deliverables with precision.',
      icon: <Icon as={HiViewBoards} w={8} h={8} />,
    },
    {
      heading: 'Task Management',
      description:
        'Prioritize and delegate tasks, set reminders, and collaborate effectively with your team.',
      icon: <Icon as={HiClipboardCheck} w={8} h={8} />,
    },
    {
      heading: 'Team Collaboration',
      description:
        'Bring your team together in one place. Share updates, assign roles, and streamline communication.',
      icon: <Icon as={HiUserGroup} w={8} h={8} />,
    },
    {
      heading: 'Reporting and Analytics',
      description:
        'Track progress, analyze performance, and gain insights to make informed decisions.',
      icon: <Icon as={HiChartPie} w={8} h={8} />,
    },
    {
      heading: 'Time Tracking',
      description:
        'Efficiently track your work hours, manage overtime, and optimize productivity.',
      icon: <Icon as={HiClock} w={8} h={8} />,
    },
  ];
  return (
    <Container maxW={'7xl'} px={{ base: 4, md: 8, lg: 12 }} py={10}>
      <Box
        position="relative"
        p={6}
        py={16}
        bg={bg}
        boxShadow={'lg'}
        rounded={'lg'}
        overflow="hidden"
      >
        {/* Background Blob */}
        <Box
          ref={blobRef}
          position="absolute"
          top="-100px"
          left="-100px"
          w="500px"
          h="500px"
          bg={blobBg}
          borderRadius="50%"
          filter="blur(120px)"
          zIndex={0}
        />

        <Box position="relative" zIndex={1}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <ScrollAnimation>
              <Text
                as={'Text'}
                fontSize={{ base: '2xl', sm: '4xl' }}
                color={text}
                className="poppins-bold"
              >
                Organize. Focus. Deliver.
              </Text>
            </ScrollAnimation>
            <ScrollAnimation>
              <Text
                color={subtext}
                fontSize={{ base: 'sm', sm: 'lg' }}
                className="poppins-regular"
              >
                Simple, intuitive tools designed to help you and your team stay
                focused, work smarter, and accomplish more—without the clutter
                or complexity.
              </Text>
            </ScrollAnimation>
          </Stack>

          <Container maxW={'6xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={8} justify="center">
              {features.map((feature, key) => (
                <ScrollAnimation key={key}>
                  <Card
                    heading={feature.heading}
                    icon={feature.icon}
                    description={feature.description}
                    href={'#'}
                  />
                </ScrollAnimation>
              ))}
            </Flex>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}
