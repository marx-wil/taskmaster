import {
  Box,
  Divider,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import Links from './components/links';
import ProfileCard from './components/ProfileCard';

const Sidenav = props => {
  const isLgScreen = useBreakpointValue({ base: false, lg: true });
  let sidenavBg = useColorModeValue('#fff', '#111C44');
  const style = {
    Sidenav: {
      width: '300px',
      boxSizing: 'border-box',
      boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
      height: '100vh',
      borderRight: `1px solid rgba(255, 255, 255, 0.16)`,
      position: 'fixed',
      marginLeft: isLgScreen ? '0px' : '-300px',
    },
    navlink: {
      width: '260px',
    },
  };
  return (
    <>
      <Box style={style.Sidenav} py="1rem" bg={sidenavBg} className="sidenav">
        <VStack>
          <ProfileCard />
          <Divider orientation="horizontal" />
          <Links />
        </VStack>
      </Box>
    </>
  );
};
export default Sidenav;
