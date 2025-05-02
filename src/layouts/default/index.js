import '../../styles/main.scss';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';

const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    let mainBg = useColorModeValue('#F4F7FE', '#111C44');

    const componentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    };

    return (
      <Flex>
        <Box className="sidenav">
          <Sidenav />
        </Box>
        <Box bg={mainBg} className="main" py="4" px="4" overflowX="hidden">
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
        </Box>
      </Flex>
    );
  };

  return DefaultFunction;
};

export default Layout;
