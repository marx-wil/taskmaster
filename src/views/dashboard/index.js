import React from 'react';
import {
  Box,
  Flex,
  Button,
  Icon,
  Grid,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import MiniCalendar from '../../components/minicalendar';
import MyTask from './components/mytask';
import WelcomeCard from './components/welcomecard';
import UpcomingDeadline from './components/upcomingdeadline';
import ProjectSummary from './components/projectsummary';
import RecentActivity from './components/recentactivity';


const Dashboard = () => {

  // Mock data - replace with actual data from your backend
  const userData = {
    name: 'John Doe',
  };

  return (
    <Box>
      <WelcomeCard name={userData.name} />

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={6}
        mb={6}
      >
        <MyTask />
        <UpcomingDeadline />
        <ProjectSummary />
        <MiniCalendar />
      </Grid>
      <RecentActivity />

      <Flex gap={4} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }} w="100%">
        <Button
          leftIcon={<Icon as={FiPlus} />}
          bg="#7551FF"
          color="white"
          _hover={{ bg: '#6a48e6' }}
          size={{ base: "sm", md: "md" }}
          flex={{ base: '1', sm: 'initial' }}
          minW={{ base: "auto", sm: "initial" }}
          maxW={{ base: '100%', sm: 'initial' }}
          px={{ base: 3, md: 4 }}
        >
          Create Task
        </Button>
        <Button
          leftIcon={<Icon as={FiPlus} />}
          variant="outline"
          borderColor="rgba(128,128,128,.4)"
          _hover={{ bg: 'rgba(128,128,128,.1)' }}
          size={{ base: "sm", md: "md" }}
          flex={{ base: '1', sm: 'initial' }}
          minW={{ base: "auto", sm: "initial" }}
          maxW={{ base: '100%', sm: 'initial' }}
          px={{ base: 3, md: 4 }}
        >
          Create Project
        </Button>
      </Flex>
    </Box>
  );
};

export default Dashboard;
