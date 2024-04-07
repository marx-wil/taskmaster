import {
  Box,
  Flex,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

const StatsCard = props => {
  const statBg = useColorModeValue('#ffffff', '#0B1437');
  const statTextColor = useColorModeValue('#0B1437', '#ffffff');
  return (
    <>
      <Box boxShadow="lg" p="4" borderRadius="lg" bg={statBg}>
        <Stat>
          <StatLabel
            style={{
              fontWeight: '700',
              opacity: '0.9',
            }}
            color={statTextColor}
          >
            {props.header}
          </StatLabel>
          <Flex justifyContent="space-between" alignItems="center">
            <StatNumber
              style={{
                fontWeight: '700',
                fontFamily: 'Manrope',
              }}
              color={statTextColor}
            >
              {props.main}
            </StatNumber>
            <Flex
              alignItems="center"
              bg="#7551FF"
              color="white"
              p="4"
              borderRadius="lg"
            >
              <Icon as={props.icon} />
            </Flex>
          </Flex>
          <StatHelpText color={statTextColor} style={{ fontWeight: '400' }}>
            {props.footer}
          </StatHelpText>
        </Stat>
      </Box>
    </>
  );
};
export default StatsCard;
