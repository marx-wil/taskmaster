import React, {
  useEffect,
  useState,
} from 'react';

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from 'recharts';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import data from './data'; // Assuming the same data source is used
import RenderActiveShape from './RenderActiveShape';

const Charts = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Manage active index state
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  const COLORS = ['#7551FF', '#00C49F'];

  useEffect(() => {
    // Find the index of "Category A" in the data array and set it as activeIndex
    const categoryAIndex = data.findIndex(entry => entry.name === 'Tasks');
    setActiveIndex(categoryAIndex);
  }, []); // Run only on component mount

  const renderLegend = () => {
    return (
      <Box display="flex" justifyContent="center">
        {data.map((entry, index) => (
          <Box key={`legend-${index}`} display="flex" alignItems="center" mr={4}>
            <Box
              bg={COLORS[index % COLORS.length]}
              w={4}
              h={4}
              borderRadius="full"
              mr={2}
            />
            <span>{entry.name}</span>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box>
      <Card bg={cardBg}>
        <CardHeader>
          <Heading size="md" fontFamily="Manrope" fontWeight="600" color={headerColor}>
            Pie Chart
          </Heading>
        </CardHeader>
        <CardBody>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={<RenderActiveShape data={data} />}
                dataKey="value"
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                onMouseEnter={(data, index) => setActiveIndex(index)} // Set active index on mouse enter
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend content={renderLegend} align="center" />
            </PieChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Charts;
