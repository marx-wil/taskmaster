import React from 'react';
import {
  Box,
  Td,
  Tr,
  Th,
  Table,
  TableContainer,
  Thead,
  Tbody,
  useColorModeValue,
  Card,
  CardHeader,
  Heading,
  Badge,
  CardBody,
  useBreakpointValue,
} from '@chakra-ui/react';

const BasicTable = ({ header, data, theaderdata }) => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  const textColor = useColorModeValue('#1B2559', '#ffffff'); const overflowX = useBreakpointValue({ base: 'auto', sm: 'hidden' });

  return (
    <Box overflowX="auto">
      <Card bg={cardBg}>
        <CardHeader>
          <Heading
            size="md"
            fontFamily="Manrope"
            fontWeight="600"
            color={headerColor}
          >
            {header}
          </Heading>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="unstyled" mw="100%">
              <Thead
                borderBottom="0.01em solid"
                borderColor="#E2E8F0"
                letterSpacing="0.05em"
                fontSize="sm"
                color={textColor}
                opacity="0.6"
              >
                <Tr>
                  {theaderdata.map((header, index) => (
                    <Th key={index}>{header}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody fontWeight="700" fontSize="sm" color={textColor}>
                {data.map((item, index) => (
                  <Tr key={index}>
                    <Td p="6">{item.name}</Td>
                    <Td p="6" textAlign="center">
                      {item.status.toLowerCase() === 'finished' ? (
                        <Badge colorScheme="green" p="2" borderRadius="md">
                          Finished
                        </Badge>
                      ) : item.status.toLowerCase() === 'unfinished' ? (
                        <Badge colorScheme="red" p="2" borderRadius="md">
                          Unfinished
                        </Badge>
                      ) : (
                        <Badge colorScheme="purple" p="2" borderRadius="md">
                          Err
                        </Badge>
                      )}
                    </Td>
                    <Td p="6">
                      {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
                    </Td>
                    <Td p="6">{item.dateTime}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Box>
  );
};

export default BasicTable;
