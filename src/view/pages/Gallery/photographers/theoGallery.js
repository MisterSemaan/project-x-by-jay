import React from 'react'

import { Image } from "../components/image";

import pic1 from "../../../../assets/gallery/pic1.jpg";
import pic2 from "../../../../assets/gallery/pic2.jpg";
import pic3 from "../../../../assets/gallery/pic3.jpg";

export const TheoGallery = () => {
  return (
    <div>
      <Image imageSrc={pic1} imageAlt="pic6" />
      <Image imageSrc={pic2} imageAlt="pic6" />
      <Image imageSrc={pic3} imageAlt="pic6" />
    </div>
  )
};

