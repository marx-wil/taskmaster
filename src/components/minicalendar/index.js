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
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const currentMonthColor = useColorModeValue('blue.500', 'blue.200');
  const currentDateColor = useColorModeValue('blue.700', 'blue.300');

  // Get current date
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Dummy data for demonstration
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get days in current month
  const currentDay = currentDate.getDate(); // Get current day

  // Generate an array of days in the month
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear(prevYear => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear(prevYear => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  return (
    <Box>
      <Card minH="100%" mb="0" pb="0" bg={cardBg}>
        <CardHeader>
          <Flex justify="space-between" pb="0" alignItems="center">
            <IconButton icon={<FaAngleLeft />} onClick={goToPreviousMonth} />
            <Heading size="md" fontWeight="bold" color={headerColor}>
              {new Date(currentYear, currentMonth).toLocaleDateString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </Heading>
            <IconButton icon={<FaAngleRight />} onClick={goToNextMonth} />
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
              >
                {day}
              </Heading>
            ))}
            {daysArray.map(day => (
              <Box
                key={day}
                textAlign="center"
                fontWeight="semibold"
                color={day === currentDay ? currentDateColor : 'inherit'}
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
