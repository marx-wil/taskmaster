import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  useToast,
  useDisclosure,
  Icon,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const dummyMembers = ['Zhack Dtech', 'Maria Lopez', 'John Doe', 'Nina Perez'];

export default function NewProjectModal() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [members, setMembers] = useState([]);

  const resetForm = () => {
    setProjectName('');
    setDescription('');
    setSelectedMember('');
    setMembers([]);
  };

  const handleSubmit = () => {
    if (!projectName.trim()) {
      toast({
        title: 'Project name is required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Handle actual API submission here

    toast({
      title: 'Project Created',
      description: `"${projectName}" has been added to your workspace.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    resetForm();
    onClose();
  };

  const handleAddMember = () => {
    if (selectedMember && !members.includes(selectedMember)) {
      setMembers(prev => [...prev, selectedMember]);
    }
    setSelectedMember('');
  };

  const handleRemoveMember = member => {
    setMembers(members.filter(m => m !== member));
  };

  return (
    <>
      <Button
        leftIcon={<Icon as={FiPlus} />}
        variant="outline"
        borderColor="rgba(128,128,128,.4)"
        _hover={{ bg: 'rgba(128,128,128,.1)' }}
        size={{ base: 'sm', md: 'md' }}
        flex={{ base: '1', sm: 'initial' }}
        minW={{ base: 'auto', sm: 'initial' }}
        maxW={{ base: '100%', sm: 'initial' }}
        px={{ base: 3, md: 4 }}
        onClick={onOpen}
      >
        Create Project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel>Project Name</FormLabel>
                <Input
                  placeholder="e.g. Marketing Website Redesign"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="What is this project about?"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Add Members</FormLabel>
                <HStack>
                  <Select
                    placeholder="Select member"
                    value={selectedMember}
                    onChange={e => setSelectedMember(e.target.value)}
                    flex="1"
                  >
                    {dummyMembers
                      .filter(m => !members.includes(m))
                      .map(member => (
                        <option key={member} value={member}>
                          {member}
                        </option>
                      ))}
                  </Select>
                  <Button onClick={handleAddMember}>Add</Button>
                </HStack>
                <HStack mt={2} wrap="wrap">
                  {members.map(member => (
                    <Tag key={member} colorScheme="blue" borderRadius="full">
                      <TagLabel>{member}</TagLabel>
                      <TagCloseButton
                        onClick={() => handleRemoveMember(member)}
                      />
                    </Tag>
                  ))}
                </HStack>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="purple" onClick={handleSubmit}>
              Create Project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
