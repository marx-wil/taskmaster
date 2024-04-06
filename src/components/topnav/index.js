import {
  Flex,
  Spacer,
  VStack,
} from '@chakra-ui/react';

import DBreadcrumb from './components/breadcrumb';
import NavHead from './components/NavHead';
import NavIcons from './components/navicons';

const Topnav = props => {
  const style = {
    glass: {
      backdropFilter: 'blur(10px)', // Increased blur effect
      // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', // Refined shadow
      position: 'sticky',
      top: '1.4rem', // Stick to the top
      zIndex: 10, // Ensure it's above other content
    },
  };
  return (
    <Flex
      style={style.glass}
      w="100%"
      py={4}
      mb="4"
      borderRadius="2xl"
      align="center"
    >
      <VStack align="left" spacing="0">
        <DBreadcrumb />
        <NavHead />
      </VStack>
      <Spacer />
      <NavIcons />
    </Flex>
  );
};

export default Topnav;
