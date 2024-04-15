import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  useColorModeValue,
  IconButton,
  Grid,
} from '@chakra-ui/react';
import { useState } from 'react';

const MiniCalendar = props => {
  let dateBgHover = useColorModeValue('#7551FF', '#1B3BBB');
  let navButtonBg = useColorModeValue('#7551FF', '#1B3BBB');
  let navButtonHoverBg = useColorModeValue('#1B3BBB', '#7551FF');
  const headerColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.900');
  const cardBg = useColorModeValue('#ffffff', '#0B1437');

  // Get current date
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Generate an array of days in the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get days in current month
  const currentDay = currentDate.getDate(); // Get current day

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear(prevYear => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear(prevYear => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };
  const navProps = {
    bg: navButtonBg,
    color: '#fff',
    _hover: navButtonHoverBg,
  };

  return (
    <Box>
      <Card minH="100%" mb="0" pb="0" bg={cardBg}>
        <CardHeader>
          <Flex justify="space-between" pb="0" alignItems="center">
            <IconButton
              icon={<FaAngleLeft />}
              onClick={goToPreviousMonth}
              {...navProps}
            />
            <Heading size="md" fontWeight="bold" color={headerColor}>
              {new Date(currentYear, currentMonth).toLocaleDateString(
                'default',
                {
                  month: 'long',
                  year: 'numeric',
                }
              )}
            </Heading>
            <IconButton
              icon={<FaAngleRight />}
              onClick={goToNextMonth}
              {...navProps}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Grid templateColumns="repeat(7, 1fr)" gap="2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <Heading
                key={day}
                size="xs"
                fontWeight="bold"
                textAlign="center"
                color={headerColor}
                textTransform="uppercase"
              >
                {day}
              </Heading>
            ))}
            {daysArray.map(day => (
              <Box
                key={day}
                textAlign="center"
                bg={
                  currentMonth === currentDate.getMonth() && day === currentDay
                    ? dateBgHover
                    : 'inherit'
                }
                color={
                  currentMonth === currentDate.getMonth() && day === currentDay
                    ? 'white'
                    : 'inherit'
                }
                fontWeight={
                  currentMonth === currentDate.getMonth() && day === currentDay
                    ? '800'
                    : '500'
                }
                borderRadius="lg"
                py="2"
                transition=".3s all ease"
                _hover={{
                  bg: dateBgHover,
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                {day}
              </Box>
            ))}
          </Grid>
        </CardBody>
      </Card>
    </Box>
  );
};

export default MiniCalendar;
