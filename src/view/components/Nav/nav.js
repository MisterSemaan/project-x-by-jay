import React from 'react';

import './nav.css';

export const Nav = () => {
  return (
    <aside className="aside">
      <nav id="menu-container">
        <ul className="flex flexColumn alignItemsCenter justifyAround">
          <li className="home flex alignItemsCenter justifyCenter flexOne menu-item">
            <a href="#home">Home</a>
          </li>
          <li className="stream flex alignItemsCenter justifyCenter flexOne menu-item">
            <a href="#stream">Stream</a>
          </li>
          <li className="about flex alignItemsCenter justifyCenter flexOne menu-item">
            <a href="#about">About</a>
          </li>
          <li className="partner flex alignItemsCenter justifyCenter flexOne menu-item">
            <a href="#partner">Partner</a>
          </li>
          <li className="contact flex alignItemsCenter justifyCenter flexOne menu-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}