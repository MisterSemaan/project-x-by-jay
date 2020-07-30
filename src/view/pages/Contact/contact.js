import React from 'react';

import { SocialMedia } from './components/socialMedia';

import instagramIcon from '../../../assets/contact/instagramIcon.png';
import facebookIcon from '../../../assets/contact/facebookIcon.png';

import './contact.css';

export const Contact = () => {

  return (
    <section id="contact" className="flex alignItemsCenter justifyCenter">
      <SocialMedia
        socialMediaAlt="Jamie Instagram"
        socialMediaLink="https://www.instagram.com/project_x_by_ja_y_/"
        socialMediaSrc={instagramIcon}
        socialMediaTitle="Instagram: Project X by Jay"
      />
      <SocialMedia
        socialMediaAlt="Jamie Facebook"
        socialMediaLink="https://m.facebook.com/profile.php?id=100002461605262&ref=content_filter"
        socialMediaSrc={facebookIcon}
        socialMediaTitle="Facebook: Project X by Jay"
      />
    </section>
  )
}

// https://www.flaticon.com/search?search-type=icons&word=instagram