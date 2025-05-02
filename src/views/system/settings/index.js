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
  Select,
  Input,
  HStack,
  Checkbox,
  SimpleGrid,
} from '@chakra-ui/react';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const cardBg = useColorModeValue('white', '#111C44');
  const headerColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <VStack spacing={6} align="stretch">
        {/* General Settings */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={headerColor}
              className="poppins-regular"
            >
              General Settings
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Default Start Page
                </Text>
                <Select
                  defaultValue="dashboard"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="dashboard">Dashboard</option>
                  <option value="calendar">Calendar</option>
                  <option value="tasks">Tasks</option>
                </Select>
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Time Zone
                </Text>
                <Input
                  placeholder="Auto-detected or select manually"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                />
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Date Format
                </Text>
                <Select
                  defaultValue="MM/DD/YYYY"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </Select>
              </Flex>

              <Flex justify="space-between" align="center">
                <Text color={headerColor} className="poppins-regular">
                  24-Hour Time Format
                </Text>
                <Switch colorScheme="purple" defaultChecked />
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Language
                </Text>
                <Select
                  defaultValue="en"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                </Select>
              </Flex>
            </VStack>
          </CardBody>
        </Card>

        {/* Notifications */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={headerColor}
              className="poppins-regular"
            >
              Notification Preferences
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              {[
                'Task Due Reminders',
                'Daily Task Summary Email',
                'Comments on My Tasks',
                'Project Updates',
                'Notify Me When Assigned to a Task',
              ].map(label => (
                <Flex key={label} justify="space-between" align="center">
                  <Text color={headerColor} className="poppins-regular">
                    {label}
                  </Text>
                  <Switch defaultChecked colorScheme="purple" />
                </Flex>
              ))}

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Notification Frequency
                </Text>
                <Select
                  defaultValue="daily"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="immediate">Immediate</option>
                  <option value="hourly">Hourly Digest</option>
                  <option value="daily">Daily Digest</option>
                  <option value="never">Never</option>
                </Select>
              </Flex>
            </VStack>
          </CardBody>
        </Card>

        {/* Task Defaults */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={headerColor}
              className="poppins-regular"
            >
              Task Defaults
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Default Task Priority
                </Text>
                <Select
                  defaultValue="medium"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Select>
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Default Status on Creation
                </Text>
                <Select
                  defaultValue="todo"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                </Select>
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Default Due Date Offset (days)
                </Text>
                <Input
                  type="number"
                  defaultValue={2}
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                />
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Default Tags
                </Text>
                <Input
                  placeholder="e.g. work, personal, urgent"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                />
              </Flex>

              <Flex justify="space-between" align="center">
                <Text color={headerColor} className="poppins-regular">
                  Auto-assign Me to Created Tasks
                </Text>
                <Switch colorScheme="purple" />
              </Flex>
            </VStack>
          </CardBody>
        </Card>

        {/* Appearance & UI */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={headerColor}
              className="poppins-regular"
            >
              Appearance & UI
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Flex justify="space-between" align="center">
                <Text color={headerColor} className="poppins-regular">
                  Dark Mode
                </Text>
                <Switch
                  isChecked={colorMode === 'dark'}
                  onChange={toggleColorMode}
                  colorScheme="purple"
                />
              </Flex>

              <Flex justify="space-between" align="center">
                <Text color={headerColor} className="poppins-regular">
                  Enable Animations
                </Text>
                <Switch colorScheme="purple" />
              </Flex>

              <Flex justify="space-between" align="center">
                <Text color={headerColor} className="poppins-regular">
                  Compact Layout
                </Text>
                <Switch colorScheme="purple" />
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Primary Color Scheme
                </Text>
                <Select
                  defaultValue="purple"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="purple">Purple</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </Select>
              </Flex>

              <Flex direction="column">
                <Text mb={1} color={headerColor} className="poppins-regular">
                  Font Size
                </Text>
                <Select
                  defaultValue="medium"
                  bg={cardBg}
                  color={headerColor}
                  borderColor={borderColor}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Select>
              </Flex>
            </VStack>
          </CardBody>
        </Card>

        {/* Experimental Features */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={headerColor}
              className="poppins-regular"
            >
              Experimental Features
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              {['Enable New Calendar View', 'Enable Kanban Drag & Drop'].map(
                label => (
                  <Flex key={label} justify="space-between" align="center">
                    <Text color={headerColor} className="poppins-regular">
                      {label}
                    </Text>
                    <Switch colorScheme="purple" />
                  </Flex>
                )
              )}
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  );
};

export default Settings;
