import React from 'react';

import '../partner.css';

export const PartnerWrapper = ({ partnerName, partnerSrc, partnerAlt }) => {
  return (
    <div className="partnerWrapper">
      <h3 className="partnerName">{partnerName}</h3>
      <img className="partnerImage" src={partnerSrc} alt={partnerAlt}/>
    </div>
  )
};
