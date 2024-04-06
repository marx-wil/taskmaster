import { useLocation } from 'react-router-dom'; // Import useLocation hook

import {
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import routes from '../../../../routes.js';

const NavHead = props => {
  let navHeadColor = useColorModeValue('#111c44', '#ffffff');
  const location = useLocation();
  const activeRoute = location.pathname;
  const activeRouteInfo = routes.find(route => route.path === activeRoute);
  return (
    <Heading as="h3" size="lg" color={navHeadColor}>
      {activeRouteInfo ? activeRouteInfo.name : 'Default'}
    </Heading>
  );
};

export default NavHead;
