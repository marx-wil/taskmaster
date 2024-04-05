import { NavLink } from 'react-router-dom';

import { MoonIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';

import lists from '../../routes.js';

const Sidenav = props => {
    const {colorMode,toggleColorMode} = useColorMode();
  return (
    <>
      <Box>
        {lists.map(list => {
          return (
            <NavLink 
              to={list.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {list.name}
            </NavLink>
          );
        })}
        <IconButton
          colorScheme="blue"
          aria-label="Toggle Color Theme"
          icon={<MoonIcon/>}
          onClick={toggleColorMode}
        />
      </Box>
    </>
  );
};
export default Sidenav;
