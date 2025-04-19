import {
  FaCalendar,
  FaChartArea,
  // FaCircleNotch,
  // FaPager,
  // FaTable,
  FaProjectDiagram,
  FaHistory,
  FaCog,
} from 'react-icons/fa';

const routes = [
  {
    name: 'Dashboard',
    path: '/taskmaster',
    icon: <FaChartArea />,
    isPublic: false,
  },
  {
    name: 'Projects',
    path: '/taskmaster/projects',
    icon: <FaProjectDiagram />,
    isPublic: false,
  },
  {
    name: 'Calendar',
    path: '/taskmaster/calendar',
    icon: <FaCalendar />,
    isPublic: false,
  },
  {
    name: 'Activity',
    path: '/taskmaster/activity',
    icon: <FaHistory />,
    isPublic: false,
  },
  {
    name: 'Settings',
    path: '/taskmaster/settings',
    icon: <FaCog />,
    isPublic: false,
  },
];

export default routes;
