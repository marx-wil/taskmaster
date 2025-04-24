'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Grid,
} from '@chakra-ui/react';
import ScrollAnimation from '../../scrollanim/ScrollAnimation';

const Testimonial = props => {
  const { children } = props;
  return <Box>{children}</Box>;
};

const TestimonialContent = props => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue('#F5F7FA', '#161B22')}
      boxShadow={'lg'}
      p={8}
      rounded={'2xl'}
      align={'center'}
      pos={'relative'}
      spacing={6}
      transition="transform 0.3s ease"
      _hover={{ transform: 'scale(1.05)' }}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('#F5F7FA', '#161B22'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Box
        pos="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bgGradient={useColorModeValue(
          'linear(to-br, #ffffff, #E5E7EB)',
          'linear(to-br, #0D1117, #30363D)'
        )}
        opacity={0.1}
        zIndex={-1}
        rounded="2xl"
      />
      {children}
    </Stack>
  );
};

const TestimonialHeading = props => {
  const { children } = props;
  const textColor = useColorModeValue('#1E1E1E', '#E6EDF3');
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      <Text className="poppins-bold" color={textColor} textAlign="center">
        {children}
      </Text>
    </Heading>
  );
};

const TestimonialText = props => {
  const { children } = props;
  const textColor = useColorModeValue('#4B5563', '#8B949E');
  return (
    <Text
      textAlign={'center'}
      color={textColor}
      fontSize={'sm'}
      className="poppins-regular"
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  const color = useColorModeValue('#1E1E1E', '#E6EDF3');
  const secondaryColor = useColorModeValue('#4B5563', '#8B949E');
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar
        src={src}
        mb={2}
        boxShadow="md"
        borderColor={useColorModeValue('#7C3AED', '#A970FF')}
        borderWidth={2}
      />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} className="poppins-bold" color={color}>
          {name}
        </Text>
        <Text
          fontSize={'sm'}
          color={secondaryColor}
          className="poppins-regular"
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  const reviews = [
    {
      name: 'Wilmarx John Cayabyab',
      title: 'CTO @ SysGo Solutions',
      contentTitle: 'Lorem ipsum dolor.',
      content:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://avatars.githubusercontent.com/u/50767502?v=4',
    },
    {
      name: 'Jane Cooper',
      title: 'CEO at ABC Corporation',
      contentTitle: 'Cupidatat non proident.',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg?t=st=1745460931~exp=1745464531~hmac=6999b9c40ccfddce5fcac259ce1afafb9dae0a18ba813ea8d521f64a403e056d&w=740',
    },
    {
      name: 'Oppa Gangnam',
      title: 'ABC @ XYZ Corporation',
      contentTitle: 'Excepteur sint occaecat.',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      image:
        'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1745460922~exp=1745464522~hmac=f911ee1733540ffebd428954dc7a356abe47fb7c0406921548d881d501939f8b&w=740',
    },
  ];
  const accentColor = useColorModeValue('#7C3AED', '#A970FF');
  const blobBg = useColorModeValue(
    'rgba(124, 58, 237, 0.15)',
    'rgba(169, 112, 255, 0.1)'
  );
  return (
    <Box p={{ base: 6, md: 10 }}>
      <Container
        bg={useColorModeValue('#ffffff', '#0D1117')}
        maxW={'7xl'}
        py={16}
        as={Stack}
        spacing={12}
        borderRadius="2xl"
        px={6}
        position="relative"
        zIndex={-1}
      >
        <Box
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
        <Stack spacing={4} align={'center'}>
          <ScrollAnimation>
            <Heading>
              <Text
                className="poppins-semibold"
                color={useColorModeValue('#1E1E1E', '#E6EDF3')}
              >
                Loved by People Who Get Things&nbsp;
                <Text
                  as={'span'}
                  className="poppins-semibold"
                  position={'relative'}
                  zIndex={1}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: accentColor,
                    zIndex: -1,
                  }}
                >
                  Done.
                </Text>
              </Text>
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation>
            <Text
              className="poppins-regular"
              color={useColorModeValue('#4B5563', '#8B949E')}
            >
              Here’s what our users are saying about TaskMaster.
            </Text>
          </ScrollAnimation>
        </Stack>
        <Grid
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 10, md: 6, lg: 10 }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
        >
          {reviews.map((review, index) => (
            <ScrollAnimation key={index}>
              <Testimonial key={index}>
                <TestimonialContent>
                  <TestimonialHeading>{review.contentTitle}</TestimonialHeading>
                  <TestimonialText>{review.content}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={review.image}
                  name={review.name}
                  title={review.title}
                />
              </Testimonial>
            </ScrollAnimation>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
