import '../../styles/main.scss';

import React from 'react';

import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';

const style = {
  main: {
    width: 'calc(100vw - 300px)',
  },
};
const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    let mainBg = useColorModeValue('gray.50', 'gray.900');
    return (
      <Flex>
        <Sidenav />
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
