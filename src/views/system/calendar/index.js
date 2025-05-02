import React, { useState } from 'react';
import {
  Box,
  Flex,
  Select,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
  Badge,
  HStack,
  Card,
  CardBody,
  CardHeader,
  Heading,
  useColorModeValue,
  IconButton,
  Grid,
  useToast,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight, FaEdit, FaTrash } from 'react-icons/fa';
import './calendar.css';

const defaultTasks = [
  {
    id: 1,
    title: 'Complete Project Proposal',
    start: '2025-04-20',
    end: '2025-04-20',
    priority: 'high',
    status: 'in-progress',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: '2025-04-22',
    end: '2025-04-22',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 3,
    title: 'Client Presentation',
    start: '2025-04-25',
    end: '2025-04-25',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 4,
    title: 'Sprint Planning',
    start: '2025-05-01',
    end: '2025-05-01',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 5,
    title: 'Code Review',
    start: '2025-05-10',
    end: '2025-05-10',
    priority: 'high',
    status: 'in-progress',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 6,
    title: 'Product Launch',
    start: '2025-06-15',
    end: '2025-06-15',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 7,
    title: 'Team Building',
    start: '2025-06-20',
    end: '2025-06-20',
    priority: 'low',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 8,
    title: 'Quarterly Review',
    start: '2025-07-05',
    end: '2025-07-05',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 9,
    title: 'Feature Development',
    start: '2025-07-15',
    end: '2025-07-15',
    priority: 'medium',
    status: 'in-progress',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 10,
    title: 'System Update',
    start: '2025-08-01',
    end: '2025-08-01',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 11,
    title: 'Documentation Review',
    start: '2025-08-10',
    end: '2025-08-10',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 12,
    title: 'Annual Conference',
    start: '2025-09-15',
    end: '2025-09-15',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 13,
    title: 'Performance Review',
    start: '2025-09-20',
    end: '2025-09-20',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 14,
    title: 'Product Enhancement',
    start: '2025-10-05',
    end: '2025-10-05',
    priority: 'high',
    status: 'in-progress',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 15,
    title: 'Team Workshop',
    start: '2025-10-15',
    end: '2025-10-15',
    priority: 'low',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 16,
    title: 'Year-end Planning',
    start: '2025-11-01',
    end: '2025-11-01',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 17,
    title: 'System Maintenance',
    start: '2025-11-10',
    end: '2025-11-10',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
  {
    id: 18,
    title: 'Holiday Party',
    start: '2025-12-15',
    end: '2025-12-15',
    priority: 'low',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe',
  },
  {
    id: 19,
    title: 'Year-end Review',
    start: '2025-12-20',
    end: '2025-12-20',
    priority: 'high',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith',
  },
];

const Calendar = ({
  tasks = defaultTasks,
  onEditTask,
  onDeleteTask,
  currentUser = 'John Doe',
}) => {
  const [filter, setFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const dateBgHover = useColorModeValue('purple.100', '#1B3BBB');
  const navButtonBg = useColorModeValue('purple.500', '#7551FF');
  const navButtonHoverBg = useColorModeValue('purple.600', '#1B3BBB');
  const headerColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', '#111C44');
  const contentTextColor = useColorModeValue('gray.800', 'white');
  const dayColor = useColorModeValue('gray.700', 'white');
  const todayBg = useColorModeValue('purple.50', 'whiteAlpha.200');
  const calendarBorderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const selectBg = useColorModeValue('white', '#111C44');
  const selectBorderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const selectHoverBorderColor = useColorModeValue(
    'gray.300',
    'whiteAlpha.400'
  );

  // Get current date
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Generate an array of days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const currentDay = currentDate.getDate();

  // Create array for empty spaces before first day
  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null);
  }
  // Add the actual days
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear(prevYear => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear(prevYear => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  const handleTaskClick = (event, task) => {
    event.stopPropagation(); // Prevent triggering the day click
    setSelectedTask(task);
    onOpen();
  };

  const handleEditTask = () => {
    if (onEditTask) {
      onEditTask(selectedTask);
    }
    onClose();
  };

  const handleDeleteTask = () => {
    if (onDeleteTask) {
      onDeleteTask(selectedTask.id);
      toast({
        title: 'Task deleted',
        status: 'success',
        duration: 2000,
      });
    }
    onClose();
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => {
      if (filter === 'all') return true;
      if (filter === 'my-tasks') return task.assignee === currentUser;
      return task.project === filter;
    });
  };

  const getEventsByDate = day => {
    if (!day) return [];
    const date = new Date(currentYear, currentMonth, day);
    return getFilteredTasks().filter(task => {
      const taskDate = new Date(task.start);
      return (
        taskDate.getDate() === date.getDate() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const getStatusColor = status => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'green.500';
      case 'in-progress':
        return 'blue.500';
      case 'pending':
        return 'orange.500';
      default:
        return 'gray.500';
    }
  };

  const getEventColor = priority => {
    switch (priority) {
      case 'high':
        return '#FF4D4D';
      case 'medium':
        return '#FFB74D';
      case 'low':
        return '#4CAF50';
      default:
        return '#7551FF';
    }
  };

  const projects = [...new Set(tasks.map(task => task.project))];

  const TaskDisplay = ({ event }) => {
    const isXs = useBreakpointValue({ base: true, sm: false });
    const isSm = useBreakpointValue({ base: false, sm: true, md: false });

    if (isXs) {
      return (
        <Box
          w="8px"
          h="8px"
          borderRadius="full"
          bg={getEventColor(event.priority)}
          mx="auto"
          cursor="pointer"
          onClick={e => handleTaskClick(e, event)}
        />
      );
    }

    return (
      <Box
        bg={getEventColor(event.priority)}
        color="white"
        fontSize={{ base: '2xs', md: 'xs' }}
        p={{ base: '1px 2px', md: 1 }}
        borderRadius="md"
        mx={{ base: 0.5, md: 2 }}
        onClick={e => handleTaskClick(e, event)}
        cursor="pointer"
        _hover={{
          opacity: 0.8,
          transform: 'scale(1.02)',
        }}
        transition="all 0.2s"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {isSm ? event.title.slice(0, 10) + '...' : event.title}
      </Box>
    );
  };

  return (
    <Box p={{ base: 2, md: 4 }} maxW="1200px" mx="auto">
      <Card
        bg={cardBg}
        boxShadow="lg"
        borderRadius="20px"
        borderWidth="1px"
        borderColor={calendarBorderColor}
      >
        <CardHeader>
          <VStack spacing={4} w="100%">
            <Flex
              justify="space-between"
              alignItems="center"
              w="100%"
              flexDirection={{ base: 'column', md: 'row' }}
              gap={4}
            >
              <Flex gap={2}>
                <IconButton
                  icon={<FaAngleLeft />}
                  onClick={goToPreviousMonth}
                  bg={navButtonBg}
                  color="white"
                  _hover={{ bg: navButtonHoverBg }}
                  size={{ base: 'md', md: 'lg' }}
                />
                <IconButton
                  icon={<FaAngleRight />}
                  onClick={goToNextMonth}
                  bg={navButtonBg}
                  color="white"
                  _hover={{ bg: navButtonHoverBg }}
                  size={{ base: 'md', md: 'lg' }}
                />
              </Flex>
              <Heading
                size={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                color={headerColor}
                textAlign={{ base: 'center', md: 'left' }}
              >
                {new Date(currentYear, currentMonth).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </Heading>
              <Select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                w={{ base: '100%', md: '200px' }}
                bg={selectBg}
                color={contentTextColor}
                borderColor={selectBorderColor}
                _hover={{ borderColor: selectHoverBorderColor }}
                size={{ base: 'md', md: 'lg' }}
              >
                <option value="all">All Tasks</option>
                <option value="my-tasks">My Tasks</option>
                {projects.map(project => (
                  <option key={project} value={project}>
                    {project}
                  </option>
                ))}
              </Select>
            </Flex>
          </VStack>
        </CardHeader>

        <CardBody pt={8}>
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={{ base: 1, sm: 2, md: 4, lg: 6 }}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <Heading
                key={day}
                size={{ base: 'xs', md: 'sm' }}
                fontWeight="bold"
                textAlign="center"
                color={headerColor}
                mb={4}
              >
                {day}
              </Heading>
            ))}
            {daysArray.map((day, index) => (
              <Box
                key={index}
                textAlign="center"
                bg={
                  currentMonth === currentDate.getMonth() && day === currentDay
                    ? todayBg
                    : 'transparent'
                }
                color={dayColor}
                fontWeight="500"
                borderRadius="xl"
                py={{ base: 1, sm: 2, md: 4 }}
                px={{ base: 0, sm: 1, md: 2 }}
                position="relative"
                cursor={day ? 'pointer' : 'default'}
                transition="all 0.2s"
                _hover={{
                  bg: day ? dateBgHover : 'transparent',
                }}
                onClick={() =>
                  day &&
                  setSelectedDate(new Date(currentYear, currentMonth, day))
                }
                fontSize={{ base: 'sm', md: 'lg' }}
                minH={{ base: '40px', sm: '60px', md: '80px' }}
                display="flex"
                flexDirection="column"
              >
                <Text mb={{ base: 1, md: 2 }}>{day}</Text>
                {day && (
                  <VStack
                    spacing={{ base: 0.5, md: 1 }}
                    align="stretch"
                    flex="1"
                    mt={{ base: 0, md: 1 }}
                    maxH={{ base: '40px', sm: '60px', md: 'none' }}
                    overflow="hidden"
                  >
                    {getEventsByDate(day).map((event, i) => (
                      <TaskDisplay key={i} event={event} />
                    ))}
                  </VStack>
                )}
              </Box>
            ))}
          </Grid>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          bg={cardBg}
          borderColor={calendarBorderColor}
          borderWidth="1px"
        >
          <ModalHeader color={headerColor}>Task Details</ModalHeader>
          <ModalCloseButton color={headerColor} />
          <ModalBody pb={6}>
            {selectedTask && (
              <VStack align="stretch" spacing={4}>
                <Heading size="md" color={headerColor}>
                  {selectedTask.title}
                </Heading>
                <HStack spacing={2} wrap="wrap">
                  <Badge
                    px={3}
                    py={1}
                    borderRadius="md"
                    textTransform="uppercase"
                    bg={getEventColor(selectedTask.priority)}
                    color="white"
                  >
                    {selectedTask.priority} Priority
                  </Badge>
                  <Badge
                    px={3}
                    py={1}
                    borderRadius="md"
                    textTransform="uppercase"
                    bg={getStatusColor(selectedTask.status)}
                    color="white"
                  >
                    {selectedTask.status}
                  </Badge>
                  <Badge
                    px={3}
                    py={1}
                    borderRadius="md"
                    textTransform="uppercase"
                    bg={navButtonBg}
                    color="white"
                  >
                    {selectedTask.project}
                  </Badge>
                </HStack>
                <Box>
                  <Text color={contentTextColor} mb={1}>
                    <strong>Project:</strong> {selectedTask.project}
                  </Text>
                  <Text color={contentTextColor} mb={1}>
                    <strong>Assignee:</strong> {selectedTask.assignee}
                  </Text>
                  <Text color={contentTextColor}>
                    <strong>Due Date:</strong>{' '}
                    {new Date(selectedTask.start).toLocaleDateString()}
                  </Text>
                </Box>
                <Flex gap={3} mt={2}>
                  <Button
                    flex={1}
                    variant="outline"
                    color={contentTextColor}
                    borderColor="whiteAlpha.400"
                    _hover={{
                      bg: 'whiteAlpha.100',
                    }}
                    leftIcon={<FaEdit />}
                    onClick={handleEditTask}
                  >
                    Edit
                  </Button>
                  <Button
                    flex={1}
                    variant="outline"
                    color="red.400"
                    borderColor="red.400"
                    _hover={{
                      bg: 'red.400',
                      color: 'white',
                    }}
                    leftIcon={<FaTrash />}
                    onClick={handleDeleteTask}
                  >
                    Delete
                  </Button>
                  <Button
                    flex={1}
                    bg={navButtonBg}
                    color="white"
                    _hover={{ bg: navButtonHoverBg }}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </Flex>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Calendar;
