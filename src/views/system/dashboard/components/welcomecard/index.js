import React from 'react';
import { Text, useColorModeValue, Card, CardBody } from '@chakra-ui/react';
const WelcomeCard = ({ name }) => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');

  return (
    <Card bg={cardBg} boxShadow="lg" mb={6}>
      <CardBody>
        <Text fontSize="2xl" fontWeight="bold" color={contentTextColor}>
          Good Morning, {name} 👋
        </Text>
        <Text
          fontSize="md"
          color={contentTextColor}
          opacity="0.7"
          mt={2}
          className="poppins-regular"
        >
          Here's what's happening with your projects today
        </Text>
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
