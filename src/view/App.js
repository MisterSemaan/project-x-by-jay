import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Nav } from "./pages/Nav/nav";
import { Home } from "./pages/Home/home";
import { Stream } from "./pages/Stream/stream";
import { AboutSwitcher } from './pages/About/aboutSwitcher'
import { Gallery } from './pages/Gallery/gallery';
import { Partner } from "./pages/Partner/partner";
import { Contact } from "./pages/Contact/contact";

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
        <Route exact path="/gallery">
          <Gallery />
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