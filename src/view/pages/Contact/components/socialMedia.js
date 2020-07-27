import React from 'react';

export const SocialMedia = ({ socialMediaTitle, socialMediaSrc, socialMediaAlt }) => {
  return (
    <div className="socialMediaWrapper">
      <h3>{socialMediaTitle}</h3>
      <img src={socialMediaSrc} alt={socialMediaAlt} />
    </div>
  )
}