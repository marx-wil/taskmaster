import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  Avatar,
  useColorModeValue,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { FaPaperclip, FaSmile, FaPaperPlane, FaMinus, FaTimes, FaExpand } from 'react-icons/fa';

const ChatWindow = ({ 
  message, 
  onClose, 
  isMinimized, 
  onMinimize, 
  position = 0, 
  isActive, 
  onFocus,
  activeChats = [] 
}) => {
  const [newMessage, setNewMessage] = useState('');
  
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
  const borderColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(255,255,255,0.1)');
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.4)');
  const innerShadowColor = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.05)');
  const headerBg = useColorModeValue('rgba(255,255,255,0.98)', 'rgba(17,28,68,0.98)');
  const embossedBg = useColorModeValue(
    'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,242,248,1) 100%)',
    'linear-gradient(180deg, rgba(17,28,68,1) 0%, rgba(11,20,55,1) 100%)'
  );
  const messageBubbleBg = useColorModeValue('#F0F2F8', '#1B2559');


  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  // Calculate position from right to left
  const CHAT_WIDTH = 360;
  const SPACE_BETWEEN = 20; // Consistent spacing between chats
  const rightPosition = (activeChats.length - position - 1) * (CHAT_WIDTH + SPACE_BETWEEN);

  const commonBoxStyles = {
    position: "absolute",
    bottom: 0,
    right: rightPosition,
    bg: embossedBg,
    borderRadius: "lg",
    borderBottomRadius: "0",
    border: "1px solid",
    borderColor: isActive ? 'purple.500' : borderColor,
    boxShadow: `
      0 -2px 15px ${shadowColor},
      inset 0 2px 3px ${innerShadowColor},
      0 0 0 1px ${isActive ? 'rgba(128, 90, 213, 0.3)' : borderColor}
    `,
    backdropFilter: "blur(8px)",
    transition: "all 0.2s",
    zIndex: isActive ? 1000 : 999 - position,
  };

  if (isMinimized) {
    return (
      <Box
        {...commonBoxStyles}
        w="320px"
        cursor="pointer"
        onClick={(e) => {
          e.stopPropagation();
          onMinimize();
          onFocus();
        }}
        _hover={{ 
          transform: 'translateY(-4px)',
          boxShadow: `
            0 -4px 20px ${shadowColor},
            inset 0 2px 3px ${innerShadowColor},
            0 0 0 1px ${isActive ? 'rgba(128, 90, 213, 0.3)' : borderColor}
          `
        }}
      >
        <Flex
          p={3}
          align="center"
          justify="space-between"
          borderTop="3px solid"
          borderColor="purple.500"
          bg={headerBg}
          backdropFilter="blur(12px)"
          borderRadius="lg"
          borderBottomRadius="0"
          opacity={isActive ? 1 : 0.8}
          _hover={{ opacity: 1 }}
        >
          <Flex align="center" gap={2}>
            <Avatar size="sm" name={message?.sender} src={message?.avatar} />
            <Text color={contentTextColor} fontWeight="bold" noOfLines={1}>
              {message?.sender}
            </Text>
          </Flex>
          <HStack>
            <IconButton
              icon={<FaExpand />}
              size="sm"
              variant="ghost"
              color={contentTextColor}
              onClick={(e) => {
                e.stopPropagation();
                onMinimize();
                onFocus();
              }}
            />
            <IconButton
              icon={<FaTimes />}
              size="sm"
              variant="ghost"
              color={contentTextColor}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            />
          </HStack>
        </Flex>
      </Box>
    );
  }

  return (
    <Box
      {...commonBoxStyles}
      w="320px"
      h="400px"
      display="flex"
      flexDirection="column"
      onClick={(e) => {
        e.stopPropagation();
        onFocus();
      }}
      _hover={{ 
        boxShadow: `
          0 -4px 20px ${shadowColor},
          inset 0 2px 3px ${innerShadowColor},
          0 0 0 1px ${isActive ? 'rgba(128, 90, 213, 0.3)' : borderColor}
        `
      }}
    >
      <Flex
        p={3}
        borderBottom="1px"
        borderColor={borderColor}
        align="center"
        justify="space-between"
        borderTop="3px solid"
        borderTopColor="purple.500"
        bg={headerBg}
        backdropFilter="blur(12px)"
        borderRadius="lg"
        borderBottomRadius="0"
        opacity={isActive ? 1 : 0.8}
        _hover={{ opacity: 1 }}
      >
        <Flex align="center" gap={2}>
          <Avatar size="sm" name={message?.sender} src={message?.avatar} />
          <Text color={contentTextColor} fontWeight="bold" noOfLines={1}>
            {message?.sender}
          </Text>
        </Flex>
        <HStack>
          <IconButton
            icon={<FaMinus />}
            size="sm"
            variant="ghost"
            color={contentTextColor}
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
          />
          <IconButton
            icon={<FaTimes />}
            size="sm"
            variant="ghost"
            color={contentTextColor}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
        </HStack>
      </Flex>

      <Box 
        flex="1" 
        overflowY="auto" 
        p={4}
        sx={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: borderColor,
            borderRadius: '24px',
          },
        }}
      >
        <VStack spacing={4} align="stretch">
          <Flex justify="flex-start">
            <Box
              maxW="70%"
              bg={messageBubbleBg}
              p={3}
              borderRadius="lg"
              borderTopLeftRadius="none"
              boxShadow={`
                0 2px 5px ${shadowColor},
                inset 0 1px 2px ${innerShadowColor}
              `}
            >
              <Text color={contentTextColor}>{message?.content}</Text>
              <Text fontSize="xs" color="gray.500" mt={1}>
                {message?.time}
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      <Divider opacity={0.1} />
      <Flex p={4} gap={2}>
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          bg={messageBubbleBg}
          borderColor={borderColor}
          boxShadow={`inset 0 2px 4px ${shadowColor}`}
          _focus={{ 
            borderColor: 'purple.500',
            boxShadow: `inset 0 2px 4px ${shadowColor}, 0 0 0 1px purple.500`
          }}
          _hover={{
            borderColor: 'purple.400'
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <HStack>
          <IconButton
            icon={<FaPaperclip />}
            aria-label="Attach file"
            variant="ghost"
            color={contentTextColor}
            _hover={{ bg: messageBubbleBg }}
          />
          <IconButton
            icon={<FaSmile />}
            aria-label="Emoji"
            variant="ghost"
            color={contentTextColor}
            _hover={{ bg: messageBubbleBg }}
          />
          <IconButton
            icon={<FaPaperPlane />}
            aria-label="Send message"
            colorScheme="purple"
            onClick={handleSendMessage}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default ChatWindow; 