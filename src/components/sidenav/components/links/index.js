import React from 'react';

import { NavLink } from 'react-router-dom';

import lists from '../../../../routes/';

const Sidenav = () => {
  return (
    <div className="sidebar">
      {lists.map(list => {
        return (
          <NavLink
            to={list.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {list.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidenav;
