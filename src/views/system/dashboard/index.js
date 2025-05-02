import React from 'react';
import { Box, Flex, Button, Icon, Grid } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import MiniCalendar from '../../../components/minicalendar';
import MyTask from './components/mytask';
import WelcomeCard from './components/welcomecard';
import UpcomingDeadline from './components/upcomingdeadline';
import ProjectSummary from './components/projectsummary';
import RecentActivity from './components/recentactivity';
import NewTaskModal from './components/newtask';
import NewProjectModal from './components/newproject';

const Dashboard = () => {
  // Mock data - replace with actual data from your backend
  const userData = {
    name: 'John Doe',
  };

  return (
    <Box>
      <Flex
        mb={4}
        gap={4}
        flexWrap="wrap"
        justify={{ base: 'center', lg: 'flex-end' }}
        w="100%"
      >
        <NewTaskModal />
        <NewProjectModal />
      </Flex>
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
    </Box>
  );
};

export default Dashboard;
