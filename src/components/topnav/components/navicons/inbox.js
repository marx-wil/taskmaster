import { FaInbox } from 'react-icons/fa';

import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Inbox = props => {
  let iconColors = useColorModeValue('#0B1437', '#ffffff');
  let msgContentColor = useColorModeValue('#0B1437', '#ffffff');
  let menuBg = useColorModeValue('#fff', '#0B1437');
  let msgTimeColor = useColorModeValue("#111C44","#F4F7FE")
  const commonProps = {
    bg: 'transparent',
    size: 'sm',
    _hover: { backgroundColor: 'transparent' },
    _active: { backgroundColor: 'transparent' },
    color: iconColors,
  };
  return (
    <>
      <Menu>
        <MenuButton>
          <IconButton
            aria-label="Messages"
            icon={<FaInbox />}
            {...commonProps}
          />
        </MenuButton>
        <MenuList
          p="0"
          width={{ base: '90vw', sm: '25rem' }}
          mx={{ base: '4', sm: 'auto' }}
          style={{ overflow: 'hidden' }}
          bg={menuBg}
        >
          <MenuGroup
            py="3"
            px="4"
            m="0"
            title="Inbox"
            bg="#5941CC"
            style={{
              fontWeight: '700',
              fontSize: '1rem',
            }}
            color="#fff"
          >
            <MenuItem bg="transparent" p="0" mb="2">
              <Box p="4" _hover={{ background: 'red' }} w="100%">
                <Text size="sm" my="2" color={msgTimeColor}>
                  Title here
                </Text>
                <Text size="sm" color={msgContentColor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Box>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default Inbox;
