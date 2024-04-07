import { useRef } from 'react';

import {
  FaBars,
  FaBell,
  FaInbox,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import Sidebar from '../../../../components/sidenav';

const NavIcons = props => {
  let iconColors = useColorModeValue('#0B1437', '#ffffff');
  let mainBg = useColorModeValue('#ffffff', '#0B1437');
  let avatarBgFallBack = useColorModeValue('#1B3BBB', '#F4F7FE');
  let avatarColorFallBack = useColorModeValue('#ffffff', '#0B1437');
  let searcBoxBg = useColorModeValue('#F7F8FA', '#111C44');
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Flex
        w={{ base: '100%', md: '27.5rem' }}
        h="100%"
        align="center"
        justify="space-around"
        gap={1}
        py="4"
        px="4"
        borderRadius="full"
        boxShadow="xl"
        bg={mainBg}
      >
        <InputGroup
          maxW="50%"
          borderRadius="3xl"
          bg={searcBoxBg}
          display={{ base: 'none', sm: 'flex' }}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search query"
            borderRadius="full"
            borderColor="transparent"
            _hover={{ backgroundColor: 'transparent' }}
            _active={{ backgroundColor: 'transparent' }}
          />
        </InputGroup>
        <IconButton
          display={{ base: 'flex', sm: 'none' }}
          aria-label="Open search"
          icon={<SearchIcon />}
          bg="transparent"
          size="sm"
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
          color={iconColors}
        />

        <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          bg="transparent"
          size="sm"
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
          color={iconColors}
        />
        <IconButton
          aria-label="Notifications"
          icon={<FaBell />}
          bg="transparent"
          size="sm"
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
          color={iconColors}
        />
        <IconButton
          aria-label="Messages"
          icon={<FaInbox />}
          bg="transparent"
          size="sm"
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
          color={iconColors}
        />
        <IconButton
          hideFrom="lg"
          aria-label="Menu button"
          icon={<FaBars />}
          bg="transparent"
          size="sm"
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
          color={iconColors}
          ref={btnRef}
          onClick={onOpen}
        />
        <Avatar
          aria-label="User"
          size="sm"
          name="Zhack D'Tech"
          src="https://avatars.githubusercontent.com/u/50767502?v=4"
          bg={avatarBgFallBack}
          borderRadius="full"
          color={avatarColorFallBack}
        />
      </Flex>
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavIcons;
