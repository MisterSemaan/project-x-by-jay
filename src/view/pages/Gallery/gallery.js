import React  from "react";
import { Link } from "react-router-dom";

import theoSwitcherImage from '../../../assets/gallery/tabSwitcher/theo.jpg';
import aminaSwitcherImage from '../../../assets/gallery/tabSwitcher/amina.jpg';

import './gallery.css';

export const Gallery = () => {

  return (
    <section id="gallery" className="page flex alignItemsCenter justifyCenter">
      <Link className="galleryPhotographers theo" to='/gallery/prswrkvisuals'>
        <p>Click me</p>
        <img className="galleryPhotographersImage" src={theoSwitcherImage} alt="Link zu Theo's Bildern" />
      </Link>
      <Link className="galleryPhotographers amina" to='/gallery/amina'>
        <p>Click me</p>
        <img className="galleryPhotographersImage" src={aminaSwitcherImage} alt="Link zu Amina's Bildern" />
      </Link>
    </section>
  )
};

// Future improvements:
// Use picture elements, for responsive design... https://www.w3schools.com/html/html_images_picture.asp