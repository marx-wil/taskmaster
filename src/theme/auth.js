import { useColorModeValue } from '@chakra-ui/react';

export const useAuthTheme = () => {
  // Colors
  const bgColor = useColorModeValue('#2D3748', '#1A202C');
  const textColor = useColorModeValue('#E2E8F0', '#E2E8F0');
  const primaryColor = '#7928CA';
  const accentColor = '#4E36AA';
  const inputBgColor = 'rgba(45, 55, 72, 0.5)';
  const borderColor = 'rgba(255, 255, 255, 0.2)';
  const hoverBorderColor = 'rgba(255, 255, 255, 0.3)';

  // Glass effect for mobile
  const glassEffect = {
    background: 'rgba(26, 32, 44, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  };

  // Input styles
  const inputStyles = {
    bg: inputBgColor,
    border: '1px solid',
    borderColor: borderColor,
    color: textColor,
    _placeholder: { color: 'gray.400' },
    _hover: {
      borderColor: hoverBorderColor,
    },
    _focus: {
      borderColor: primaryColor,
      boxShadow: `0 0 0 1px ${primaryColor}`,
    },
    fontSize: 'md',
    height: '50px',
    borderRadius: 'md',
  };

  // Form label styles
  const labelStyles = {
    color: textColor,
    fontSize: 'sm',
    fontWeight: '500',
    mb: 2,
  };

  // Required mark styles
  const requiredStyles = {
    color: 'red.500',
    ml: 1,
  };

  // Button styles
  const buttonStyles = {
    width: '100%',
    height: '50px',
    backgroundColor: primaryColor,
    color: 'white',
    _hover: {
      backgroundColor: accentColor,
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      transform: 'translateY(0)',
      backgroundColor: primaryColor,
    },
    _disabled: {
      backgroundColor: `${primaryColor}80`,
      cursor: 'not-allowed',
      _hover: {
        transform: 'none',
        boxShadow: 'none',
      },
    },
    transition: 'all 0.2s',
    fontSize: 'md',
    fontWeight: 'semibold',
    borderRadius: 'md',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Link styles
  const linkStyles = {
    color: primaryColor,
    _hover: {
      color: accentColor,
      textDecoration: 'none',
    },
    fontWeight: 'semibold',
    transition: 'all 0.2s',
  };

  // Heading styles
  const headingStyles = {
    color: textColor,
    fontSize: '2xl',
    fontWeight: 'bold',
    mb: 2,
  };

  // Subheading styles
  const subheadingStyles = {
    color: 'gray.400',
    fontSize: 'md',
    mb: 6,
  };

  return {
    bgColor,
    textColor,
    primaryColor,
    accentColor,
    glassEffect,
    inputStyles,
    buttonStyles,
    linkStyles,
    labelStyles,
    requiredStyles,
    headingStyles,
    subheadingStyles,
  };
};
