import '../../styles/main.scss';

import React, { useEffect, useRef } from 'react';
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { gsap } from 'gsap';
import ThemeToggle from '../../components/landingpage/themetoggle';
import Topnav from '../../components/landingpage/navbar';
import LandingFooter from '../../components/landingpage/footer';

const Layout = Component => {
  const DefaultFunction = ({ ...props }) => {
    const { colorMode } = useColorMode();
    const mainRef = useRef(null);
    const componentRef = useRef(null);

    const mainBg = useColorModeValue('#F5F7FA', '#161B22');

    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(
        mainRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 }
      ).fromTo(
        componentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
        },
        '-=0.4'
      );
    }, []);

    useEffect(() => {
      const bgColor = colorMode === 'light' ? '#F5F7FA' : '#161B22';
      const tl = gsap.timeline();

      tl.to(mainRef.current, {
        backgroundColor: bgColor,
        duration: 0.6,
        ease: 'power2.inOut',
      });

      tl.fromTo(
        componentRef.current.children,
        { opacity: 0.6, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    }, [colorMode]);

    return (
      <>
        <Box ref={mainRef} bg={mainBg} style={{ overflowX: 'hidden' }}>
          <Topnav />
          <div ref={componentRef} style={{ width: '100%' }}>
            <Component {...props} />
          </div>
          <LandingFooter />
        </Box>

        <ThemeToggle />
      </>
    );
  };

  return DefaultFunction;
};

export default Layout;
