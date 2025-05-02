import React, { useState, useCallback, useMemo, useEffect } from 'react';
import {
  Box,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Icon,
  Flex,
  useColorModeValue,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { FiSearch,  FiFolder } from 'react-icons/fi';
import StatsCard from '../../../components/statscard';
import ProjectCard from './components/projectcard';
import debounce from 'lodash/debounce';
import CreateProjectModal from './components/createprojectmodal';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  //  eslint-disable-next-line
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const textColor = useColorModeValue('#0B1437', '#ffffff');

  const projects = [
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

  const stats = [
    {
      header: 'Total Projects',
      main: projects.length,
      icon: FiFolder,
      footer: 'Active Projects',
    },
    {
      header: 'Team Members',
      main: projects.reduce((acc, project) => acc + project.members.length, 0),
      icon: FiFolder,
      footer: 'Active Members',
    },
  ];

  const debouncedSetSearchQuery = useMemo(
    () =>
      debounce(value => {
        setSearchQuery(value);
      }, 300),
    []
  );

  // Cleanup the debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedSetSearchQuery.cancel();
    };
  }, [debouncedSetSearchQuery]);

  const handleSearch = useCallback(
    e => {
      debouncedSetSearchQuery(e.target.value);
    },
    [debouncedSetSearchQuery]
  );

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === 'all' ||
      (filter === 'personal' && project.type === 'personal') ||
      (filter === 'team' && project.type === 'team') ||
      (filter === 'active' && project.status === 'active') ||
      (filter === 'archived' && project.status === 'archived');
    return matchesSearch && matchesFilter;
  });

  return (
    <Box>
      <Flex justify="flex-end" align="center" mb={6}>
        <CreateProjectModal />
      </Flex>

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={4}
        mb={6}
      >
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            header={stat.header}
            main={stat.main}
            icon={stat.icon}
            footer={stat.footer}
          />
        ))}
      </Grid>

      <Flex gap={4} mb={6}>
        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search projects..."
            onChange={handleSearch}
            bg={cardBg}
            borderColor="rgba(128,128,128,.4)"
            _focus={{ borderColor: '#7551FF' }}
          />
        </InputGroup>
        <Select
          maxW="200px"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          bg={cardBg}
          borderColor="rgba(128,128,128,.4)"
          _focus={{ borderColor: '#7551FF' }}
        >
          <option value="all">All Projects</option>
          <option value="personal">Personal</option>
          <option value="team">Team</option>
          <option value="active">Active</option>
          <option value="archived">Archived</option>
        </Select>
      </Flex>

      {filteredProjects.length === 0 ? (
        <Text textAlign="center" color={textColor} opacity="0.7">
          No projects found matching your search criteria
        </Text>
      ) : (
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      )}

      <CreateProjectModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Projects;
