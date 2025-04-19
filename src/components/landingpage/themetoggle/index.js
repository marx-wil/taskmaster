import { Box, IconButton, Icon, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Box position={'fixed'} bottom={5} right={5}>
                    <IconButton
                        rounded={'full'}
                        size={'lg'}
                        fontWeight={'normal'}
                        icon={<Icon as={colorMode === 'dark' ? FaSun : FaMoon} />}
                        aria-label="Scroll to top"
                        onClick={() => {
                            toggleColorMode();
                        }}
                    />
                </Box>
    )
}

export default ThemeToggle;