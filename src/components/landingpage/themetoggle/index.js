import { Box, IconButton, Icon, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const iconRef = useRef(null);

    const handleThemeToggle = () => {
        // Create a timeline for smooth animation sequence
        const tl = gsap.timeline();
        
        tl.to(iconRef.current, {
            rotate: 360,
            scale: 0.5,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => toggleColorMode()
        })
        .to(iconRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "elastic.out(1, 0.3)"
        });
    };

    return (
        <Box position={'fixed'} bottom={5} right={5}>
            <IconButton
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                bg={colorMode === 'dark' ? 'white' : '#7551FF'}
                color={colorMode === 'dark' ? '#7551FF' : 'white'}
                _hover={{
                    bg: colorMode === 'dark' ? 'gray.100' : '#5941CC',
                }}
                icon={
                    <Box ref={iconRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon 
                            as={colorMode === 'dark' ? FaSun : FaMoon}
                            fontSize="20px"
                        />
                    </Box>
                }
                aria-label="Toggle theme"
                onClick={handleThemeToggle}
                transition="background 0.3s ease"
            />
        </Box>
    );
};

export default ThemeToggle;