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
import { TheoGallery } from './pages/Gallery/photographers/theoGallery';
import { AminaGallery } from './pages/Gallery/photographers/aminaGallery';
import { Partner } from "./pages/Partner/partner";
import { Contact } from "./pages/Contact/contact";

import '../css/flex.css';
import '../css/app.css';

function App() {
  return (
    <Router>
      <Nav />
      <main id="page-content-container">
        <Route exact path="/" component={Home}/>
        <Route exact path="/stream"  component={Stream} />
        <Route exact path="/about" component={AboutSwitcher} />
        <Route exact path="/gallery/" component={Gallery} />
        <Route exact path="/gallery/prswrkvisuals" component={TheoGallery} />
        <Route exact path="/gallery/amina" component={AminaGallery} />
        <Route exact path="/partner" component={Partner}/>
        <Route exact path="/contact" component={Contact} />
        </main>
    </Router>
  );
}

export default App;