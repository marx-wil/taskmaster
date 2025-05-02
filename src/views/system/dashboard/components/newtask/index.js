import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  VStack,
  HStack,
  FormLabel,
  FormControl,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
  IconButton,
  useToast,
  Text,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';

const dummyProjects = ['Landing Redesign', 'Product Sprint', 'Team Wiki'];
const dummyMembers = ['Zhack Dtech', 'Maria Lopez', 'John Doe'];

export default function NewTaskModal() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [project, setProject] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const [newSubtask, setNewSubtask] = useState('');

  const resetForm = () => {
    setTitle('');
    setDesc('');
    setAssignee('');
    setPriority('');
    setDueDate('');
    setTags([]);
    setTagInput('');
    setProject('');
    setSubtasks([]);
    setNewSubtask('');
  };

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleRemoveTag = tag => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleAddSubtask = () => {
    if (newSubtask) {
      setSubtasks([...subtasks, newSubtask]);
      setNewSubtask('');
    }
  };

  const handleRemoveSubtask = index => {
    setSubtasks(subtasks.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title) {
      toast({
        title: 'Task title is required',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: 'Task Created',
      description: `Task "${title}" has been created.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    resetForm();
    onClose();
  };

  return (
    <>
      <Button
        leftIcon={<Icon as={FiPlus} />}
        bg="#7551FF"
        color="white"
        _hover={{ bg: '#6a48e6' }}
        size={{ base: 'sm', md: 'md' }}
        flex={{ base: '1', sm: 'initial' }}
        minW={{ base: 'auto', sm: 'initial' }}
        maxW={{ base: '100%', sm: 'initial' }}
        px={{ base: 3, md: 4 }}
        onClick={onOpen}
      >
        Create Task
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel>Task Title</FormLabel>
                <Input
                  placeholder="e.g. Design landing page"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Detailed task info"
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                />
              </FormControl>

              <HStack spacing={4}>
                <FormControl>
                  <FormLabel>Assignee</FormLabel>
                  <Select
                    placeholder="Select member"
                    value={assignee}
                    onChange={e => setAssignee(e.target.value)}
                  >
                    {dummyMembers.map(m => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    placeholder="Set priority"
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </Select>
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Due Date</FormLabel>
                <Input
                  type="date"
                  value={dueDate}
                  onChange={e => setDueDate(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Tags</FormLabel>
                <HStack>
                  <Input
                    placeholder="Enter tag"
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddTag()}
                  />
                  <Button onClick={handleAddTag}>Add</Button>
                </HStack>
                <HStack mt={2} wrap="wrap">
                  {tags.map(tag => (
                    <Tag key={tag} variant="solid" colorScheme="purple">
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                    </Tag>
                  ))}
                </HStack>
              </FormControl>

              <FormControl>
                <FormLabel>Project</FormLabel>
                <Select
                  placeholder="Select project"
                  value={project}
                  onChange={e => setProject(e.target.value)}
                >
                  {dummyProjects.map(p => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Subtasks</FormLabel>
                <HStack>
                  <Input
                    placeholder="Add subtask"
                    value={newSubtask}
                    onChange={e => setNewSubtask(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddSubtask()}
                  />
                  <Button onClick={handleAddSubtask}>Add</Button>
                </HStack>
                <VStack align="start" mt={2}>
                  {subtasks.map((st, i) => (
                    <HStack key={i} w="full" justify="space-between">
                      <Text>{st}</Text>
                      <IconButton
                        size="xs"
                        icon={<CloseIcon />}
                        onClick={() => handleRemoveSubtask(i)}
                        aria-label="Remove subtask"
                      />
                    </HStack>
                  ))}
                </VStack>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="purple" onClick={handleSubmit}>
              Create Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
