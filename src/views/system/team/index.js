import {
  Box,
  Text,
  Avatar,
  HStack,
  VStack,
  Input,
  Button,
  useToast,
  Select,
  Divider,
  Grid,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FiUserPlus } from 'react-icons/fi';
import { useState } from 'react';
import ProjectCard from './components/projectcard';
const dummyMembers = [
  {
    id: 1,
    name: 'Zhack Dtech',
    role: 'Owner',
    avatar:
      'https://avatars.githubusercontent.com/u/50767502?s=400&u=02a09ea91424428f126cf68192b65e3819e978a2&v=4',
  },
  {
    id: 2,
    name: 'Maria Lopez',
    role: 'Editor',
    avatar: 'https://i.pravatar.cc/100?u=2',
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Viewer',
    avatar: 'https://i.pravatar.cc/100?u=3',
  },
];

const dummyBoards = [
  {
    id: 1,
    name: 'Marketing Campaign',
    progress: 75,
    members: [
      { name: 'John Doe', avatar: 'https://bit.ly/dan-abramov' },
      { name: 'Jane Smith', avatar: 'https://bit.ly/ryan-florence' },
    ],
    lastUpdated: '2 days ago',
    createdAt: '2 weeks ago',
    type: 'team',
    status: 'active',
  },
  {
    id: 2,
    name: 'Personal Website',
    progress: 30,
    members: [{ name: 'John Doe', avatar: 'https://bit.ly/dan-abramov' }],
    lastUpdated: '1 day ago',
    createdAt: '1 week ago',
    type: 'personal',
    status: 'active',
  },
  {
    id: 3,
    name: 'Portfolio',
    progress: 30,
    members: [{ name: 'John Doe', avatar: 'https://bit.ly/dan-abramov' }],
    lastUpdated: '1 day ago',
    createdAt: '1 week ago',
    type: 'personal',
    status: 'active',
  },
  {
    id: 4,
    name: 'TaskMaster',
    progress: 30,
    members: [{ name: 'John Doe', avatar: 'https://bit.ly/dan-abramov' }],
    lastUpdated: '1 day ago',
    createdAt: '1 week ago',
    type: 'personal',
    status: 'active',
  },
];

export default function TeamBoard() {
  const [email, setEmail] = useState('');
  //   eslint-disable-next-line
  const [members, setMembers] = useState(dummyMembers);
  const [selectedUser, setSelectedUser] = useState('');
  const [assignedTask, setAssignedTask] = useState('');
  const toast = useToast();

  const handleInvite = () => {
    if (!email) return;
    toast({
      title: 'Invitation sent',
      description: `Invite sent to ${email}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setEmail('');
  };

  const handleAssign = () => {
    if (selectedUser && assignedTask) {
      toast({
        title: 'Task assigned',
        description: `Assigned "${assignedTask}" to ${selectedUser}`,
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      setAssignedTask('');
      setSelectedUser('');
    }
  };

  return (
    <Box p={6}>
      {/* Member List */}
      <Box mb={6}>
        <Text fontWeight="bold" mb={4} className={'poppins-regular'}>
          Team Members
        </Text>
        <HStack spacing={4} wrap="wrap">
          {members.map(member => (
            <VStack key={member.id} spacing={1}>
              <Avatar name={member.name} src={member.avatar} />
              <Text fontSize="sm" className={'poppins-regular'}>
                {member.name}
              </Text>
              <Text
                fontSize="xs"
                color="gray.500"
                className={'poppins-regular'}
              >
                {member.role}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Box>

      <Divider my={6} />

      {/* Shared Boards */}
      <Box mb={6}>
        <Text fontWeight="bold" className={'poppins-regular'} mb={4}>
          Shared Boards
        </Text>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {dummyBoards.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Box>

      <Divider my={6} />

      {/* Invite via Email */}
      <Box mb={6}>
        <Text fontWeight="bold" mb={4} className={'poppins-regular'}>
          Invite New Member
        </Text>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          gap={6}
        >
          <Input
            placeholder="Enter email address"
            value={email}
            className={'poppins-regular'}
            onChange={e => setEmail(e.target.value)}
          />
          <Flex justifyContent={{ base: 'flex-end', lg: 'flex-start' }}>
            <Button
              leftIcon={<Icon as={FiUserPlus} />}
              bg="#7551FF"
              color="white"
              _hover={{ bg: '#6a48e6' }}
              className="poppins-regular"
              onClick={handleInvite}
            >
              Invite
            </Button>
          </Flex>
        </Grid>
      </Box>

      {/* Assign Tasks */}
      <Box>
        <Text fontWeight="bold" mb={4} className={'poppins-regular'}>
          Assign Task
        </Text>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          <Select
            placeholder="Select member"
            value={selectedUser}
            onChange={e => setSelectedUser(e.target.value)}
            className={'poppins-regular'}
          >
            {members.map(m => (
              <option key={m.id} value={m.name}>
                {m.name}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Task title"
            value={assignedTask}
            onChange={e => setAssignedTask(e.target.value)}
            className={'poppins-regular'}
          />
          <Flex justifyContent={{ base: 'flex-end', lg: 'flex-start' }}>
            <Button
              leftIcon={<Icon as={FiUserPlus} />}
              bg="#7551FF"
              color="white"
              _hover={{ bg: '#6a48e6' }}
              className="poppins-regular"
              onClick={handleAssign}
            >
              Assign
            </Button>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
}
