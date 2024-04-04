import React from 'react';

import {
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import Links from './components/links';

const Sidenav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const sidenavBg = useColorModeValue('gray', 'black');
  return (
    <Box w="15.625rem" bg={sidenavBg}>
      <Links />
      <Button
        aria-label="toggle theme"
        colorScheme="teal"
        variant="solid"
        onClick={toggleColorMode}
      >
        Test
      </Button>
    </Box>
  );
};

export default Sidenav;
