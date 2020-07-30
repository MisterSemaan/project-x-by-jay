import React from 'react';

export const SocialMedia = ({ socialMediaTitle, socialMediaLink, socialMediaSrc, socialMediaAlt }) => {
  return (
    <div className="socialMediaWrapper">
      <h3>{socialMediaTitle}</h3>
      <a href={socialMediaLink}>
        <img src={socialMediaSrc} alt={socialMediaAlt} />
      </a>
    </div>
  )
}