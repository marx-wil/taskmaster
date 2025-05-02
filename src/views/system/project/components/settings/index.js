import {
  Button,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  FormLabel,
  Checkbox,
  Select,
  VStack,
  HStack,
  Box,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';

export default function ProjectSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const Section = ({ title, children, icon }) => (
    <Box
      bg={cardBg}
      p={4}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="sm"
      w="full"
    >
      <Text
        fontWeight="semibold"
        mb={2}
        fontSize={'xl'}
        className={'poppins-regular'}
      >
        {title}
      </Text>
      {children}
    </Box>
  );

  return (
    <>
      <Button
        leftIcon={<Icon as={FiSettings} />}
        variant="outline"
        borderColor={borderColor}
        _hover={{ opacity: 0.8 }}
        colorScheme="gray"
        size={{ base: 'sm', md: 'md' }}
        flex={{ base: '1', sm: 'initial' }}
        minW={{ base: 'auto', sm: 'initial' }}
        px={{ base: 3, md: 4 }}
        onClick={onOpen}
      >
        Settings
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" bg={cardBg}>
          <ModalHeader fontSize="2xl" fontWeight="bold">
            Project Settings
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={5} align="stretch">
              <Section title="Project Info">
                <FormLabel className="poppins-regular">Project Name</FormLabel>
                <Input
                  className="poppins-regular"
                  placeholder="Marketing Campaign"
                  mb={3}
                />
                <FormLabel className="poppins-regular">Description</FormLabel>
                <Textarea
                  className="poppins-regular"
                  placeholder="Plan, execute, and evaluate all campaigns for Q2."
                />
              </Section>

              <Section title="Cover Image">
                <HStack>
                  <Button size="sm" className="poppins-regular">
                    Upload
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    variant="outline"
                    className="poppins-regular"
                  >
                    Remove
                  </Button>
                </HStack>
              </Section>

              <Section title="Team Management">
                <VStack align="start" spacing={3}>
                  {[
                    { name: 'Zhack Dtech', role: 'Owner', actions: ['Remove'] },
                    {
                      name: 'Maria Lopez',
                      role: 'Editor',
                      actions: ['Remove'],
                    },
                    {
                      name: 'John K.',
                      role: 'Viewer',
                      actions: ['Promote', 'Remove'],
                    },
                  ].map((member, i) => (
                    <HStack key={i} justify="space-between" w="full">
                      <Text className="poppins-regular">
                        {i + 1}. {member.name} ({member.role})
                      </Text>
                      <HStack>
                        {member.actions.map((action, idx) => (
                          <Button
                            key={idx}
                            size="xs"
                            colorScheme={action === 'Remove' ? 'red' : 'blue'}
                            variant={action === 'Remove' ? 'solid' : 'outline'}
                          >
                            {action}
                          </Button>
                        ))}
                      </HStack>
                    </HStack>
                  ))}
                </VStack>

                <Divider my={4} />

                <FormLabel className="poppins-regular">
                  + Invite New Member
                </FormLabel>
                <HStack>
                  <Input placeholder="Email" />
                  <Select placeholder="Role" className="poppins-regular">
                    <option>Viewer</option>
                    <option>Editor</option>
                    <option>Owner</option>
                  </Select>
                  <Button colorScheme="green" className="poppins-regular">
                    Send
                  </Button>
                </HStack>
              </Section>

              <Section title="Notifications">
                <Checkbox>
                  <Text className="poppins-regular">Enable Task Reminders</Text>
                </Checkbox>
                <HStack>
                  <Text>🕒 Remind me:</Text>
                  <Select
                    w="auto"
                    className="poppins-regular"
                    defaultValue="1 day before due date"
                  >
                    <option>1 day before due date</option>
                    <option>2 days before</option>
                    <option>1 week before</option>
                  </Select>
                </HStack>
                <Checkbox>
                  <Text className="poppins-regular">
                    {' '}
                    Email updates for task activity
                  </Text>
                </Checkbox>
              </Section>

              <Section title="Permissions & Visibility">
                <HStack>
                  <Text className="poppins-regular">Visibility:</Text>
                  <Select
                    defaultValue="Private"
                    w="auto"
                    className="poppins-regular"
                  >
                    <option>Private</option>
                    <option>Team</option>
                    <option>Public</option>
                  </Select>
                </HStack>
                <Checkbox>
                  <Text className="poppins-regular">
                    Allow invited users to edit
                  </Text>
                </Checkbox>{' '}
                &nbsp;
                <Checkbox>
                  <Text className="poppins-regular">Allow task comments</Text>
                </Checkbox>
                &nbsp;
                <Checkbox>
                  <Text className="poppins-regular">
                    Lock columns (disable drag)
                  </Text>
                </Checkbox>
              </Section>

              <Section title="Export & Backup" icon="📤">
                <Text mb={2} className="poppins-regular">
                  Export Project:
                </Text>
                <HStack>
                  <Button size="sm" className="poppins-regular">
                    CSV
                  </Button>
                  <Button size="sm" className="poppins-regular">
                    PDF
                  </Button>
                  <Button size="sm" className="poppins-regular">
                    JSON
                  </Button>
                </HStack>

                <Text mt={4} mb={2} className="poppins-regular">
                  Manual Backup:
                </Text>
                <Button size="sm" className="poppins-regular">
                  Create Backup Now
                </Button>
              </Section>

              <Section title="Danger Zone" icon="⚠️">
                <HStack spacing={4}>
                  <Button
                    size="sm"
                    colorScheme="orange"
                    className="poppins-regular"
                  >
                    Archive Project
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    className="poppins-regular"
                  >
                    Delete Project
                  </Button>
                </HStack>
              </Section>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={onClose}
              bg={'green.500'}
              color={'white'}
              className="poppins-regular"
            >
              Save
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              className="poppins-regular"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
