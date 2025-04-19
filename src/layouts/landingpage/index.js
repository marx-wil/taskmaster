import '../../styles/main.scss';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, useColorModeValue} from '@chakra-ui/react';
import ThemeToggle from '../../components/landingpage/themetoggle';
import Topnav from '../../components/landingpage/navbar';
import Footer from '../../components/footer';

const Layout = Component => {
    const DefaultFunction = ({ ...props }) => {
        let mainBg = useColorModeValue('#F4F7FE', '#0B1437');
        const componentVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            },
            exit: {
                opacity: 0,
                y: -20,
                transition: {
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            }
        };

        return (
            <Box bg={mainBg} style={{ overflowX: 'hidden' }}>
                <Topnav />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={window.location.pathname}
                        variants={componentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ width: '100%' }}
                    >
                        <Component {...props} />
                    </motion.div>
                </AnimatePresence>
                <Footer />
                <ThemeToggle />
            </Box>
        );
    };

    return DefaultFunction;
};

export default Layout;
