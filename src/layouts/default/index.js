import '../../styles/main.scss';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex, useColorModeValue, useToast } from '@chakra-ui/react';

import Sidenav from '../../components/sidenav';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';

import { jwtDecode } from 'jwt-decode';
const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    const [isAuth, setIsAuth] = useState(false);
    let mainBg = useColorModeValue('#F4F7FE', '#111C44');
    const toast = useToast();
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('taskmaster_token');
      if (!token) {
        toast({
          title: 'Not logged in',
          description: 'Please login to continue',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        navigate('/login');
        return;
      }

      try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
          localStorage.removeItem('taskmaster_token');
          toast({
            title: 'Session expired',
            description: 'Please login again',
            status: 'warning',
            duration: 5000,
            isClosable: true,
          });
          navigate('/login');
        } else {
          setIsAuth(true);
        }
      } catch {
        localStorage.removeItem('taskmaster_token');
        navigate('/login');
      }
    }, [navigate, toast]);
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
    if (!isAuth) {
      return null;
    }
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
