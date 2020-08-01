import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

export const Nav = () => {
  return (
    <aside>
      <nav id="menu-container">
        <ul className="flex flexColumn alignItemsCenter justifyAround">
          <Link className="home flex alignItemsCenter justifyCenter flexOne menu-item" to='/'>
            <li className="linkItem ">Home</li>
          </Link>
            <Link className="stream flex alignItemsCenter justifyCenter flexOne menu-item" to='/stream'>
              <li className="linkItem ">Stream</li>
            </Link>
            <Link className="about flex alignItemsCenter justifyCenter flexOne menu-item" to='/about'>
              <li className="linkItem ">About</li>
            </Link>
          <Link className="gallery flex alignItemsCenter justifyCenter flexOne menu-item" to='/gallery'>
            <li className="linkItem ">Gallery</li>
          </Link>
          <Link className="partner flex alignItemsCenter justifyCenter flexOne menu-item" to='/partner'>
            <li className="linkItem ">Partner</li>
          </Link>
          <Link className="contact flex alignItemsCenter justifyCenter flexOne menu-item" to='/contact'>
            <li className="linkItem ">Contact</li>
          </Link>
        </ul>
      </nav>
    </aside>
  )
}