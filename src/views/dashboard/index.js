import {
  Box,
  Grid,
} from '@chakra-ui/react';

import Charts from './components/charts';
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
        <Charts />
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
          <Box>Hi</Box>
          <Box>Hi</Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
