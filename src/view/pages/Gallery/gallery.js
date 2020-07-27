import React, { useState } from "react";

import { TheoGallery } from './photographers/theoGallery';
import { AminaGallery } from './photographers/aminaGallery';

import './gallery.css';

export const Gallery = () => {
  const [photographer, setPhotographer] = useState('AMINA');
  let Photographer;
  if (photographer === 'THEO') {
    Photographer = <TheoGallery />;
  } else {
    Photographer = <AminaGallery />
  }

  return (
    <section id="gallery" className="page flex alignItemsCenter justifyCenter">
      <div className="galleryPhotographers">
        <button className="galleryPhotographersTheo" onClick={() => setPhotographer('THEO')}>prswrkvisuals</button>
        <button className="galleryPhotographersAmina" onClick={() => setPhotographer('AMINA')}>amina</button>
      </div>
      <div className="photos">
        {Photographer}
      </div>
    </section>
  )
};

// Tomorrow:
// Instead of buttons, set images that redirect to the respective photographs (w: 50% - w: 50% for each image)

// Future improvements:
// Use picture elements, for responsive design... https://www.w3schools.com/html/html_images_picture.asp