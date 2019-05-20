import React, { Component } from "react";
import styled from "styled-components";
import { VideoTitle } from "../elements";

const VideoContainer = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: grid;
  grid: 1fr 1fr 1fr / 1fr;
  align-items: center;
`;

const TitleContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

let StyledVideo = styled.video`
  grid-area: 1 / 1 / -1 / -1;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default class Video extends Component {
  render() {
    return (
      <VideoContainer>
        <TitleContainer>
          <VideoTitle>Kousk</VideoTitle>
        </TitleContainer>
        <StyledVideo
          autoPlay
          loop
          muted
          src="https://s3.us-east-2.amazonaws.com/kouskpublic/MoriaBackground.mp4"
        />
      </VideoContainer>
    );
  }
}
