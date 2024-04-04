import React from 'react';

import { Box } from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';

function Layout(Component) {
  return function WrappedComponent(props) {
    return (
      <Box className="wrapper">
        <Sidenav />
        <Box>
          <Topnav />
          <Component {...props} />
        </Box>
      </Box>
    );
  };
}

export default Layout;
