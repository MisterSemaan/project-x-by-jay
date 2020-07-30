import React  from "react";
import { Link } from "react-router-dom";

import theoSwitcherImage from '../../../assets/gallery/tabSwitcher/theo.png';
import aminaSwitcherImage from '../../../assets/gallery/tabSwitcher/amina.png';

import './gallery.css';

export const Gallery = () => {

  return (
    <section id="gallery" className="page flex alignItemsCenter justifyCenter">
      <Link className="galleryPhotographers theo" to='/gallery/prswrkvisuals'>
        <img className="galleryPhotographersImage" style={{ width: '50%' }} src={theoSwitcherImage} alt="Link zu Theo's Bildern" />
      </Link>
      <Link className="galleryPhotographers amina" to='/gallery/amina'>
        <img className="galleryPhotographersImage" src={aminaSwitcherImage} alt="Link zu Amina's Bildern" />
      </Link>
    </section>
  )
};


// Future improvements:
// Use picture elements, for responsive design... https://www.w3schools.com/html/html_images_picture.asp