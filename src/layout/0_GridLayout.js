import React, { Component } from "react";
import styled from "styled-components";
import Video from "./BackgroundVideo";
import SoundCloudPlayer from "./SoundCloudPlayer";
import AboutParallax from "./About";
import ReleasesParallax from "./ReleasesParallax";
import DiscoGrid from "./DiscoGrid";
import PictureGallery from "./PictureGallery";

let Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template: 100vh 240px 120px 240px 360px auto 100px / 1fr 1fr;
`;

// column 3-4
const DivideRow3 = styled.div`
  /* height: 100px; */
  background-color: black;
  grid-area: 3 / 1 / 4 / -1;
`;

// column 5
const DivideRow5 = styled.div`
  /* height: 100px; */
  background-color: black;
  grid-area: 5 / 1 / 6 / -1;
`;

// column 3
const DivideRow7 = styled.div`
  /* height: 100px; */
  background-color: black;
  grid-area: 7 / 1 / 8 / -1;
`;
export default class GridLayout extends Component {
  render() {
    return (
      <Grid>
        <Video />
        <SoundCloudPlayer />
        <DivideRow3 />
        <AboutParallax />
        <DivideRow5 />
        <PictureGallery />
        <DivideRow7 />
        <ReleasesParallax />
        <DiscoGrid />
      </Grid>
    );
  }
}
