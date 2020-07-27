import React from 'react';

import '../gallery.css';

export const Video = ({ videoSrc, videoWidth, videoHeight }) => {
  return (
    <video width={videoWidth} height={videoHeight} autoPlay loop>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
};
