import React from 'react';

import '../gallery.css';

export const Image = ({ imageSrc, imageAlt }) => {
  return <img src={imageSrc} alt={imageAlt} style={{ width: '100%' }} />

};
