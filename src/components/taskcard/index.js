import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tooltip,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react';

const Taskcard = ({ header, main, uicon, contributors }) => {
  const statBg = useColorModeValue('#ffffff', '#0B1437');
  const tooltipBg = useColorModeValue('#ffffff', '#0B1437');
  const contentTextColor = useColorModeValue('#0B1437', '#ffffff');
  const tooltipColor = useColorModeValue('#0B1437', '#ffffff');
  return (
    <>
      <Box
        boxShadow="lg"
        p="4"
        borderRadius="lg"
        bg={statBg}
        mb="4"
        border="1px solid"
        borderColor="rgba(128,128,128,.4)"
      >
        <Stat>
          <StatLabel
            style={{
              fontWeight: '700',
              opacity: '0.9',
            }}
            color={contentTextColor}
          >
            {header}
          </StatLabel>
          <Flex justifyContent="space-between" alignItems="center">
            <StatNumber
              style={{
                fontWeight: '700',
                fontFamily: 'Manrope',
              }}
              color={contentTextColor}
            >
              {main}
            </StatNumber>
            <Flex
              alignItems="center"
              bg="#7551FF"
              color="white"
              p="4"
              borderRadius="lg"
            >
              <Icon as={uicon} />
            </Flex>
          </Flex>
          <StatHelpText color={contentTextColor} style={{ fontWeight: '400' }}>
            <AvatarGroup max={5}>
              {contributors.map((contributor, index) => (
                <WrapItem>
                  <Tooltip
                    label={contributor.role + ': ' + contributor.name}
                    key={index}
                    bg={tooltipBg}
                    color={tooltipColor}
                    px="2"
                    py="4"
                    borderRadius="md"
                    fontWeight="700"
                    border="1px solid"
                    borderColor="rgba(128,128,128,.4)"
                  >
                    <Avatar
                      size="xs"
                      key={index}
                      name={contributor.name}
                      src={contributor.url}
                    />
                  </Tooltip>
                </WrapItem>
              ))}
            </AvatarGroup>
          </StatHelpText>
        </Stat>
      </Box>
    </>
  );
};
export default Taskcard;
