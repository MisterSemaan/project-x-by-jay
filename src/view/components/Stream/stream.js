import React from "react";
import { TwitchEmbed } from "react-twitch-embed";

import './stream.css';

export const Stream = () => {
  return (
    <section id="stream" className="flex alignItemsCenter justifyCenter">
      <TwitchEmbed
        channel="bananamman_"
        id="moonstar_x"
        theme="dark"
        muted
        onVideoPause={() => console.log(":(")}
      />
    </section>
  );
}
