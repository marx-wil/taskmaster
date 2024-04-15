import { Flex, Spacer, VStack } from '@chakra-ui/react';

import DBreadcrumb from './components/breadcrumb';
import NavHead from './components/NavHead';
import NavIcons from './components/navicons';

const Topnav = props => {
  const style = {
    glass: {
      backdropFilter: 'blur(10px)',
      zIndex: 10,
      position: 'sticky',
      top: '.25em',
    },
  };
  return (
    <>
      <Flex
        display={{ base: 'none', md: 'flex' }}
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
      <VStack
        display={{ base: 'flex', md: 'none' }}
        style={style.glass}
        w="100%"
        py={4}
        mb="4"
        borderRadius="2xl"
        align="left"
      >
        <VStack align="left" spacing="0">
          <DBreadcrumb />
          <NavHead />
        </VStack>
        <Spacer />
        <NavIcons />
      </VStack>
    </>
  );
};

export default Topnav;
