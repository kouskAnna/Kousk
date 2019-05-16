import React, { Component } from "react";
import styled from "styled-components";
import HeaderClass from "./Header";
import Video from "./BackgroundVideo";
import SoundCloudPlayer from "./SoundCloudPlayer";
import AboutParallax from "./About";
import Pictures from "./Pictures";
import ReleasesParallax from "./ReleasesParallax";
import Discography from "./Discography";

let Grid = styled.div`
  display: grid;
  height: 100vh;
  grid: 100vh 240px 120px 240px 60px 300px 60px 240px 60px 60px/ 1fr;
`;

// column 3
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

// column 7
const DivideRow7 = styled.div`
  /* height: 100px; */
  background-color: black;
  grid-area: 7 / 1 / 8 / -1;
`;

// column 9
const DivideRow9 = styled.div`
  /* height: 100px; */
  background-color: black;
  grid-area: 9 / 1 / 10 / -1;
`;

// column 9
const DivideRow11 = styled.div`
  /* height: 100px; */
  background-color: black;
  grid-area: 11 / 1 / 12 / -1;
`;

export default class GridLayout extends Component {
  render() {
    return (
      <Grid>
        {/* <HeaderClass /> */}
        <Video />
        <SoundCloudPlayer />
        <DivideRow3 />
        <AboutParallax />
        <DivideRow5 />
        <Pictures />
        <DivideRow7 />
        <ReleasesParallax />
        <DivideRow9 />
        <Discography />
        <DivideRow11 />
      </Grid>
    );
  }
}
