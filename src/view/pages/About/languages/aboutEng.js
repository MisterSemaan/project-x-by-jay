import React from 'react'

import aboutImage1 from '../../../../assets/about/aboutImage1.jpg';
import aboutImage2 from '../../../../assets/about/aboutImage2.jpg';

export const AboutEng = () => {
  return (
    <div>
      <p>
        Black is Beautiful is a photo exhibition that is part of Project X by Ja_y_ and focuses on Stuttgart's black people and their beautiful existence.
        Amina Ousman is the mother and creator of this fabulous idea. The exhibition is the crowning glory for Project X.
        Amina Ousman is also working on the photo book which will be made available for purchase on the day of the exhibition.
      </p>
      <img src={aboutImage1} alt="Bild von jamie und gabriel" />
      <p className="smallHeader">The Video ‚Project X by Ja_y_‘</p>
      <p>
        Starting with the idea of a video in which we inspire people of all ages, origins and sexuality to find out about culture and history independently. We want to show that it is enriching to live in a city full of different influences.
        It is important to recognize that we always benefit from it when our environment is doing well!
        Together with incredible artists (dancers, models, musicians, designers, cameramen ...) we achieved incredible feedback and an enormous reach during our first 3 shootings! (Impressions in the appendix).
        Publication of the entire video is still open.
        <br/>
        The aim of the whole project is to generate as much attention as possible around us so that we cannot be overheard!
        In the video area, the aspects of history, culture and education are very important, we want to inspire you to be interested in and research about its history, origin and culture.
        We want to remind you that the beautiful world we love today is so endearing because of its differences and inequalities.
        We wanted to bring young artists together to prove with this project that no money is needed to do good, but also to create a platform for our artists to exchange and inspire.        </p>
      <p className="smallHeader">What is ‚I don’t talk shit, I dooo...‘</p>
      <p>
        It's about a talk show that is a little extra than what we knew before. Ladies and gentlemen, I cordially invite you to 'I don’t talk, i doo ...'.
        With great guests, speakers and of course our musicians, we will talk about history, development and experiences from Stuttgart, how we deal with intolerance and what each of us can do to make the planet a more comfortable place for everyone.
        <br/>
        A show moderated by Ja_y_ and made possible by our generous sponsors of B&B Eventtechnik.
        With great guests like the guys from Red Lektion, Toni Dreher, the organizers of the Silent Demo Stuttgart etc.
        <br/>
        Our talk show (broadcast on August 9, 2020 at 7:30 p.m.) has the focus of teaching we would like that
        People who are interested in the video have a chance to learn more about what it is and what can be done.
        We invited great guests who tell us something about the history of black people, the social development of the relationships between black and white people and the current problems that come with it and what solutions there are for a nicer together.
      </p>
      <img src={aboutImage2} alt="Bild von olivia und den 2 modells" />
    </div>
  )
};

