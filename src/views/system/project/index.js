import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Grid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  VStack,
  Badge,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
  Divider,
  Avatar,
  AvatarGroup,
  Tooltip,
  Stack,
  InputGroup,
  InputLeftElement,
  IconButton,
  HStack,
  Checkbox,
  InputRightAddon,
} from '@chakra-ui/react';
import {
  FiSettings,
  FiUserPlus,
  FiPlus,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaPaperclip } from 'react-icons/fa';

const TaskList = ({ tasks, onTaskClick, droppableId, startIndex }) => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const textColor = useColorModeValue('#0B1437', '#ffffff');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  const isTaskDueOrOverdue = dueDate => {
    const today = new Date();
    const taskDueDate = new Date(dueDate);

    // Reset time portions to compare dates only
    today.setHours(0, 0, 0, 0);
    taskDueDate.setHours(0, 0, 0, 0);

    // Convert to timestamps for reliable comparison
    const todayTimestamp = today.getTime();
    const dueTimestamp = taskDueDate.getTime();

    return dueTimestamp < todayTimestamp;
  };

  const formatDueDate = dueDate => {
    const date = new Date(dueDate);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Droppable droppableId={droppableId} type="task">
      {provided => (
        <VStack
          ref={provided.innerRef}
          {...provided.droppableProps}
          spacing={4}
          align="stretch"
          minH="50px"
        >
          {tasks.map((task, index) => {
            const isDueOrOverdue = isTaskDueOrOverdue(task.dueDate);

            return (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={startIndex + index}
              >
                {(provided, snapshot) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    boxShadow="sm"
                    p="4"
                    borderRadius="lg"
                    bg={cardBg}
                    mb="4"
                    border="1px solid"
                    borderColor={
                      isDueOrOverdue ? 'red.500' : 'rgba(128,128,128,.2)'
                    }
                    cursor="pointer"
                    onClick={() => onTaskClick(task)}
                    transition="all 0.2s"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                      bg: hoverBg,
                    }}
                    style={{
                      ...provided.draggableProps.style,
                      opacity: snapshot.isDragging ? 0.8 : 1,
                    }}
                  >
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      gap={4}
                    >
                      <Box flex="1">
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          color={textColor}
                          mb={2}
                          noOfLines={1}
                        >
                          {task.title}
                        </Text>
                        <Flex gap={2} alignItems="center">
                          <Badge
                            colorScheme={
                              task.priority === 'high'
                                ? 'red'
                                : task.priority === 'medium'
                                ? 'yellow'
                                : 'green'
                            }
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="full"
                          >
                            {task.priority}
                          </Badge>
                          <Text
                            fontSize="xs"
                            color={
                              isDueOrOverdue ? 'red.500' : secondaryTextColor
                            }
                          >
                            Due {formatDueDate(task.dueDate)}
                          </Text>
                        </Flex>
                      </Box>
                      <Flex direction="column" align="center" minW="60px">
                        <Text fontSize="xs" color={secondaryTextColor} mb={1}>
                          Assignee
                        </Text>
                        <Avatar
                          size="sm"
                          name={task.assignee}
                          src="https://bit.ly/dan-abramov"
                        />
                      </Flex>
                    </Flex>
                  </Box>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </VStack>
      )}
    </Droppable>
  );
};

const Column = ({ title, tasks, onTaskClick, droppableId }) => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const inputBg = useColorModeValue('gray.50', 'gray.700');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 3;

  const handleTaskClick = useCallback(
    task => {
      onTaskClick(task);
    },
    [onTaskClick]
  );

  const filteredTasks = tasks.filter(
    task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const paginatedTasks = filteredTasks.slice(
    startIndex,
    startIndex + tasksPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, tasks.length]);

  return (
    <Card
      bg={cardBg}
      boxShadow="none"
      h="100%"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
    >
      <CardHeader pt="4" pb="2">
        <VStack spacing={3} align="stretch">
          <Flex justify="space-between" align="center">
            <Text
              size="md"
              fontFamily="Manrope"
              fontWeight="600"
              color={headerColor}
            >
              {title}
            </Text>
            <Badge
              colorScheme="gray"
              fontSize="xs"
              px={2}
              py={1}
              borderRadius="full"
            >
              {filteredTasks.length}
            </Badge>
          </Flex>
          <InputGroup size="sm">
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              bg={inputBg}
              border="none"
              borderRadius="md"
              _placeholder={{ color: 'gray.400' }}
              _focus={{ boxShadow: 'none', bg: inputBg }}
            />
          </InputGroup>
        </VStack>
      </CardHeader>
      <Divider borderColor={borderColor} />
      <CardBody py="4" px="4">
        <Stack spacing={4}>
          <TaskList
            tasks={paginatedTasks}
            onTaskClick={handleTaskClick}
            droppableId={droppableId}
            startIndex={startIndex}
          />

          {totalPages > 1 && (
            <HStack justify="center" spacing={2}>
              <IconButton
                size="sm"
                variant="ghost"
                icon={<Icon as={FiChevronLeft} />}
                isDisabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                color={headerColor}
                aria-label="Previous page"
              />
              <Text fontSize="sm" color={headerColor}>
                {currentPage} / {totalPages}
              </Text>
              <IconButton
                size="sm"
                variant="ghost"
                icon={<Icon as={FiChevronRight} />}
                isDisabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                color={headerColor}
                aria-label="Next page"
              />
            </HStack>
          )}

          <Button
            leftIcon={<Icon as={FiPlus} />}
            variant="ghost"
            size="sm"
            w="full"
            colorScheme="gray"
          >
            Add Task
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTask, setSelectedTask] = useState(null);
  const [project, setProject] = useState({
    id: 1,
    name: 'Marketing Campaign',
    members: [
      { name: 'John Doe', avatar: 'https://bit.ly/dan-abramov' },
      { name: 'Jane Smith', avatar: 'https://bit.ly/ryan-florence' },
      { name: 'Mike Johnson', avatar: 'https://bit.ly/kent-c-dodds' },
      { name: 'Sarah Wilson', avatar: 'https://bit.ly/sage-adebayo' },
    ],
    tasks: {
      todo: [
        {
          id: 1,
          title: 'Create social media posts',
          assignee: 'John Doe',
          priority: 'high',
          dueDate: '2025-04-22',
        },
        {
          id: 2,
          title: 'Design email template',
          assignee: 'Jane Smith',
          priority: 'medium',
          dueDate: '2025-04-25',
        },
        {
          id: 5,
          title: 'Research competitor campaigns',
          assignee: 'Mike Johnson',
          priority: 'high',
          dueDate: '2025-04-28',
        },
        {
          id: 6,
          title: 'Create content calendar',
          assignee: 'Sarah Wilson',
          priority: 'medium',
          dueDate: '2025-04-22',
        },
        {
          id: 7,
          title: 'Design promotional banners',
          assignee: 'Jane Smith',
          priority: 'low',
          dueDate: '2025-04-25',
        },
        {
          id: 8,
          title: 'Plan influencer outreach',
          assignee: 'John Doe',
          priority: 'high',
          dueDate: '2025-03-25',
        },
        {
          id: 9,
          title: 'Create video storyboards',
          assignee: 'Mike Johnson',
          priority: 'medium',
          dueDate: '2025-04-20',
        },
      ],
      inProgress: [
        {
          id: 3,
          title: 'Write blog post',
          assignee: 'John Doe',
          priority: 'low',
          dueDate: '2025-03-26',
        },
        {
          id: 10,
          title: 'Design landing page',
          assignee: 'Jane Smith',
          priority: 'high',
          dueDate: '2025-03-27',
        },
        {
          id: 11,
          title: 'Create email copy',
          assignee: 'Sarah Wilson',
          priority: 'medium',
          dueDate: '2025-04-06',
        },
        {
          id: 12,
          title: 'Set up tracking pixels',
          assignee: 'Mike Johnson',
          priority: 'high',
          dueDate: '2025-04-10',
        },
        {
          id: 13,
          title: 'Design social media graphics',
          assignee: 'Jane Smith',
          priority: 'medium',
          dueDate: '2025-04-14',
        },
        {
          id: 14,
          title: 'Write press release',
          assignee: 'John Doe',
          priority: 'high',
          dueDate: '2025-04-18',
        },
      ],
      done: [
        {
          id: 4,
          title: 'Set up analytics',
          assignee: 'Jane Smith',
          priority: 'high',
          dueDate: '2025-03-24',
        },
        {
          id: 15,
          title: 'Create campaign brief',
          assignee: 'Mike Johnson',
          priority: 'medium',
          dueDate: '2025-03-20',
        },
        {
          id: 16,
          title: 'Stakeholder interviews',
          assignee: 'Sarah Wilson',
          priority: 'high',
          dueDate: '2025-03-15',
        },
        {
          id: 17,
          title: 'Market research',
          assignee: 'John Doe',
          priority: 'medium',
          dueDate: '2025-03-18',
        },
        {
          id: 18,
          title: 'Competitor analysis',
          assignee: 'Jane Smith',
          priority: 'high',
          dueDate: '2025-03-22',
        },
        {
          id: 19,
          title: 'Define target audience',
          assignee: 'Mike Johnson',
          priority: 'low',
          dueDate: '2025-03-19',
        },
        {
          id: 20,
          title: 'Budget planning',
          assignee: 'Sarah Wilson',
          priority: 'high',
          dueDate: '2025-03-21',
        },
      ],
    },
  });
  const allComments = [
    {
      author: 'Zhack',
      text: 'Updated the task priority.',
      date: 'Apr 23, 10:15 AM',
    },
    {
      author: 'Maria',
      text: 'Please finalize the content before Monday.',
      date: 'Apr 21',
    },
    { author: 'Anna', text: 'I have reviewed the task.', date: 'Apr 20' },
    { author: 'Leo', text: 'Please double-check the figures.', date: 'Apr 19' },
    { author: 'Chris', text: 'Let’s schedule a sync meeting.', date: 'Apr 18' },
    { author: 'Jen', text: 'Minor edits added to the draft.', date: 'Apr 17' },
    {
      author: 'Ray',
      text: 'Task assigned to the correct person.',
      date: 'Apr 16',
    },
    { author: 'Kim', text: 'Timeline adjusted for urgency.', date: 'Apr 15' },
    { author: 'Alex', text: 'Initial structure completed.', date: 'Apr 14' },
    { author: 'Sam', text: 'Waiting for the design asset.', date: 'Apr 13' },
  ];
  const COMMENTS_PER_PAGE = 3;
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleTaskClick = task => {
    setSelectedTask(task);
    onOpen();
  };

  const onDragEnd = result => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // Same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Get the column names
    const sourceColumn = source.droppableId;
    const destColumn = destination.droppableId;

    // Get the full task lists
    const sourceTasks = [...project.tasks[sourceColumn]];
    const destTasks =
      sourceColumn === destColumn
        ? sourceTasks
        : [...project.tasks[destColumn]];

    // Find the task by its ID
    const taskId = parseInt(result.draggableId);
    const taskIndex = sourceTasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
      console.error('Task not found:', taskId);
      return;
    }

    // Remove the task from source
    const [movedTask] = sourceTasks.splice(taskIndex, 1);

    // Add the task to destination
    destTasks.splice(destination.index, 0, movedTask);

    // Update the project state
    setProject(prev => ({
      ...prev,
      tasks: {
        ...prev.tasks,
        [sourceColumn]: sourceTasks,
        ...(sourceColumn !== destColumn && { [destColumn]: destTasks }),
      },
    }));

    if (source.droppableId.startsWith('modal-')) {
      onClose();
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box p={6}>
        <Flex
          justify="space-between"
          align="center"
          mb={8}
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 4, lg: 0 }}
        >
          <Box>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color={contentTextColor}
              mb={2}
            >
              {project.name}
            </Text>
            <Flex align="center" gap={4}>
              <AvatarGroup size="sm" max={3}>
                {project.members.map((member, index) => (
                  <Tooltip key={index} label={member.name}>
                    <Avatar name={member.name} src={member.avatar} />
                  </Tooltip>
                ))}
              </AvatarGroup>
              <Text fontSize="sm" color="gray.500">
                {project.members.length} team members
              </Text>
            </Flex>
          </Box>
          <Flex
            gap={3}
            flexWrap="wrap"
            justify={{ base: 'center', lg: 'flex-start' }}
            w={{ base: '100%', lg: 'auto' }}
          >
            <Button
              leftIcon={<Icon as={FiUserPlus} />}
              variant="outline"
              borderColor={borderColor}
              _hover={{ bg: 'gray.50' }}
              colorScheme="gray"
              size={{ base: 'sm', md: 'md' }}
              flex={{ base: '1', sm: 'initial' }}
              minW={{ base: 'auto', sm: 'initial' }}
              px={{ base: 3, md: 4 }}
            >
              Invite
            </Button>
            <Button
              leftIcon={<Icon as={FiSettings} />}
              variant="outline"
              borderColor={borderColor}
              _hover={{ bg: 'gray.50' }}
              colorScheme="gray"
              size={{ base: 'sm', md: 'md' }}
              flex={{ base: '1', sm: 'initial' }}
              minW={{ base: 'auto', sm: 'initial' }}
              px={{ base: 3, md: 4 }}
            >
              Settings
            </Button>
          </Flex>
        </Flex>

        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(3, 1fr)',
          }}
          gap={8}
        >
          <Column
            title="To Do"
            tasks={project.tasks.todo}
            onTaskClick={handleTaskClick}
            droppableId="todo"
          />
          <Column
            title="In Progress"
            tasks={project.tasks.inProgress}
            onTaskClick={handleTaskClick}
            droppableId="inProgress"
          />
          <Column
            title="Done"
            tasks={project.tasks.done}
            onTaskClick={handleTaskClick}
            droppableId="done"
          />
        </Grid>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay backdropFilter="blur(4px)" />
          <ModalContent bg={cardBg} borderRadius="xl" boxShadow="2xl">
            <ModalHeader
              color={contentTextColor}
              borderBottom="1px solid"
              borderColor={borderColor}
            >
              Task Details
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody py={6}>
              {selectedTask && (
                <VStack spacing={6} align="stretch">
                  <FormControl>
                    <FormLabel color={contentTextColor}>Title</FormLabel>
                    <Input
                      value={selectedTask.title}
                      bg={cardBg}
                      borderColor={borderColor}
                      _focus={{
                        borderColor: '#7551FF',
                        boxShadow: '0 0 0 1px #7551FF',
                      }}
                      size="lg"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={contentTextColor}>Description</FormLabel>
                    <Textarea
                      bg={cardBg}
                      borderColor={borderColor}
                      _focus={{
                        borderColor: '#7551FF',
                        boxShadow: '0 0 0 1px #7551FF',
                      }}
                      size="lg"
                      minH="150px"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={contentTextColor}>Subtasks</FormLabel>
                    <Stack direction={'column'} spacing={4}>
                      <Checkbox>
                        <Text className="poppins-regular">
                          Lorem ipsum dolor
                        </Text>
                      </Checkbox>
                      <Checkbox>
                        <Text className="poppins-regular">
                          Sit amet consectetur
                        </Text>
                      </Checkbox>
                    </Stack>
                  </FormControl>
                  <FormControl>
                    <FormLabel color={contentTextColor}>Assignee</FormLabel>
                    <Select
                      bg={cardBg}
                      borderColor={borderColor}
                      _focus={{
                        borderColor: '#7551FF',
                        boxShadow: '0 0 0 1px #7551FF',
                      }}
                      size="lg"
                    >
                      {project.members.map(member => (
                        <option key={member.name} value={member.name}>
                          {member.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel color={contentTextColor}>Priority</FormLabel>
                    <Select
                      value={selectedTask.priority}
                      bg={cardBg}
                      borderColor={borderColor}
                      _focus={{
                        borderColor: '#7551FF',
                        boxShadow: '0 0 0 1px #7551FF',
                      }}
                      size="lg"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel color={contentTextColor}>Attachment</FormLabel>
                    <InputGroup size={'lg'}>
                      <Input
                        value={'Click to browse'}
                        bg={cardBg}
                        borderColor={borderColor}
                        _focus={{
                          borderColor: '#7551FF',
                          boxShadow: '0 0 0 1px #7551FF',
                        }}
                      />
                      <InputRightAddon bg={cardBg} borderColor={borderColor}>
                        <Icon as={FaPaperclip} />
                      </InputRightAddon>
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel color={contentTextColor}>Due date</FormLabel>
                    <Input
                      type={'date'}
                      value={selectedTask.dueDate}
                      bg={cardBg}
                      borderColor={borderColor}
                      _focus={{
                        borderColor: '#7551FF',
                        boxShadow: '0 0 0 1px #7551FF',
                      }}
                      size="lg"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={contentTextColor}>Tags</FormLabel>
                    <Input
                      bg={cardBg}
                      borderColor={borderColor}
                      _focus={{
                        borderColor: '#7551FF',
                        boxShadow: '0 0 0 1px #7551FF',
                      }}
                      size="lg"
                    />
                  </FormControl>
                  <FormControl mt={8}>
                    <FormLabel color={contentTextColor}>
                      Comments
                    </FormLabel>
                    <HStack spacing={4}>
                      <Input
                        placeholder="Write a comment..."
                        bg={cardBg}
                        borderColor={borderColor}
                        _focus={{
                          borderColor: '#7551FF',
                          boxShadow: '0 0 0 1px #7551FF',
                        }}
                        size="lg"
                        flex="1"
                      />
                      <Button colorScheme="purple" size="lg">
                        Send
                      </Button>
                    </HStack>
                  </FormControl>

                  <Box mt={8}>
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      mb={4}
                      color={contentTextColor}
                    >
                      Comments
                    </Text>
                    <VStack align="stretch" spacing={4}>
                      {allComments
                        .slice(
                          (currentPage - 1) * COMMENTS_PER_PAGE,
                          currentPage * COMMENTS_PER_PAGE
                        )
                        .map((comment, index) => (
                          <Box
                            key={index}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            bg={cardBg}
                          >
                            <Text fontWeight="bold" mb={1}>
                              🧑 {comment.author}
                            </Text>
                            <Text color="gray.600" mb={1}>
                              “{comment.text}”
                            </Text>
                            <Text fontSize="sm" color="gray.400">
                              – {comment.date}
                            </Text>
                          </Box>
                        ))}
                      <HStack justify="center" pt={4}>
                        <Button
                          size="sm"
                          onClick={() =>
                            setCurrentPage(prev => Math.max(prev - 1, 1))
                          }
                          isDisabled={currentPage === 1}
                        >
                          Previous
                        </Button>
                        <Text fontSize="sm" color="gray.500">
                          Page {currentPage}
                        </Text>
                        <Button
                          size="sm"
                          onClick={() =>
                            setCurrentPage(prev =>
                              prev <
                              Math.ceil(allComments.length / COMMENTS_PER_PAGE)
                                ? prev + 1
                                : prev
                            )
                          }
                          isDisabled={
                            currentPage >=
                            Math.ceil(allComments.length / COMMENTS_PER_PAGE)
                          }
                        >
                          Next
                        </Button>
                      </HStack>
                    </VStack>
                  </Box>
                </VStack>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </DragDropContext>
  );
};

export default Project;
