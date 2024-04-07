import {
  Box,
  Grid,
} from '@chakra-ui/react';

import LineChart from './components/linechart';
import PieChart from './components/piechart';
import Stats from './components/stats';

const Dashboard = props => {
  return (
    <>
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
          <PieChart/>
          <Box>Hi</Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
