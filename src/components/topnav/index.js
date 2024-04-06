import { Flex } from '@chakra-ui/react';

const style = {
  glass: {
    backgroundImage:
      'linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0) 70%)', // Adjusted gradient with transparency
    backdropFilter: 'blur(10px)', // Increased blur effect
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', // Refined shadow
    position: 'sticky',
    top: 10, // Stick to the top
    zIndex: 10, // Ensure it's above other content
  },
};

const Topnav = (props) => {
  return (
    <Flex style={style.glass} w="100%" p={8} borderRadius="lg" mb="4">
      {/* Add your content here */}
    </Flex>
  );
};

export default Topnav;
