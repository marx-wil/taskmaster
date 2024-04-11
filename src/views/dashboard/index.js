import {
  Box,
  Grid,
} from '@chakra-ui/react';

import LineChart from '../../components/charts/linechart';
import PieChart from '../../components/charts/piechart';
import Stats from './components/stats';
import Taskslist from './components/taskslist';

const Dashboard = props => {
  return (
    <>
      <Box>
        <Stats />
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(2, 1fr)',
          }}
          gap={4}
          mb="4"
        >
          <LineChart />
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(1, 1fr)',
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
      </Box>
    </>
  );
};
export default Dashboard;
