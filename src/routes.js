import {
  FaCalendar,
  FaChartArea,
  FaCircleNotch,
  FaPager,
  FaTable,
  FaProjectDiagram,
  FaHistory,
  FaCog,
} from 'react-icons/fa';

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <FaChartArea />,
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: <FaProjectDiagram />,
  },
  {
    name: 'Calendar',
    path: '/calendar',
    icon: <FaCalendar />,
  },
  {
    name: 'Activity',
    path: '/activity',
    icon: <FaHistory />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <FaCog />,
  },
  {
    name: 'Tables',
    path: '/tables',
    icon: <FaTable />,
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: <FaCircleNotch />,
  },
  {
    name: 'Forms',
    path: '/forms',
    icon: <FaPager />,
  },
];

export default routes;
