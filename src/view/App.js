import React from 'react';
import { Nav } from "./components/Nav/nav";
import { Home } from "./components/Home/home";
import { Stream } from "./components/Stream/stream";
import { AboutSwitcher } from './components/About/aboutSwitcher'
import { Partner } from "./components/Partner/partner";
import { Contact } from "./components/Contact/contact";

import '../css/flex.css';
import '../css/app.css';

function App() {
  return (
    <main className="main">
      <Nav />
      <Home />
      <Stream />
      <AboutSwitcher />
      <Partner />
      <Contact />
    </main>
  );
}

export default App;
