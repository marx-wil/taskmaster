import { Flex, Spacer, Link, Text, useColorModeValue } from '@chakra-ui/react';
const Footer = () => {
  let textColor = useColorModeValue('#0B1437', '#fff');
  const common = {
    color: textColor,
    style: { fontWeight: '700', opacity: 0.7, textDecoration: 'none' },
  };

  return (
    <>
      <Flex pt="4">
        <Text {...common}>
          &copy; SysGo 2024, by <Link>Zhack</Link>
        </Text>
        <Spacer />
        <Flex gap="4">
          <Link px="4" {...common}>
            SysGo
          </Link>
          <Link px="4" {...common}>
            Documentation
          </Link>
          <Link px="4" {...common}>
            Legal
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
