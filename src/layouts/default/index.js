import '../../styles/main.scss';

import React from 'react';

import {
  Box,
  Flex,
  Slide,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';

const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    let mainBg = useColorModeValue('#F4F7FE', '#111C44');
    const showSidenav = useBreakpointValue({ base: false, lg: true });
    const marginLeftLG = useBreakpointValue({ base: '0', lg: '300px' });
    const style = {
      main: {
        marginLeft: showSidenav ? marginLeftLG : '0', // Set marginLeft to 300px when showSidenav is true on LG and up screens
        transition: 'margin-left 0.3s ease-in-out', // Add transition for smooth animationflexGrow: 1, // Make the main box grow to occupy all remaining space
        minHeight: '100vh', // Set a minimum height to occupy the full viewport height
        display: 'flex', // Set display to flex to utilize flex properties
      },
    };
    return (
      <Flex>
        <Slide direction="left" in={showSidenav} style={{ zIndex: 10 }}>
          {showSidenav && <Sidenav />}
        </Slide>
        <Box bg={mainBg} style={style.main}>
          {' '}
          {/* main box */}
          <Topnav />
          <Component {...props} />
        </Box>
      </Flex>
    );
  };

  return DefaultFunction;
};

export default Layout;
