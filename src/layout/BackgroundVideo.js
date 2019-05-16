import React, { Component } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  grid-area: 1 / 1 / 2 / -1;
`;

let StyledVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default class Video extends Component {
  render() {
    return (
      <VideoContainer>
        <StyledVideo
          autoPlay
          loop
          muted
          src="https://s3.us-east-2.amazonaws.com/kouskpublic/MoriaLong.MOV"
        />
      </VideoContainer>
    );
  }
}
