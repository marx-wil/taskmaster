import '../../styles/main.scss';

import React from 'react';

import {
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';

const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    // Check if the screen size is lg or above
    const isLgScreen = useBreakpointValue({ base: false, lg: true });
    let mainBg = useColorModeValue('#F4F7FE', '#111C44');
    const style = {
      main: {
        width: isLgScreen ? 'calc(100vw - 300px)' : '100vw',
        marginLeft: isLgScreen ? '300px' : '0',
        transition: 'all .3s ease-in-out',
      },
    };
    return (
      <Flex>
        {/* Conditionally render Sidenav only on screens larger than lg */}
        {/* {isLgScreen && <Sidenav />}  */}
        <Box style={style.sidenav} className="sidenav">
          <Sidenav />
        </Box>
        <Box bg={mainBg} style={style.main}>
          <Topnav />
          <Component {...props} />
        </Box>
      </Flex>
    );
  };

  return DefaultFunction;
};

export default Layout;
