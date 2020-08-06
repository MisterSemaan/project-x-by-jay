import React from 'react'

import { Image } from "../components/image";

import bbAll1 from "../../../../assets/gallery/BBall Shoot/Prswrkvisuals/image00010.jpeg";
import bbAll2 from "../../../../assets/gallery/BBall Shoot/Prswrkvisuals/image00011.jpeg";
import bbAll3 from "../../../../assets/gallery/BBall Shoot/Prswrkvisuals/image00016.jpeg";
import bbAll4 from "../../../../assets/gallery/BBall Shoot/Prswrkvisuals/image00024.jpeg";

import royal1 from "../../../../assets/gallery/Royal Shoot/Prswrkvisuals/DSC06235.jpg";
import royal2 from "../../../../assets/gallery/Royal Shoot/Prswrkvisuals/DSC06177.jpg";
import royal3 from "../../../../assets/gallery/Royal Shoot/Prswrkvisuals/DSC06092.jpg";

import spirit1 from "../../../../assets/gallery/Spirit Shoot/Prswrkvisuals/DSC06375.jpg";
import spirit2 from "../../../../assets/gallery/Spirit Shoot/Prswrkvisuals/DSC06394.jpg";

import '../gallery.css';

export const TheoGallery = () => {
  return (
    <section id="galleryTheo">
      <div className="bballShootWrapper">
        <p className="shootNameTop">BBall Shoot</p>
        <Image imageSrc={bbAll1} imageAlt="bbAll1" />
        <Image imageSrc={bbAll2} imageAlt="bbAll2" />
        <Image imageSrc={bbAll3} imageAlt="bbAll3" />
        <Image imageSrc={bbAll4} imageAlt="bbAll4" />
      </div>
      <div className="royalShootWrapper">
        <p className="shootName">Royal Shoot</p>
        <Image imageSrc={royal1} imageAlt="royal1" />
        <Image imageSrc={royal2} imageAlt="royal2" />
        <Image imageSrc={royal3} imageAlt="royal3" />
      </div>
      <div className="spiritShootWrapper">
        <p className="shootName">Spirit Shoot</p>
        <Image imageSrc={spirit1} imageAlt="spirit1" />
        <Image imageSrc={spirit2} imageAlt="spirit2" />
      </div>
    </section>
  )
};


/*
import bbAll1 from "../../../../assets/gallery/BBall Shoot/Prswrkvisuals/";
import bbAll2 from "../../../../assets/gallery/BBall Shoot/Prswrkvisuals/";
import bbAll3 from "../../../../assets/gallery/BBall Shoot/Prswrkvisuals/";

      <div className="bballShootWrapper">
        <p className="shootName">BBall Shoot</p>
        <Image imageSrc={bbAll1} imageAlt="bbAll1" />
        <Image imageSrc={bbAll2} imageAlt="bbAll2" />
        <Image imageSrc={bbAll3} imageAlt="bbAll3" />
      </div>
 */
