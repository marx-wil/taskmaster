import { Box, Grid } from '@chakra-ui/react';

import LineChart from '../../components/charts/linechart';
import PieChart from '../../components/charts/piechart';
import Stats from './components/stats';
import Taskslist from './components/taskslist';
import DashBasicTable from './components/tables';
import Cards from './components/taskcards';
import MiniCalendar from '../../components/minicalendar';
const Dashboard = props => {
  
  return (
    <>
      <Box>
        <Stats />
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(1, 1fr)',
            xl: 'repeat(2, 1fr)',
          }}
          gap={4}
          mb="4"
        >
          <LineChart />
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)',
            }}
            gap={4}
            mb="4"
          >
            <PieChart />
            <Taskslist />
          </Grid>
        </Grid>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(1, 1fr)',
            xl: 'repeat(2, 1fr)',
          }}
          gap={4}
          mb="4"
          alignItems="stretch"
        >
          <DashBasicTable />
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)',
            }}
            gap={4}
          >
            <Cards
              name="Zhack D'Tech"
              sub="FinanceDashboard"
              url="https://avatars.githubusercontent.com/u/50767502?v=4"
              img="https://raw.githubusercontent.com/zhackdtech/Financial-Dashboard/main/Mockup.jpg"
            />
            <MiniCalendar/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
