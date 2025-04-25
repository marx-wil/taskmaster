import {
  FaCode,
  FaPager,
} from 'react-icons/fa';

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import Taskcard from '../../../../components/taskcard';

const Taskslist = props => {
  const headerColor = useColorModeValue('#0B1437', '#ffffff');
  const cardBg = useColorModeValue('#ffffff', '#0B1437');
  const linkColor = useColorModeValue(
    'rgba(11, 20, 55,.7)',
    'rgba(255,255,255,.7'
  );
  const DesignContributors = [
    {
      name: 'Zhack DTech',
      url: 'https://avatars.githubusercontent.com/u/50767502?v=4',
      role: 'UX',
    },
    {
      name: 'Glaiza Barugo',
      url: 'https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/363296663_222519860760093_594093628018295868_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjU1YRB_nS55kkNYN0rrVbcf6L0uyAhClx_ovS7ICEKfLdGRVtfSU90kMY6lZTZ3HPwGrL-6l8B-lgxYZ7Yll6&_nc_ohc=qQTXbO4UMSIAb6qlVZF&_nc_ht=scontent.fmnl9-4.fna&cb_e2o_trans=t&oh=00_AfBJ6F8OpUlc3WAc44AzE3yRtIHEvuiD0-8T_tsOXGZ1jQ&oe=661CF058',
      role: 'UX',
    },
    {
      name: 'Dijey Abadier',
      url: 'https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/361612970_9572018246206090_3416638925633026292_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHgYw56bxra3-OWBJ18zM5P1PI_dH6vOCzU8j90fq84LNXTAXVOfBQJVnXH1R1jWrlwR2oHrPe-Y7UUG9zGIAmQ&_nc_ohc=Xx4Yrx8LAjsAb7P3Bmw&_nc_ht=scontent.fmnl9-4.fna&cb_e2o_trans=t&oh=00_AfD-AapOOajcZL67EhTYbdDwWfJ5SDmoM1C1UKImtGYv8A&oe=661CFB8E',
      role: 'Designer',
    },
    {
      name: 'Israel Breta',
      url: 'https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/311092704_5485674428166550_9128903111187655293_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF5-maKfmMqWtNZeNcIh6WHLGNl06BI2O4sY2XToEjY7joGzuEf6PQyPeQBH_co4LpHvIJAlLFL7R0XLe6JQO6U&_nc_ohc=AoL-_R6TBU0Ab57ul2R&_nc_ht=scontent.fmnl9-2.fna&cb_e2o_trans=t&oh=00_AfAwgqHYsqlrpGO9GU-xQ5FVrZ5nboICP2-jfnNUPsiQfg&oe=661D1A95',
      role: 'Designer',
    },
  ];
  const DevelopmentContributors = [
    {
      name: 'Zhack DTech',
      url: 'https://avatars.githubusercontent.com/u/50767502?v=4',
      role: 'Developer',
    },
  ];
  return (
    <>
      <Box>
        <Card bg={cardBg} boxShadow="none">
          <CardHeader pt="4">
            <Heading
              size="md"
              fontFamily="Manrope"
              fontWeight="600"
              color={headerColor}
            >
              Tasks
            </Heading>
          </CardHeader>
          <CardBody py="0" px="4">
            <Taskcard
              header="Development"
              main="Task Master"
              uicon={FaCode}
              contributors={DevelopmentContributors}
            />
            <Taskcard
              header="Design"
              main="Task Master"
              uicon={FaPager}
              contributors={DesignContributors}
            />
          </CardBody>
          <CardFooter p="2">
            <Flex alignItems="center" justifyContent="center" w="100%">
              <Link color={linkColor} fontWeight="600">
                see more...
              </Link>
            </Flex>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default Taskslist;
