import React from 'react';

import { PartnerWrapper }  from './components/partnerWrapper';

import anomosLogo from '../../../assets/partner/1 Anomos .jpg';
import bcfLogo from '../../../assets/partner/1 BCF--Full-Logo-Blue.png'
import easyMoneyLogo from '../../../assets/partner/1 Easy Money 1(1).png'
import karakaraLogo from '../../../assets/partner/1 Karakara Hilfe für Kinder in Niger e.V..png'
import bbEventlogo from '../../../assets/partner/2 bbeventtechnik.png'
import dafrigLogo from '../../../assets/partner/2 DAFRIG - Deutsch-Afrikanische Gesellschaft.png'
import egLogo from '../../../assets/partner/2 Engagement Global.png'
import jsLogo from '../../../assets/partner/2 Jimmie_Surles_white.jpg'
import rksLogo from '../../../assets/partner/2 Rumpelstilzchen Ksenja Samide.png'
import staatsgalerieLogo from '../../../assets/partner/2 Staatsgalerie.png'

import './partner.css';

export const Partner = () => {
  return (
    <section id="partner" className="flex alignItemsCenter justifyCenter">
      <h2>Wir bedanken uns Herzlichst bei all unseren Unterstützern, Partnern und Sponsoren!</h2>
      <div className="priorityPartner">
        <PartnerWrapper partnerName="Anomos" partnerAlt="Anomos Logo" partnerSrc={anomosLogo} />
        <PartnerWrapper partnerName="BCF" partnerAlt="BCF Logo" partnerSrc={bcfLogo} />
        <PartnerWrapper partnerName="Easy Money" partnerAlt="Easy Money Logo" partnerSrc={easyMoneyLogo} />
        <PartnerWrapper partnerName="Karakara Hilfe für Kinder in Niger e.V." partnerAlt="Karakara Logo" partnerSrc={karakaraLogo} />
      </div>
      <div className="secondaryPartner">
        <PartnerWrapper partnerName="Bbeventtechnik" partnerAlt="Bbeventtechnik Logo" partnerSrc={bbEventlogo} />
        <PartnerWrapper partnerName="DAFRIG - Deutsch-Afrikanische Gesellschaft" partnerAlt="DAFRIG Logo" partnerSrc={dafrigLogo} />
        <PartnerWrapper partnerName="Engangement Global" partnerAlt="Engangement Global Logo" partnerSrc={egLogo} />
        <PartnerWrapper partnerName="Jimmie Surles" partnerAlt="Jimmie Surles Logo" partnerSrc={jsLogo} />
        <PartnerWrapper partnerName="Rumpelstilzchen Ksenja Samide" partnerAlt="Rumpelstilzchen Ksenja Samide Logo" partnerSrc={rksLogo} />
        <PartnerWrapper partnerName="Staatsgalerie" partnerAlt="Staatsgalerie Logo" partnerSrc={staatsgalerieLogo} />
      </div>
    </section>
  )
}
