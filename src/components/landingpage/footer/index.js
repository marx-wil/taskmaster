'use client'

import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const Logo = (props) => {
    return (
        <Text fontSize={'2xl'} fontWeight={'bold'} className='poppins-bold'>TaskMaster</Text>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function LandingFooter() {
    const bgColor = useColorModeValue('#ffffff', '#1F1F1F')
    const textColor = useColorModeValue('#0B1437', '#ffffff')
    return (
        <Box
            bg={bgColor}
            color={textColor}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo color={textColor} />
                        </Box>
                        <Text fontSize={'sm'} className='poppins-regular'>© 2025 TaskMaster. All rights reserved</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaFacebook />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader className='poppins-semibold' fontWeight={'600'}>Company</ListHeader>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            About us
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Blog
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Contact us
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Pricing
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Testimonials
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader className='poppins-semibold' fontWeight={'600'}>Support</ListHeader>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Help Center
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Terms of Service
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Legal
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Privacy Policy
                        </Box>
                        <Box as="a" href={'#'} className='poppins-regular'>
                            Satus
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader className='poppins-semibold' fontWeight={'800'}>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('#7551FF', '#7551FF')}
                                color={useColorModeValue('white', 'white')}
                                _hover={{
                                    bg: '#5941CC',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}