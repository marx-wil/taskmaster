import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Inbox = ({ contents, icon, title }) => {
  const { colorMode } = useColorMode();
  let iconColors = useColorModeValue('#0B1437', '#ffffff');
  let contentTextColor = useColorModeValue(
    'rgba(11, 20, 55,0.8)',
    'rgba(255,255,255,0.8)'
  );
  let linkTextColor = useColorModeValue(
    'rgba(11, 20, 55,0.8)',
    'rgba(255,255,255,0.8)'
  );
  let menuBg = useColorModeValue('#fff', '#0B1437');
  let headerTextColor = useColorModeValue('#111C44', '#F4F7FE');
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
          <IconButton icon={icon} {...commonProps} />
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
            title={title}
            bg="#5941CC"
            style={{
              fontWeight: '700',
              fontSize: '1rem',
            }}
            color="#fff"
          >
            {contents.map((content, index) => (
              <MenuItem key={index} bg="transparent" p="0">
                <Flex
                  p="4"
                  _hover={{
                    bg: colorMode === 'dark' ? 'whiteAlpha.100' : 'gray.100',
                    transition: 'background-color 0.3s',
                  }}
                  w="100%"
                  gap="2"
                >
                  <Flex
                    py="4"
                    mH="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Flex
                      bg="#087CA7"
                      h="4rem"
                      w="4rem"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="md"
                      color="#ffffff"
                    >
                      {content.icon}
                    </Flex>
                  </Flex>
                  <Box w="100%">
                    <Flex alignItems="center">
                      <Text
                        fontSize="sm"
                        mt="4"
                        color={headerTextColor}
                        fontWeight="700"
                      >
                        {content.header}
                      </Text>
                    </Flex>
                    <Text
                      fontSize="sm"
                      color={contentTextColor}
                      style={{ letterSpacing: '0.04em' }}
                    >
                      {content.content}
                    </Text>
                  </Box>
                </Flex>
              </MenuItem>
            ))}
            <MenuItem bg="transparent" p="2">
              <Flex justifyContent="center" w="100%">
                <Link fontSize="md" color={linkTextColor}>Read more</Link>
              </Flex>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default Inbox;
