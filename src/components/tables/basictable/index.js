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
  CardBody,
} from '@chakra-ui/react';

const BasicTable = ({ header, data }) => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  return (
    <Box>
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
            <Table variant="unstyled">
              <Thead
                borderBottom="0.01rem solid"
                borderColor="rgba(128,128,128,.4)"
                color="#A0AEC0"
                letterSpacing="0.05em"
                fontSize="sm"
              >
                <Tr>
                  <Th>Lorem</Th>
                  <Th>Ipsum</Th>
                  <Th>Dolor</Th>
                </Tr>
              </Thead>
              <Tbody fontWeight="600" fontSize="sm">
                {data.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.name}</Td>
                    <Td>{item.text}</Td>
                    <Td isNumeric>{item.numberrange}</Td>
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
