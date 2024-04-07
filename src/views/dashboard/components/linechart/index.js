import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

// Import data from data.js
import data from './data';

const Charts = props => {
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const toolTipBg = useColorModeValue('#ffffff', '#0B1437');
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  const textColor = useColorModeValue('#0B1437', '#ffffff');
  const toolTipBorder = useColorModeValue('#0B1437', '#ffffff');

  // Determine whether to rotate Y-axis labels based on breakpoint
  const rotateYAxisLabels = useBreakpointValue({ base: true, md: false });

  // Determine whether tooltip should be centered based on breakpoint
  const centerTooltip = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box>
      <Card bg={cardBg}>
        <CardHeader>
          <Heading
            size="md"
            fontFamily="Manrope"
            fontWeight="600"
            color={headerColor}
          >
            Line Chart
          </Heading>
        </CardHeader>

        <CardBody>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                padding={{ left: 10, right: 10 }} // Reduced padding for smaller screens
                stroke={textColor}
                tickLine={false}
                interval={0} // Display all labels
              />
              <YAxis
                stroke={textColor}
                tickLine={false}
                domain={[0, 5000]}
                // Conditionally apply rotation to Y-axis labels
                angle={rotateYAxisLabels ? -90 : 0}
                textAnchor="end"
                hide={useBreakpointValue({ base: true, md: false })} // Hide Y-axis on mobile devices
              />
              <Tooltip
                content={({ label, payload }) => {
                  // Customizing tooltip content and labels
                  return (
                    <div
                      style={{
                        background: toolTipBg,
                        padding: '10px',
                        borderRadius: '8px',
                        boxShadow:
                          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        border: '1px solid',
                        borderColor: toolTipBorder,
                        textAlign: centerTooltip ? 'center' : 'left', // Center tooltip content when in mobile mode
                      }}
                    >
                      <p
                        style={{
                          color: textColor,
                          margin: '0',
                          fontWeight: '800',
                        }}
                      >
                        {label}
                      </p>
                      {payload.map((entry, index) => (
                        <p
                          key={index}
                          style={{ color: textColor, margin: '0' }}
                        >
                          {`${entry.name}: ${entry.value}`}
                        </p>
                      ))}
                    </div>
                  );
                }}
              />
              <Line
                type="monotone"
                dataKey="TotalTasks"
                stroke="#5941CC"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="FinishedTasks"
                stroke="#4CAF50"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
      </Box>
    </>
  );
};

export default Charts;
