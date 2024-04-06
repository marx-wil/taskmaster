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
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const NavIcons = props => {
  let iconColors = useColorModeValue('#0B1437', '#ffffff');
  let mainBg = useColorModeValue('#ffffff', '#0B1437');
  let avatarBgFallBack = useColorModeValue('#1B3BBB', '#F4F7FE');
  let avatarColorFallBack = useColorModeValue('#ffffff', '#0B1437');
  let searcBoxBg = useColorModeValue('#F7F8FA', '#111C44');
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        w="27.5rem"
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
        <InputGroup maxW="50%" borderRadius="3xl" bg={searcBoxBg}>
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
        <Box>
          <IconButton
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            bg="transparent"
            size="md"
            _hover={{ backgroundColor: 'transparent' }}
            _active={{ backgroundColor: 'transparent' }}
            color={iconColors}
          />
          <IconButton
            aria-label="Notifications"
            icon={<FaBell />}
            bg="transparent"
            size="md"
            _hover={{ backgroundColor: 'transparent' }}
            _active={{ backgroundColor: 'transparent' }}
            color={iconColors}
          />
          <IconButton
            aria-label="Messages"
            icon={<FaInbox />}
            bg="transparent"
            size="md"
            _hover={{ backgroundColor: 'transparent' }}
            _active={{ backgroundColor: 'transparent' }}
            color={iconColors}
          />
          <IconButton
            hideFrom="lg"
            aria-label="Menu button"
            icon={<FaBars />}
            bg="transparent"
            size="md"
            _hover={{ backgroundColor: 'transparent' }}
            _active={{ backgroundColor: 'transparent' }}
            color={iconColors}
          />
        </Box>
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
    </>
  );
};

export default NavIcons;
