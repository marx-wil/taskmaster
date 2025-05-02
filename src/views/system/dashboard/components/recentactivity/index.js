import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from '@chakra-ui/react';
const ActivityItem = ({ activity }) => {
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');

  return (
    <Flex align="center" py={2}>
      <Avatar size="sm" name={activity.user} src={activity.avatar} mr={3} />
      <Box>
        <Text fontSize="sm" color={contentTextColor}>
          <Text as="span" fontWeight="bold">
            {activity.user}
          </Text>{' '}
          {activity.action}
        </Text>
        <Text fontSize="xs" color={contentTextColor} opacity="0.7">
          {activity.time}
        </Text>
      </Box>
    </Flex>
  );
};
const RecentActivity = () => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
  const userData = {
    recentActivity: [
      {
        id: 1,
        user: 'John Doe',
        action: 'created a new project',
        time: '2 hours ago',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        user: 'Jane Smith',
        action: 'updated the project',
        time: '1 hour ago',
        avatar: 'https://via.placeholder.com/150',
      },
    ],
  };
  return (
    <Card bg={cardBg} boxShadow="xl" mb={6}>
      <CardHeader>
        <Text
          size="md"
          fontFamily="Manrope"
          fontWeight="600"
          color={contentTextColor}
        >
          Recent Activity
        </Text>
      </CardHeader>
      <CardBody>
        <VStack align="stretch" spacing={3}>
          {userData.recentActivity.map(activity => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default RecentActivity;
