import React from 'react'

import { Image } from "../components/image";

import spirit1 from "../../../../assets/gallery/Spirit Shoot/Amina/DSC_0537 Kopie.JPG";
import spirit2 from "../../../../assets/gallery/Spirit Shoot/Amina/DSC_0565 Kopie.JPG";
import spirit3 from "../../../../assets/gallery/Spirit Shoot/Amina/DSC_0849 Kopie.JPG";
import spirit4 from "../../../../assets/gallery/Spirit Shoot/Amina/DSC_0928 Kopie.JPG";
import spirit5 from "../../../../assets/gallery/Spirit Shoot/Amina/DSC_0988 Kopie.JPG";

import royal1 from "../../../../assets/gallery/Royal Shoot/Amina/DSC_0353 Kopie.JPG";
import royal2 from "../../../../assets/gallery/Royal Shoot/Amina/DSC_0045 Kopie.JPG";
import royal3 from "../../../../assets/gallery/Royal Shoot/Amina/DSC_0361 Kopie.JPG";

import bbAll1 from "../../../../assets/gallery/BBall Shoot/Amina/DSC_0637 Kopie.JPG";
import bbAll2 from "../../../../assets/gallery/BBall Shoot/Amina/DSC_0963 Kopie.JPG";
import bbAll3 from "../../../../assets/gallery/BBall Shoot/Amina/DSC_0973 Kopie.JPG";

import '../gallery.css';

export const AminaGallery = () => {
  return (
    <section id="galleryAmina">
      <div className="spiritShootWrapper">
        <p className="shootNameTop">Spirit Shoot</p>
        <Image imageSrc={spirit1} imageAlt="spirit1" />
        <Image imageSrc={spirit2} imageAlt="spirit2" />
        <Image imageSrc={spirit3} imageAlt="spirit3" />
        <Image imageSrc={spirit4} imageAlt="spirit4" />
        <Image imageSrc={spirit5} imageAlt="spirit5" />
      </div>
      <div className="royalShootWrapper">
        <p className="shootName">Royal Shoot</p>
        <Image imageSrc={royal1} imageAlt="royal1" />
        <Image imageSrc={royal2} imageAlt="royal2" />
        <Image imageSrc={royal3} imageAlt="royal3" />
      </div>
      <div className="bballShootWrapper">
        <p className="shootName">BBall Shoot</p>
        <Image imageSrc={bbAll1} imageAlt="bbAll1" />
        <Image imageSrc={bbAll2} imageAlt="bbAll2" />
        <Image imageSrc={bbAll3} imageAlt="bbAll3" />
      </div>
    </section>
  )
};

