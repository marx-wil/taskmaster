import {
  FaClipboardCheck,
  FaClipboardList,
} from 'react-icons/fa';

const statsData = [
  {
    header: 'Total Tasks',
    main: '50',
    icon: FaClipboardList,
    footer: 'All tasks currently in the system',
  },
  {
    header: 'Completed Tasks',
    main: '30',
    icon: FaClipboardCheck,
    footer: 'Tasks marked as completed',
  },
  {
    header: 'Overdue Tasks',
    main: '5',
    icon: FaClipboardList,
    footer: 'Tasks past their due date',
  },
  {
    header: 'Active Tasks',
    main: '15',
    icon: FaClipboardList,
    footer: 'Tasks currently in progress',
  },
];

export default statsData;
