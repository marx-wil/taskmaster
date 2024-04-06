import { useLocation } from 'react-router-dom'; // Import useLocation hook

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from '@chakra-ui/react';

import routes from '../../../../routes.js'; // Import routes

const style = {
  link: {
    fontSize: '.76rem',
    fontWeight: '600',
  },
};

const DBreadcrumb = () => {
  let dBreadCrumbColor = useColorModeValue('#111c44', '#ffffff'); // Get color mode value

  const location = useLocation(); // Get current location
  const activeRoute = location.pathname; // Get active route

  // Find the active route object from the routes array
  const activeRouteInfo = routes.find(route => route.path === activeRoute);

  // Render the breadcrumb based on the active route
  return (
    <>
      <Breadcrumb style={style.link} color={dBreadCrumbColor}>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">SysGo</BreadcrumbLink> {/* First breadcrumb item */}
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">TaskMaster</BreadcrumbLink> {/* Second breadcrumb item */}
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">
            {activeRouteInfo ? activeRouteInfo.name : 'Default'} {/* Render active route name or default */}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default DBreadcrumb;
