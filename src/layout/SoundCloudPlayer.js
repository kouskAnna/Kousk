import React, { Component } from "react";
import styled from "styled-components";

const PlayerContainer = styled.div`
  grid-area: 2 / 1 / 3 / -1;
  /* height: 220px; */
`;

export default class SoundCloudPlayer extends Component {
  render() {
    return (
      <PlayerContainer>
        <iframe
          width="100%"
          height="300"
          scrolling="yes"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/251906&color=%230b0404&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
        />
      </PlayerContainer>
    );
  }
}
