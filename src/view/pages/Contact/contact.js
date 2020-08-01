import React from 'react';

import { SocialMedia } from './components/socialMedia';

import instagramIcon from '../../../assets/contact/instagram.svg';
import facebookIcon from '../../../assets/contact/facebook.svg';
import youtubeIcon from '../../../assets/contact/youtube.svg';

import './contact.css';

export const Contact = () => {

  return (
    <section id="contact" className="flex alignItemsCenter justifyCenter">
      <SocialMedia
        socialMediaAlt="Project X Instagram"
        socialMediaLink="https://www.instagram.com/project_x_by_ja_y_/"
        socialMediaSrc={instagramIcon}
        socialMediaTitle="Instagram: Project X by Jay"
      />
      <SocialMedia
        socialMediaAlt="Project X Facebook"
        socialMediaLink="https://www.facebook.com/ProjectXbyJay"
        socialMediaSrc={facebookIcon}
        socialMediaTitle="Facebook: Project X by Jay"
      />
      <SocialMedia
        socialMediaAlt="Project X Youtube"
        socialMediaLink="https://www.youtube.com/channel/UC6XTYyA0VW6IQVXCAybVYQw"
        socialMediaSrc={youtubeIcon}
        socialMediaTitle="Youtube: Project X by Jay"
      />
    </section>
  )
}

// https://www.flaticon.com/search?search-type=icons&word=instagram