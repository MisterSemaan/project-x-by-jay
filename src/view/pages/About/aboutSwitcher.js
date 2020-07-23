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
      <div className="top">
        <h2 className="aboutTitle">Was ist Project X?</h2>
        <div className="aboutLanguages">
          <button className="aboutLangFre" onClick={() => setLang('FRENCH')}>Français</button>
          <button className="aboutLangEng" onClick={() => setLang('ENGLISH')}>English</button>
          <button className="aboutLangDeu" onClick={() => setLang('GERMAN')}>Deutsch</button>
      </div>
      </div>
      <div className="bottom">
          {AboutText}
        </div>
    </section>
  );
};
