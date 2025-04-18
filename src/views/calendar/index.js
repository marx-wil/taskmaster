import React, { useState, useCallback, useRef } from 'react';
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
  Heading,
  useColorModeValue,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './calendar.css';

// Mock data for April 2025 to December 2025
const mockTasks = [
  // April 2025
  {
    id: 1,
    title: 'Complete Project Proposal',
    start: '2025-04-20',
    end: '2025-04-20',
    priority: 'high',
    status: 'in-progress',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: '2025-04-22',
    end: '2025-04-22',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  {
    id: 3,
    title: 'Client Presentation',
    start: '2025-04-25',
    end: '2025-04-25',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe'
  },
  // May 2025
  {
    id: 4,
    title: 'Sprint Planning',
    start: '2025-05-01',
    end: '2025-05-01',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  {
    id: 5,
    title: 'Code Review',
    start: '2025-05-10',
    end: '2025-05-10',
    priority: 'high',
    status: 'in-progress',
    project: 'Project A',
    assignee: 'John Doe'
  },
  // June 2025
  {
    id: 6,
    title: 'Product Launch',
    start: '2025-06-15',
    end: '2025-06-15',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 7,
    title: 'Team Building',
    start: '2025-06-20',
    end: '2025-06-20',
    priority: 'low',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  // July 2025
  {
    id: 8,
    title: 'Quarterly Review',
    start: '2025-07-05',
    end: '2025-07-05',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 9,
    title: 'Feature Development',
    start: '2025-07-15',
    end: '2025-07-15',
    priority: 'medium',
    status: 'in-progress',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  // August 2025
  {
    id: 10,
    title: 'System Update',
    start: '2025-08-01',
    end: '2025-08-01',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 11,
    title: 'Documentation Review',
    start: '2025-08-10',
    end: '2025-08-10',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  // September 2025
  {
    id: 12,
    title: 'Annual Conference',
    start: '2025-09-15',
    end: '2025-09-15',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 13,
    title: 'Performance Review',
    start: '2025-09-20',
    end: '2025-09-20',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  // October 2025
  {
    id: 14,
    title: 'Product Enhancement',
    start: '2025-10-05',
    end: '2025-10-05',
    priority: 'high',
    status: 'in-progress',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 15,
    title: 'Team Workshop',
    start: '2025-10-15',
    end: '2025-10-15',
    priority: 'low',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  // November 2025
  {
    id: 16,
    title: 'Year-end Planning',
    start: '2025-11-01',
    end: '2025-11-01',
    priority: 'high',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 17,
    title: 'System Maintenance',
    start: '2025-11-10',
    end: '2025-11-10',
    priority: 'medium',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  },
  // December 2025
  {
    id: 18,
    title: 'Holiday Party',
    start: '2025-12-15',
    end: '2025-12-15',
    priority: 'low',
    status: 'pending',
    project: 'Project A',
    assignee: 'John Doe'
  },
  {
    id: 19,
    title: 'Year-end Review',
    start: '2025-12-20',
    end: '2025-12-20',
    priority: 'high',
    status: 'pending',
    project: 'Project B',
    assignee: 'Jane Smith'
  }
];

const Calendar = () => {
  const [view, setView] = useState('dayGridMonth');
  const [filter, setFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const calendarRef = useRef(null);

  // Theme colors
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const headerColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.900');
  const navButtonBg = useColorModeValue('#7551FF', '#1B3BBB');
  const navButtonHoverBg = useColorModeValue('#1B3BBB', '#7551FF');
  const borderColor = useColorModeValue('rgba(128,128,128,.4)', 'rgba(128,128,128,.2)');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
  const calendarBg = useColorModeValue('#F7F8FA', '#111C44');

  const handleEventClick = useCallback((info) => {
    const task = mockTasks.find(t => t.id === parseInt(info.event.id));
    setSelectedTask(task);
    onOpen();
  }, [onOpen]);

  const getEventColor = (priority) => {
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

  const filteredTasks = mockTasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'my-tasks') return task.assignee === 'John Doe'; // Replace with actual user
    return task.project === filter;
  });

  const calendarEvents = filteredTasks.map(task => ({
    id: task.id.toString(),
    title: task.title,
    start: task.start,
    end: task.end,
    backgroundColor: getEventColor(task.priority),
    borderColor: getEventColor(task.priority),
    textColor: '#ffffff',
  }));

  const navProps = {
    bg: navButtonBg,
    color: '#fff',
    _hover: { bg: navButtonHoverBg },
  };

  return (
    <Box p={4}>
      <Card bg={cardBg} boxShadow="lg" border="1px solid" borderColor={borderColor} mb={4}>
        <CardBody>
          <Flex mb={4} gap={4} align="center">
            <Select
              value={view}
              onChange={(e) => setView(e.target.value)}
              w="200px"
              bg={cardBg}
              borderColor={borderColor}
              color={contentTextColor}
            >
              <option value="dayGridMonth">Month View</option>
              <option value="timeGridWeek">Week View</option>
            </Select>
            
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              w="200px"
              bg={cardBg}
              borderColor={borderColor}
              color={contentTextColor}
            >
              <option value="all">All Tasks</option>
              <option value="my-tasks">My Tasks</option>
              <option value="Project A">Project A</option>
              <option value="Project B">Project B</option>
            </Select>
          </Flex>

          <Box bg={calendarBg} p={4} borderRadius="lg">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={view}
              events={calendarEvents}
              eventClick={handleEventClick}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
              }}
              height="auto"
              customButtons={{
                prev: {
                  text: <FaAngleLeft />,
                  click: () => {
                    const calendarApi = calendarRef.current.getApi();
                    calendarApi.prev();
                  }
                },
                next: {
                  text: <FaAngleRight />,
                  click: () => {
                    const calendarApi = calendarRef.current.getApi();
                    calendarApi.next();
                  }
                }
              }}
              buttonText={{
                today: 'Today',
                month: 'Month',
                week: 'Week'
              }}
              themeSystem="standard"
              eventDisplay="block"
              eventTimeFormat={{
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false
              }}
              dayMaxEvents={true}
              moreLinkText="+%d more"
              moreLinkClick="popover"
              eventClassNames="custom-event"
            />
          </Box>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent bg={cardBg} border="1px solid" borderColor={borderColor}>
          <ModalHeader color={headerColor}>Task Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedTask && (
              <VStack align="stretch" spacing={4}>
                <Heading size="md" color={headerColor}>{selectedTask.title}</Heading>
                <Divider borderColor={borderColor} />
                <HStack>
                  <Badge 
                    colorScheme={selectedTask.priority === 'high' ? 'red' : selectedTask.priority === 'medium' ? 'yellow' : 'green'}
                    bg={getEventColor(selectedTask.priority)}
                    color="white"
                  >
                    {selectedTask.priority} Priority
                  </Badge>
                  <Badge bg="#7551FF" color="white">{selectedTask.status}</Badge>
                </HStack>
                <Text color={contentTextColor}><strong>Project:</strong> {selectedTask.project}</Text>
                <Text color={contentTextColor}><strong>Assignee:</strong> {selectedTask.assignee}</Text>
                <Text color={contentTextColor}><strong>Due Date:</strong> {new Date(selectedTask.start).toLocaleDateString()}</Text>
                <Button 
                  bg={navButtonBg} 
                  color="white" 
                  _hover={{ bg: navButtonHoverBg }}
                  onClick={onClose}
                >
                  Close
                </Button>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Calendar;
