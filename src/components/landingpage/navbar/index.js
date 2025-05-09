'use client';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import NAV_ITEMS from '../routes';
import { useNavigate, useLocation } from 'react-router-dom';
export default function LandingNavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue('#ffffff', '#0D1117');
  const textColor = useColorModeValue('#1e1e1e', '#E6EDF3');
  const borderColor = useColorModeValue('#E5E7EB', '#30363D');
  const secondaryTextColor = useColorModeValue('#7c3aed', '#a970ff');
  const navigate = useNavigate();
  return (
    <Box bg={bgColor}>
      <Flex
        bg={bgColor}
        color={textColor}
        minH={'60px'}
        py={{ base: 2, md: 6 }}
        px={{ base: 4, md: 8 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={borderColor}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            color={textColor}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          alignItems={'center'}
        >
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            className="poppins-bold"
            letterSpacing={'1'}
            fontWeight={'bold'}
            lineHeight={'tall'}
            color={textColor}
          >
            Task
            <Text
              as={'span'}
              fontSize={{ base: '2xl', md: '3xl' }}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              className="poppins-bold"
              letterSpacing={'1'}
              fontWeight={'bold'}
              lineHeight={'tall'}
              color={secondaryTextColor}
            >
              Master
            </Text>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
            color={textColor}
            className="poppins-bold"
            _hover={{ color: useColorModeValue('#6D28D9', '#6E40C9') }}
            onClick={() => navigate('/login')}
          >
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            className="poppins-bold"
            bg={useColorModeValue('#6D28D9', '#6E40C9')}
            href={'#'}
            _hover={{
              bg: '#A970FF',
            }}
            onClick={() => navigate('/register')}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkColor = useColorModeValue('#0B1437', '#ffffff');
  const linkHoverColor = useColorModeValue('#6D28D9', '#6E40C9');
  const activeLinkColor = useColorModeValue('#6D28D9', '#A970FF');
  const popoverContentBgColor = useColorModeValue('#F5F7FA', '#161B22');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => {
        const isActive = currentPath === navItem.href;

        return (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={isActive ? activeLinkColor : linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map(child => {
                      const isChildActive = currentPath === `/${child.href}`;
                      return (
                        <DesktopSubNav
                          key={child.label}
                          {...child}
                          isActive={isChildActive}
                        />
                      );
                    })}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, isActive }) => {
  const bgActiveColor = useColorModeValue('#6D28D9', '#6E40C9');
  return (
    <Box
      as="a"
      href={`/${href}`}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      bg={isActive ? bgActiveColor : 'transparent'}
      _hover={{ bg: useColorModeValue('#7551FF10', '#7551FF20') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#7551FF' }}
            color={isActive ? '#7551FF' : 'inherit'}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'#7551FF'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('#ffffff', '#0D1117')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue('#0B1437', '#ffffff');

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={textColor}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
            color={textColor}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue(
            'gray.200',
            'rgba(255, 255, 255, 0.16)'
          )}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Box
                as="a"
                key={child.label}
                py={2}
                href={child.href}
                color={textColor}
                _hover={{ color: '#7551FF' }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
