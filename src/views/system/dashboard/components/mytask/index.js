import React from 'react';
import {
  Flex,
  Text,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Badge,
  VStack,
} from '@chakra-ui/react';
const MyTask = () => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
  const userData = {
    name: 'John Doe',
    myTasks: [
      {
        id: 1,
        title: 'Review design mockups',
        dueDate: 'Today',
        priority: 'high',
      },
      {
        id: 2,
        title: 'Update documentation',
        dueDate: 'Tomorrow',
        priority: 'medium',
      },
    ],
    upcomingDeadlines: [
      {
        id: 3,
        title: 'Client presentation',
        dueDate: '2 days',
        priority: 'high',
      },
      { id: 4, title: 'Team meeting', dueDate: '3 days', priority: 'medium' },
    ],
    activeProjects: 5,
    recentActivity: [
      {
        id: 1,
        user: 'Jane Smith',
        action: 'completed task "Update homepage"',
        time: '2 hours ago',
        avatar: 'https://bit.ly/ryan-florence',
      },
      {
        id: 2,
        user: 'Mike Johnson',
        action: 'added a new task to Marketing Campaign',
        time: '4 hours ago',
        avatar: 'https://bit.ly/dan-abramov',
      },
    ],
  };
  return (
    <Card bg={cardBg} boxShadow="lg">
      <CardHeader>
        <Text
          size="md"
          fontWeight="600"
          color={contentTextColor}
          className="poppins-bold"
        >
          My Tasks
        </Text>
      </CardHeader>
      <CardBody>
        <VStack align="stretch" spacing={4}>
          {userData.myTasks.map(task => (
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

export default MyTask;
