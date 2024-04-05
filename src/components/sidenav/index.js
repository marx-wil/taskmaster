import {
  Box,
  Divider,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import Links from './components/links';
import ProfileCard from './components/ProfileCard';

const Sidenav = props => {
  let sidenavBg = useColorModeValue('gray.50', 'gray.900');
  const colorMode = useColorMode();
  const style = {
    Sidenav: {
      width: '300px',
      boxSizing: 'border-box',
      boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
      height: '100vh',
      borderRight: `1px solid rgba(44,39,39,0.35)`,
    },
    navlink: {
      width: '260px',
    },
  };
  return (
    <>
      <Box style={style.Sidenav} py="1rem" bg={sidenavBg}>
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
