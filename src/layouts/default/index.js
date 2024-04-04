import React from 'react';

import {
  Box,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';

function Layout(Component) {
  return function WrappedComponent(props) {
    return (
      <ChakraProvider theme={theme}>
        <Box className="wrapper">
          <Sidenav />
          <Box>
            <Topnav />
            <Component {...props} />
          </Box>
        </Box>
      </ChakraProvider>
    );
  };
}

export default Layout;
