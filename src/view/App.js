import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

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
    <Router>
      <Nav />
      <main id="page-content-container">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stream">
          <Stream />
        </Route>
        <Route exact path="/about">
          <AboutSwitcher />
        </Route>
        <Route exact path="/partner">
          <Partner />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </main>
    </Router>
  );
}

export default App;