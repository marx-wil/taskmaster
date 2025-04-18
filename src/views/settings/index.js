import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Avatar,
  Icon,
  Switch,
  useColorMode,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Modal,
  Grid,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Flex,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiUpload, FiTrash2 } from 'react-icons/fi';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profile, setProfile] = useState({
    name: 'Zhack DTech',
    email: 'zhack.dtech@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/50767502?s=400&u=02a09ea91424428f126cf68192b65e3819e978a2&v=4',
  });

  // Color mode values
  const cardBg = useColorModeValue('white', '#111C44');
  const headerColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const buttonBg = useColorModeValue('#7551FF', '#7551FF');
  const buttonHoverBg = useColorModeValue('#1B3BBB', '#1B3BBB');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
  };

  const handleAccountDelete = () => {
    onClose();
  };

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <VStack spacing={6} align="stretch">
        {/* Preferences Section */}
        <Card bg={cardBg} boxShadow="lg" borderRadius="20px" borderWidth="1px" borderColor={borderColor}>
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