import {
  NavLink,
  useLocation,
} from 'react-router-dom';

import {
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

import lists from '../../../../routes.js';

const Sidenav = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const isActiveRoute = route => {
    return location.pathname === route; // Compare the current location with the provided route
  };
  return (
    <>
      <Box>
        <VStack spacing="1.2rem">
          {lists.map(list => {
            return (
              <Box
                w="100%"
                px=".76rem"
                py=".9rem"
                borderRadius="lg"
                style={{
                  width: '260px',
                  background: isActiveRoute(list.path.toLowerCase())
                    ? "#3361FF"
                    : 'transparent',
                    fontFamily:"Manrope"
                }}
              >
                <NavLink
                  to={list.path}
                  style={
                    isActiveRoute(list.path.toLowerCase())
                      ? {
                          color: 'white', //active
                        }
                      : {
                          color: 'red', //inactive
                        }
                  }
                >
                  <Flex alignItems="center" gap={1}>
                    <IconButton icon={list.icon} />
                    {list.name}
                  </Flex>
                </NavLink>
              </Box>
            );
          })}
          <IconButton
            colorScheme="blue"
            aria-label="Toggle Color Theme"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </VStack>
      </Box>
    </>
  );
};
export default Sidenav;
