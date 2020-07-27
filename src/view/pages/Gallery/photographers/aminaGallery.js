import React from 'react'

import { Image } from "../components/image";

import pic4 from "../../../../assets/gallery/pic4.jpg";
import pic5 from "../../../../assets/gallery/pic5.jpg";
import pic6 from "../../../../assets/gallery/pic6.jpg";

export const AminaGallery = () => {
  return (
    <div>
      <Image imageSrc={pic4} imageAlt="pic6" />
      <Image imageSrc={pic5} imageAlt="pic6" />
      <Image imageSrc={pic6} imageAlt="pic6" />
    </div>
  )
};

