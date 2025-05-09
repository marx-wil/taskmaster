import {
  useEffect,
  useRef,
} from 'react';

import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaInbox,
  FaMoon,
  FaSun,
  FaUser,
  FaCog,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import Sidebar from '../../../../components/sidenav';
import Navdrop from './navdrop';
import NavMessages from './components/messaging';
const NavIcons = props => {
  let iconColors = useColorModeValue('#0B1437', '#ffffff');
  let mainBg = useColorModeValue('#ffffff', '#0B1437');
  let profileMenuBg = useColorModeValue('#ffffff', '#0B1437');
  let profileMenuHoverBg = useColorModeValue('#5941CC', '#5941CC');
  let avatarBgFallBack = useColorModeValue('#1B3BBB', '#F4F7FE');
  let avatarColorFallBack = useColorModeValue('#ffffff', '#0B1437');
  let searcBoxBg = useColorModeValue('#F7F8FA', '#111C44');
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(); // Detect screen size
  const screenSize = useBreakpointValue({
    base: 'base',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  });
  const toast = useToast();
  // Close drawer when screen size is lg and up
  useEffect(() => {
    if (screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl') {
      onClose();
    }
  }, [screenSize, onClose]);
  const commonProps = {
    bg: 'transparent',
    size: 'sm',
    _hover: { backgroundColor: 'transparent' },
    _active: { backgroundColor: 'transparent' },
    color: iconColors,
  };
  const NotificationsContent = [
    {
      header: 'Apr 11, 2024 5:32am',
      content: 'A new version of the SysGo DEMS is ready for download.',
      icon: <FaBell />,
    },
    {
      header: 'Apr 10, 2024 1:32am',
      content: 'A new version of SysGo TaskMaster is ready for download.',
      icon: <FaBell />,
    },
  ];

  const MessagesContent = [
    {
      header: 'New message from: Can You March?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      icon: <FaEnvelope />,
    },
    {
      header: 'New message from: April May',
      content: 'Duis aute irure dolor in reprehenderit in voluptate',
      icon: <FaEnvelope />,
    },
    {
      header: 'New message from: Wilmarx John',
      content: 'Duis aute irure dolor in reprehenderit in voluptate',
      icon: <FaEnvelope />,
    },
    {
      header: 'New message from: April Labuyo',
      content: 'Duis aute irure dolor in reprehenderit in voluptate',
      icon: <FaEnvelope />,
    },
  ];
  const accountMenu = [
    {
      title: 'My Account',
      icon: <FaUser />,
      href: '/taskmaster/account',
    },
    {
      title: 'Settings',
      icon: <FaCog />,
      href: '/taskmaster/settings',
    }
  ]
  const navigate = useNavigate();
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
        // display={{ base: 'none', sm: 'flex' }}
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
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          {...commonProps}
        />
        <Navdrop
          icon={<FaBell />}
          title="Notifications"
          contents={NotificationsContent}
        />
        <NavMessages icon={<FaInbox />} title="Inbox" contents={MessagesContent} />
        <IconButton
          hideFrom="lg"
          aria-label="Menu button"
          icon={<FaBars />}
          ref={btnRef}
          onClick={onOpen}
          {...commonProps}
        />
        <Menu>
          <MenuButton>
            <Avatar
              aria-label="User"
              size="sm"
              name="Zhack D'Tech"
              src="https://avatars.githubusercontent.com/u/50767502?v=4"
              bg={avatarBgFallBack}
              borderRadius="full"
              color={avatarColorFallBack}
            />
          </MenuButton>
          <MenuList px="0" bg={profileMenuBg}>
            <MenuGroup
              title="Profile"
              style={{
                fontWeight: '700',
                fontSize: '1rem',
              }}
              m="3"
            >
              {accountMenu.map((item, index) => (
                <MenuItem
                  key={index}
                  style={{
                    transition: 'background-color 0.3s',
                    padding: '8px 16px',
                  }}
                  onClick={() => {
                    navigate(item.href);
                  }}
                >
                  {item.title}
                </MenuItem>
              ))}
            </MenuGroup>
            <MenuDivider />
            <MenuItem
              style={{
                transition: 'background-color 0.3s',
                padding: '8px 16px',
              }}
              onMouseEnter={e =>
                (e.target.style.backgroundColor = profileMenuHoverBg)
              }
              onMouseLeave={e =>
                (e.target.style.backgroundColor = 'transparent')
              }
              _hover={{ color: '#fff' }}
              onClick={() => {
                navigate('/login');
                toast({
                  title: 'Logout successful',
                  description: 'You have been logged out',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
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
