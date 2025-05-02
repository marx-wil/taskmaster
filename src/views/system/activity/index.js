import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Flex,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Avatar,
  Badge,
  Button,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const ActivityItem = ({ activity }) => {
  const getActivityIcon = type => {
    switch (type) {
      case 'task':
        return '📝';
      case 'project':
        return '📁';
      case 'comment':
        return '💬';
      default:
        return '⚡';
    }
  };

  return (
    <Flex
      p={4}
      border={'1px solid'}
      borderColor={useColorModeValue('#E5E7EB', '#30363D')}
      rounded={'lg'}
      mb={4}
    >
      <Box mr={4}>
        <Text fontSize="2xl">{getActivityIcon(activity.type)}</Text>
      </Box>
      <Box flex={1}>
        <Flex align="center" mb={1}>
          <Avatar size="sm" name={activity.user} mr={2} />
          <Text fontWeight="medium">{activity.user}</Text>
          <Text color="gray.500" ml={2}>
            {activity.action}
          </Text>
        </Flex>
        <Text color="gray.600">{activity.description}</Text>
        <Flex mt={2} gap={2}>
          <Badge colorScheme="blue">{activity.project}</Badge>
          <Text color="gray.500" fontSize="sm">
            {activity.time}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

const Activity = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mock data - replace with actual data from your backend
  const activities = [
    {
      id: 1,
      type: 'task',
      user: 'John Doe',
      action: 'created',
      description: 'Task "Design Login Page"',
      project: 'Marketing Campaign',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'comment',
      user: 'Jane Smith',
      action: 'commented',
      description: 'on "Update Documentation"',
      project: 'Website Redesign',
      time: '4 hours ago',
    },
    {
      id: 3,
      type: 'task',
      user: 'John Doe',
      action: 'completed',
      description: 'Task "Implement User Authentication"',
      project: 'Security Updates',
      time: '5 hours ago',
    },
    {
      id: 4,
      type: 'project',
      user: 'Jane Smith',
      action: 'created',
      description: 'Project "Mobile App Development"',
      project: 'Mobile App',
      time: '1 day ago',
    },
    {
      id: 5,
      type: 'comment',
      user: 'John Doe',
      action: 'replied',
      description: 'to "API Integration Discussion"',
      project: 'Backend Development',
      time: '1 day ago',
    },
    {
      id: 6,
      type: 'task',
      user: 'Jane Smith',
      action: 'updated',
      description: 'Task "Optimize Database Queries"',
      project: 'Performance Improvement',
      time: '2 days ago',
    },
    {
      id: 7,
      type: 'project',
      user: 'John Doe',
      action: 'updated',
      description: 'Project status to "In Progress"',
      project: 'Website Redesign',
      time: '2 days ago',
    },
    {
      id: 8,
      type: 'task',
      user: 'Jane Smith',
      action: 'assigned',
      description: 'Task "Create User Guide" to Team',
      project: 'Documentation',
      time: '3 days ago',
    },
    {
      id: 9,
      type: 'comment',
      user: 'John Doe',
      action: 'commented',
      description: 'on "Feature Requirements"',
      project: 'Mobile App',
      time: '3 days ago',
    },
    {
      id: 10,
      type: 'task',
      user: 'Jane Smith',
      action: 'completed',
      description: 'Task "Setup CI/CD Pipeline"',
      project: 'DevOps',
      time: '4 days ago',
    },
    {
      id: 11,
      type: 'project',
      user: 'John Doe',
      action: 'created',
      description: 'Project "Data Analytics Dashboard"',
      project: 'Analytics',
      time: '4 days ago',
    },
    {
      id: 12,
      type: 'task',
      user: 'Jane Smith',
      action: 'updated',
      description: 'Task "Implement Error Handling"',
      project: 'Backend Development',
      time: '5 days ago',
    },
    {
      id: 13,
      type: 'comment',
      user: 'John Doe',
      action: 'replied',
      description: 'to "UI/UX Feedback"',
      project: 'Website Redesign',
      time: '5 days ago',
    },
    {
      id: 14,
      type: 'task',
      user: 'Jane Smith',
      action: 'created',
      description: 'Task "Setup Analytics Tracking"',
      project: 'Analytics',
      time: '6 days ago',
    },
    {
      id: 15,
      type: 'project',
      user: 'John Doe',
      action: 'updated',
      description: 'Project deadline extended',
      project: 'Mobile App',
      time: '6 days ago',
    },
    {
      id: 16,
      type: 'task',
      user: 'Jane Smith',
      action: 'assigned',
      description: 'Task "Security Audit" to Team',
      project: 'Security Updates',
      time: '1 week ago',
    },
    {
      id: 17,
      type: 'comment',
      user: 'John Doe',
      action: 'commented',
      description: 'on "Performance Metrics"',
      project: 'Performance Improvement',
      time: '1 week ago',
    },
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.project
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || activity.type === filter;
    const matchesUser = userFilter === 'all' || activity.user === userFilter;
    return matchesSearch && matchesFilter && matchesUser;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedActivities = filteredActivities.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box>
      <Flex gap={4} mb={6}>
        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search by project name..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </InputGroup>
        <Select
          maxW="200px"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All Activities</option>
          <option value="task">Tasks</option>
          <option value="project">Projects</option>
          <option value="comment">Comments</option>
        </Select>
        <Select
          maxW="200px"
          value={userFilter}
          onChange={e => setUserFilter(e.target.value)}
        >
          <option value="all">All Users</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
        </Select>
      </Flex>

      <VStack align="stretch" spacing={0}>
        {paginatedActivities.map(activity => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </VStack>

      {totalPages > 1 && (
        <Flex justify="center" mt={6}>
          <HStack spacing={2}>
            <Button
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              isDisabled={currentPage === 1}
            >
              Previous
            </Button>
            <Text>
              Page {currentPage} of {totalPages}
            </Text>
            <Button
              size="sm"
              onClick={() =>
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
              }
              isDisabled={currentPage === totalPages}
            >
              Next
            </Button>
          </HStack>
        </Flex>
      )}
    </Box>
  );
};

export default Activity;
