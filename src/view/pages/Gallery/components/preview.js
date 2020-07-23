// onclick preview image --> center vertically and horizontally on the screen --> create slideshow of images
import React from 'react';

export const Preview = ({ previewSrc, previewAlt }) => {
  const openGallery = () => {
    // Step 1. Increase image size by factor x
    // Step 2. Move image to center of page
    // Step 3. Blur background, everything around image
    // Step 4. Display slideshow of images
  }

  return (
    <div className="previewWrapper">
      <img className="previewImage" src={previewSrc} alt={previewAlt} onClick={() => openGallery()}/>
    </div>
  )
}