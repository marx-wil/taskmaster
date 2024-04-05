import {
  FaChartArea,
  FaTable,
} from 'react-icons/fa';

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <FaChartArea />,
  },
  {
    name: 'Tables',
    path: '/tables',
    icon: <FaTable />,
  },
  {
    name: 'Calendar',
    path: '/calendar',
    icon: <FaTable />,
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: <FaTable />,
  },
  {
    name: 'Forms',
    path: '/forms',
    icon: <FaTable />,
  },
];

export default routes;
