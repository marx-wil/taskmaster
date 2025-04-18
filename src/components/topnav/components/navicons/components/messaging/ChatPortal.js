import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Box } from '@chakra-ui/react';

const ChatPortal = ({ children }) => {
  const portalRef = useRef(null);

  useEffect(() => {
    if (!portalRef.current) {
      const div = document.createElement('div');
      div.id = 'chat-portal';
      document.body.appendChild(div);
      portalRef.current = div;
    }

    return () => {
      if (portalRef.current) {
        document.body.removeChild(portalRef.current);
      }
    };
  }, []);

  if (!portalRef.current) {
    return null;
  }

  return createPortal(
    <Box
      position="fixed"
      bottom={0}
      right={0}
      zIndex={9999}
      pointerEvents="none"
      width="100%"
      height="0"
    >
      <Box pointerEvents="auto">
        {children}
      </Box>
    </Box>,
    portalRef.current
  );
};

export default ChatPortal; 