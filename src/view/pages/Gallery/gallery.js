import React from 'react';
import { Preview } from './components/preview';

import logoBlack from '../../../assets/partner/logo_black.svg'
import './gallery.css';

export const Gallery = () => {
  return (
    <section id="gallery" className="page flex alignItemsCenter justifyCenter">
      <Preview previewSrc={logoBlack} previewAlt="test" />
    </section>
  )
};


