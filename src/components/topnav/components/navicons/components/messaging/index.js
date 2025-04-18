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
    useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import ChatWindow from './chatwindow';
import ChatPortal from './ChatPortal';

const NavMessages = ({ contents, icon, title }) => {
    const { colorMode } = useColorMode();
    const [activeChats, setActiveChats] = useState([]);
    const [minimizedChats, setMinimizedChats] = useState(new Set());
    const [activeChat, setActiveChat] = useState(null);
    const maxChats = useBreakpointValue({ base: 1, md: 2, xl: 3 });

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

    const handleMessageClick = (content) => {
        const newMessage = {
            id: Date.now(),
            sender: content.header.split(': ')[1],
            content: content.content,
            time: 'Just now',
            avatar: 'https://avatars.githubusercontent.com/u/50767502?v=4'
        };

        // Check if this chat is already open
        if (activeChats.some(chat => chat.sender === newMessage.sender)) {
            // Focus the existing chat
            const existingChat = activeChats.find(chat => chat.sender === newMessage.sender);
            handleFocusChat(existingChat.id);
            // Unminimize if minimized
            if (minimizedChats.has(existingChat.id)) {
                handleMinimizeChat(existingChat.id);
            }
            return;
        }

        setActiveChats(prev => {
            let updatedChats = [...prev];

            // If we're at the max limit, remove the oldest chat
            if (updatedChats.length >= maxChats) {
                updatedChats.shift(); // Remove the oldest chat
            }

            // Add the new chat
            updatedChats.push(newMessage);
            return updatedChats;
        });

        setMinimizedChats(prev => {
            const newSet = new Set(prev);
            newSet.delete(newMessage.id);
            return newSet;
        });
        setActiveChat(newMessage.id);
    };

    const handleCloseChat = (chatId) => {
        setActiveChats(prev => prev.filter(chat => chat.id !== chatId));
        setMinimizedChats(prev => {
            const newSet = new Set(prev);
            newSet.delete(chatId);
            return newSet;
        });
        if (activeChat === chatId) {
            const remainingChats = activeChats.filter(chat => chat.id !== chatId);
            setActiveChat(remainingChats.length > 0 ? remainingChats[remainingChats.length - 1].id : null);
        }
    };

    const handleMinimizeChat = (chatId) => {
        setMinimizedChats(prev => {
            const newSet = new Set(prev);
            if (newSet.has(chatId)) {
                newSet.delete(chatId);
                setActiveChat(chatId);
            } else {
                newSet.add(chatId);
                if (activeChat === chatId) {
                    const visibleChats = activeChats.filter(chat => !newSet.has(chat.id));
                    setActiveChat(visibleChats.length > 0 ? visibleChats[visibleChats.length - 1].id : null);
                }
            }
            return newSet;
        });
    };

    const handleFocusChat = (chatId) => {
        setActiveChat(chatId);
    };

    const displayedChats = activeChats.slice(-maxChats);

    return (
        <>
            <Box position="relative">
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
                                <MenuItem
                                    key={index}
                                    bg="transparent"
                                    p="0"
                                    onClick={() => handleMessageClick(content)}
                                >
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
                                            mh="100%"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Flex
                                                bg="#1B3BBB"
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
                                        <Box>
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
            </Box>
            <ChatPortal>
                {displayedChats.map((chat, index) => (
                    <ChatWindow
                        key={chat.id}
                        message={chat}
                        position={index}
                        onClose={() => handleCloseChat(chat.id)}
                        isMinimized={minimizedChats.has(chat.id)}
                        onMinimize={() => handleMinimizeChat(chat.id)}
                        isActive={chat.id === activeChat}
                        onFocus={() => handleFocusChat(chat.id)}
                        activeChats={displayedChats}
                    />
                ))}
            </ChatPortal>
        </>
    );
};

export default NavMessages;
