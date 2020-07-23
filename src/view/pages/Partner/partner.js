import React from 'react';
import { PartnerWrapper }  from './components/partnerWrapper';

import logoBlack from '../../../assets/partner/logo_black.svg'

import './partner.css';

export const Partner = () => {


  return (
    <section id="partner" className="flex alignItemsCenter justifyCenter">
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
      <PartnerWrapper partnerName="partnerName" partnerAlt="partnerAlt" partnerSrc={logoBlack} />
    </section>
  )
}