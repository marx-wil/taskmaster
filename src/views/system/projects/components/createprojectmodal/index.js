import React from 'react';
import {
  Input,
  Select,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  VStack,
} from '@chakra-ui/react';

const CreateProjectModal = ({ isOpen, onClose }) => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg={cardBg}>
        <ModalHeader color={contentTextColor}>Create New Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel color={contentTextColor}>Project Name</FormLabel>
              <Input
                placeholder="Enter project name"
                bg={cardBg}
                borderColor="rgba(128,128,128,.4)"
                _focus={{ borderColor: '#7551FF' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={contentTextColor}>Description</FormLabel>
              <Input
                placeholder="Enter project description"
                bg={cardBg}
                borderColor="rgba(128,128,128,.4)"
                _focus={{ borderColor: '#7551FF' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={contentTextColor}>Project Type</FormLabel>
              <Select
                placeholder="Select project type"
                bg={cardBg}
                borderColor="rgba(128,128,128,.4)"
                _focus={{ borderColor: '#7551FF' }}
              >
                <option value="personal">Personal</option>
                <option value="team">Team</option>
              </Select>
            </FormControl>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateProjectModal;
