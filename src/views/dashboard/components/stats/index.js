import { Grid } from '@chakra-ui/react';

import StatsCard from '../../../../components/statscard';
import statsData from './data.js';

const Stats = props => {
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
      gap={4}
      mb="4"
    >
      {statsData.map((data, index) => (
        <StatsCard
          key={index}
          header={data.header}
          main={data.main}
          icon={data.icon}
          footer={data.footer}
        />
      ))}
    </Grid>
  );
};

export default Stats;
