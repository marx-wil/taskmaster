import {
  Box,
  Divider,
  VStack,
} from '@chakra-ui/react';

import Links from './components/links';
import ProfileCard from './components/ProfileCard';

const style = {
  Sidenav: {
    width: '300px',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
    height:"100vh"
  },
  navlink:
  {
    width:"260px",
  }
};
const Sidenav = props => {
  return (
    <>
      <Box style={style.Sidenav} py="1rem">
        <VStack>
          <ProfileCard/>
          <Divider orientation='horizontal' />
          <Links />
        </VStack>
      </Box>
    </>
  );
};
export default Sidenav;
