import {
  FaCalendar,
  FaChartArea,
  FaCircleNotch,
  FaPager,
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
    icon: <FaCalendar   />,
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: <FaCircleNotch   />,
  },
  {
    name: 'Forms',
    path: '/forms',
    icon: <FaPager  />,
  },
];

export default routes;
