import React from "react";
import { TwitchEmbed } from "react-twitch-embed";

import './stream.css';

export const Stream = () => {
  return (
    <section id="stream" className="flex alignItemsCenter justifyCenter">
      <TwitchEmbed
        className="twitch-wrapper"
        channel="bbetlive"
        theme="dark"
        muted
        onVideoPause={() => console.log(":(")}
        height="800px"
        width="1380px"
      />
    </section>
  );
}
