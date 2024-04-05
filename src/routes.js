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
];

export default routes;
