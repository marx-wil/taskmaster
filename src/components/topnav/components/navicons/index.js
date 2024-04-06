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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        w="37%"
        h="100%"
        align="center"
        justify="end"
        gap={1}
        py="4"
        paddingRight="4"
        paddingLeft="0"
        borderRadius="full"
        boxShadow="xl"
        bg={mainBg}
      >
        <InputGroup maxW="50%" borderRadius="3xl">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search query" borderRadius="full" />
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
          src="#"
          bg="blue.500"
          borderRadius="full"
        />
      </Flex>
    </>
  );
};

export default NavIcons;
