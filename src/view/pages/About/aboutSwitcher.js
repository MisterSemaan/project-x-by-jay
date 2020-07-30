import React, { useState } from "react";

import { AboutDeu } from "./languages/aboutDeu";
import { AboutFre } from "./languages/aboutFre";
import { AboutEng } from "./languages/aboutEng";

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
          <button className="aboutLangFre" onClick={() => setLang('FRENCH')} />
          <button className="aboutLangDeu" onClick={() => setLang('GERMAN')} />
          <button className="aboutLangEng" onClick={() => setLang('ENGLISH')} />
      </div>
      </div>
      <div className="bottom">
          {AboutText}
        </div>
    </section>
  );
};
