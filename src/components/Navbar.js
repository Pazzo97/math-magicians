import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <ul className="navList">
        <li key={links[0].id}>
          <NavLink to={links[0].path} className="active-link">
            {links[0].text}
          </NavLink>
          <span>|</span>
        </li>
        <li key={links[1].id}>
          <NavLink to={links[1].path} className="active-link">
            {links[1].text}
          </NavLink>
          <span>|</span>
        </li>
        <li key={links[2].id}>
          <NavLink to={links[2].path} className="active-link">
            {links[2].text}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
