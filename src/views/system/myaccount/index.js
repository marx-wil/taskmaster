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
  Switch,
} from '@chakra-ui/react';
import { FiUpload, FiTrash2, FiDownload } from 'react-icons/fi';

const MyAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profile, setProfile] = useState({
    name: 'Zhack DTech',
    email: 'zhack.dtech@gmail.com',
    avatar:
      'https://avatars.githubusercontent.com/u/50767502?s=400&u=02a09ea91424428f126cf68192b65e3819e978a2&v=4',
  });

  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [emailPrefs, setEmailPrefs] = useState({
    updates: true,
    tips: false,
    reports: true,
  });

  const cardBg = useColorModeValue('white', '#111C44');
  const headerColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const buttonBg = useColorModeValue('#7551FF', '#7551FF');
  const buttonHoverBg = useColorModeValue('#1B3BBB', '#1B3BBB');

  const handleProfileUpdate = e => e.preventDefault();
  const handlePasswordChange = e => e.preventDefault();
  const handleAccountDelete = () => onClose();
  const downloadData = () => alert('Downloading data...');
  const revokeSession = id => alert(`Revoked session: ${id}`);

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <VStack spacing={6} align="stretch">
        {/* Profile & Account */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6}>
          {/* Profile */}
          <Card
            bg={cardBg}
            boxShadow="lg"
            borderRadius="20px"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <CardHeader>
              <Text fontSize="lg" fontWeight="bold" color={headerColor}>
                Profile
              </Text>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleProfileUpdate}>
                <VStack spacing={6} align="stretch">
                  <Flex align="center" gap={4}>
                    <Avatar size="xl" src={profile.avatar} />
                    <Button
                      leftIcon={<Icon as={FiUpload} />}
                      bg={buttonBg}
                      color="white"
                      _hover={{ bg: buttonHoverBg }}
                    >
                      Change Photo
                    </Button>
                  </Flex>
                  <FormControl>
                    <FormLabel color={headerColor}>Name</FormLabel>
                    <Input
                      value={profile.name}
                      onChange={e =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                      borderColor={borderColor}
                      _hover={{ borderColor: buttonBg }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={headerColor}>Email</FormLabel>
                    <Input
                      type="email"
                      value={profile.email}
                      onChange={e =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                      borderColor={borderColor}
                      _hover={{ borderColor: buttonBg }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    bg={buttonBg}
                    color="white"
                    _hover={{ bg: buttonHoverBg }}
                  >
                    Update Profile
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>

          {/* Account */}
          <Card
            bg={cardBg}
            boxShadow="lg"
            borderRadius="20px"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <CardHeader>
              <Text fontSize="lg" fontWeight="bold" color={headerColor}>
                Account
              </Text>
            </CardHeader>
            <CardBody>
              <form onSubmit={handlePasswordChange}>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel color={headerColor}>Current Password</FormLabel>
                    <Input
                      type="password"
                      borderColor={borderColor}
                      _hover={{ borderColor: buttonBg }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={headerColor}>New Password</FormLabel>
                    <Input
                      type="password"
                      borderColor={borderColor}
                      _hover={{ borderColor: buttonBg }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={headerColor}>
                      Confirm New Password
                    </FormLabel>
                    <Input
                      type="password"
                      borderColor={borderColor}
                      _hover={{ borderColor: buttonBg }}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    bg={buttonBg}
                    color="white"
                    _hover={{ bg: buttonHoverBg }}
                  >
                    Change Password
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>
        </Grid>

        {/* Data & Security */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text fontSize="lg" fontWeight="bold" color={headerColor}>
              Data & Security
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Button
                leftIcon={<FiDownload />}
                onClick={downloadData}
                colorScheme="purple"
                variant="outline"
              >
                Download My Data
              </Button>
              <Box>
                <Text fontWeight="medium" color={headerColor} mb={2}>
                  Active Sessions
                </Text>
                <Flex justify="space-between" align="center">
                  <Text color="gray.400">Chrome · Mac · 192.168.1.10</Text>
                  <Button
                    size="sm"
                    onClick={() => revokeSession(1)}
                    variant="ghost"
                    colorScheme="red"
                  >
                    Revoke
                  </Button>
                </Flex>
              </Box>
              <Flex justify="space-between" align="center">
                <Text color={headerColor}>Two-Factor Authentication</Text>
                <Switch
                  isChecked={twoFAEnabled}
                  onChange={() => setTwoFAEnabled(!twoFAEnabled)}
                  colorScheme="purple"
                />
              </Flex>
            </VStack>
          </CardBody>
        </Card>

        {/* Email Preferences */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Text fontSize="lg" fontWeight="bold" color={headerColor}>
              Email Preferences
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              {['updates', 'tips', 'reports'].map(type => (
                <Flex key={type} justify="space-between" align="center">
                  <Text color={headerColor}>
                    {
                      {
                        updates: 'Product Updates',
                        tips: 'Tips & Onboarding Emails',
                        reports: 'Weekly Productivity Reports',
                      }[type]
                    }
                  </Text>
                  <Switch
                    isChecked={emailPrefs[type]}
                    onChange={() =>
                      setEmailPrefs({
                        ...emailPrefs,
                        [type]: !emailPrefs[type],
                      })
                    }
                    colorScheme="purple"
                  />
                </Flex>
              ))}
            </VStack>
          </CardBody>
        </Card>

        {/* Danger Zone */}
        <Card
          bg={cardBg}
          boxShadow="lg"
          borderRadius="20px"
          borderWidth="1px"
          borderColor="red.500"
        >
          <CardHeader>
            <Text fontSize="lg" fontWeight="bold" color="red.500">
              Danger Zone
            </Text>
          </CardHeader>
          <CardBody>
            <Alert status="error" variant="subtle" mb={4} borderRadius="md">
              <AlertIcon />
              <Box>
                <AlertTitle>Delete Account</AlertTitle>
                <AlertDescription>
                  Once you delete your account, there is no going back. Please
                  be certain.
                </AlertDescription>
              </Box>
            </Alert>
            <Button
              leftIcon={<Icon as={FiTrash2} />}
              colorScheme="red"
              variant="outline"
              onClick={onOpen}
              _hover={{ bg: 'red.50' }}
            >
              Delete Account
            </Button>
          </CardBody>
        </Card>
      </VStack>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={cardBg}>
          <ModalHeader color={headerColor}>Delete Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={headerColor}>
              Are you sure you want to delete your account? This action cannot
              be undone.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleAccountDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MyAccount;
