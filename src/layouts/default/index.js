import React from 'react';

import {
  Box,
  Flex,
} from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';

const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    return (
      <Flex>
        <Sidenav />
        <Box>
          <Topnav />
          <Component {...props} />
        </Box>
      </Flex>
    );
  };

  return DefaultFunction;
};

export default Layout;
