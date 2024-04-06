import '../../styles/main.scss';

import React from 'react';

import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';

const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    // Check if the screen size is lg or above
    // const isLgScreen = useBreakpointValue({ base: false, lg: true });
    let mainBg = useColorModeValue('#F4F7FE', '#111C44');
    const style = {
      comp: {
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
        <Box bg={mainBg} className="main" py="4" px="4">
          <Topnav />
          <Component style={style.comp} {...props} />
        </Box>
      </Flex>
    );
  };

  return DefaultFunction;
};

export default Layout;
