import { FaEye } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  useColorModeValue,
  Image,
  Button,
  Avatar,
  Text,
  IconButton,
} from '@chakra-ui/react';

const Cards = props => {
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  return (
    <>
      <Box>
        <Card minH="100%" mb="0" pb="0" bg={cardBg}>
          <CardHeader>
            <Flex>
              <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                <Avatar name={props.name} src={props.url} />

                <Box>
                  <Heading size="sm" color={headerColor}>
                    {props.name}
                  </Heading>
                  <Text color={headerColor} opacity="0.7">
                    {props.sub}
                  </Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<ChevronDownIcon />}
              />
            </Flex>
          </CardHeader>
          <Image objectFit="cover" src={props.img} alt="Chakra UI" />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
            <Button
              flex="1"
              variant="ghost"
              leftIcon={<FaEye />}
              color={headerColor}
            >
              View details
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default Cards;
