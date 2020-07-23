import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

export const Nav = () => {
  return (
    <aside>
      <nav id="menu-container">
        <ul className="flex flexColumn alignItemsCenter justifyAround">
          <li className="home flex alignItemsCenter justifyCenter flexOne menu-item">
            <Link className="linkItem" to='/'>Home</Link>
          </li>
          <li className="stream flex alignItemsCenter justifyCenter flexOne menu-item">
            <Link className="linkItem" to='/stream'>Stream</Link>
          </li>
          <li className="about flex alignItemsCenter justifyCenter flexOne menu-item">
            <Link className="linkItem" to='/about'>About</Link>
          </li>
          <li className="gallery flex alignItemsCenter justifyCenter flexOne menu-item">
            <Link className="linkItem" to='/gallery'>Gallery</Link>
          </li>
          <li className="partner flex alignItemsCenter justifyCenter flexOne menu-item">
            <Link className="linkItem" to='/partner'>Partner</Link>
          </li>
          <li className="contact flex alignItemsCenter justifyCenter flexOne menu-item">
            <Link className="linkItem" to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}