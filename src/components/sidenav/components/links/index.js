import {
  NavLink,
  useLocation,
} from 'react-router-dom';

import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import lists from '../../../../routes.js';

const Sidenav = props => {
  const location = useLocation();
  const isActiveRoute = route => {
    return location.pathname === route; // Compare the current location with the provided route
  };
  // bg of the icon
  let iconBg = useColorModeValue('white', 'white');
  //   color of the icon
  let iconColor = useColorMode('#1b254b', '#fff');
  let iconActiveColor = useColorModeValue('#1B3BBB', '#7551FF');
  //   bg of the navlink
  let navlinkBg = useColorModeValue('#1B3BBB', '#7551FF');
  //   color of the links
  let linkActiveColor = useColorModeValue('#fff', '#fff');
  let linkColor = useColorModeValue("#111C44","#fff")
  return (
    <>
      <Box>
        <VStack spacing="1.2rem" py="1rem">
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
                    ? navlinkBg
                    : 'transparent',
                  fontFamily: 'Manrope',
                }}
              >
                <NavLink
                  to={list.path}
                  style={{
                    color: isActiveRoute(list.path.toLowerCase())
                      ? linkActiveColor // active
                      : linkColor, // inactive
                    fontWeight: isActiveRoute(list.path.toLowerCase())
                      ? 'bold' // if active, set font weight to bold
                      : '600', // if inactive, set font weight to normal
                  }}
                >
                  <Flex alignItems="center" gap={1}>
                    <IconButton
                      icon={list.icon}
                      bg={
                        isActiveRoute(list.path.toLowerCase())
                          ? iconBg
                          : 'transparent'
                      }
                      style={{
                        color: isActiveRoute(list.path.toLowerCase())
                          ? iconActiveColor
                          : iconColor,
                      }}
                    />
                    {list.name}
                  </Flex>
                </NavLink>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </>
  );
};
export default Sidenav;
