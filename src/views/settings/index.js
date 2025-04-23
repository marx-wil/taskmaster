import React from 'react';
import {
  Box,
  VStack,
  Text,
  Switch,
  useColorMode,
  Flex,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Color mode values
  const cardBg = useColorModeValue('white', '#111C44');
  const headerColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <VStack spacing={6} align="stretch">
        {/* Preferences Section */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text fontSize="lg" fontWeight="bold" color={headerColor}>
              Preferences
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Flex justify="space-between" align="center">
                <Text color={headerColor}>Dark Mode</Text>
                <Switch
                  isChecked={colorMode === 'dark'}
                  onChange={toggleColorMode}
                  colorScheme="purple"
                />
              </Flex>
              <Flex justify="space-between" align="center">
                <Text color={headerColor}>Email Notifications</Text>
                <Switch defaultChecked colorScheme="purple" />
              </Flex>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  );
};

export default Settings;
