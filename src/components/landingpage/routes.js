const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    children: [
      {
        label: 'TaskMaster',
        subLabel: 'Our mission.',
        href: 'about-tm',
      },
      {
        label: 'SysGo Solutions',
        subLabel: 'Our goals and mission.',
        href: 'about-sg',
      },
    ],
  },
  {
    label: 'Features',
    children: [
      {
        label: 'TaskMaster',
        subLabel: 'Our features.',
        href: 'features-tm',
      },
      {
        label: 'SysGo Solutions',
        subLabel: 'What we offer.',
        href: 'features-sg',
      },
    ],
  },
  {
    label: 'Contact',
    href: 'contact',
  },
];

export default NAV_ITEMS;
