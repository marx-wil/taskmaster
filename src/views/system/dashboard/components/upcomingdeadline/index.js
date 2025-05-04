import React from 'react';
import {
  Flex,
  Text,
  VStack,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Badge,
} from '@chakra-ui/react';
const UpcomingDeadline = () => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
  const userData = {
    name: 'John Doe',
    upcomingDeadlines: [
      {
        id: 3,
        title: 'Client presentation',
        dueDate: '2 days',
        priority: 'high',
      },
      { id: 4, title: 'Team meeting', dueDate: '3 days', priority: 'medium' },
    ],
  };
  return (
    <Card bg={cardBg} boxShadow="lg">
      <CardHeader>
        <Text
          size="md"
          className="poppins-bold"
          fontWeight="600"
          color={contentTextColor}
        >
          Upcoming Deadlines
        </Text>
      </CardHeader>
      <CardBody>
        <VStack align="stretch" spacing={4}>
          {userData.upcomingDeadlines.map(task => (
            <Flex key={task.id} justify="space-between" align="center">
              <Text
                fontSize="sm"
                color={contentTextColor}
                className="poppins-regular"
              >
                {task.title}
              </Text>
              <Badge
                className="poppins-regular"
                colorScheme={
                  task.priority === 'high'
                    ? 'red'
                    : task.priority === 'medium'
                    ? 'yellow'
                    : 'green'
                }
                fontSize="xs"
              >
                {task.dueDate}
              </Badge>
            </Flex>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default UpcomingDeadline;
