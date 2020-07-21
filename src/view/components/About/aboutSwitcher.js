import React, { useState } from "react";

import { AboutDeu } from "./aboutDeu";
import { AboutFre } from "./aboutFre";
import { AboutEng } from "./aboutEng";

import './about.css'

export const AboutSwitcher = () => {
  const [lang, setLang] = useState('GERMAN');
  let AboutText;
  if (lang === 'ENGLISH') {
    AboutText = <AboutEng />;
  } else if (lang === 'FRENCH') {
    AboutText = <AboutFre />;
  } else {
    AboutText = <AboutDeu />
  }
  return (
    <section id="about" className="flex alignItemsCenter justifyCenter">
      <div className="gridWrapper">
        <h2 className="item1">Was ist Project X?</h2>
        <div className="flag">
        <a href='#' onClick={() => setLang('FRENCH')}>Français</a>
        <a href='#' onClick={() => setLang('ENGLISH')}>English</a>
        <a href='#' onClick={() => setLang('GERMAN')}>Deutsch</a>
      </div>
      {AboutText}
      </div>
    </section>
  );
};
