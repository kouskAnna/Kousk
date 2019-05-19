import React, { Component } from "react";
import styled from "styled-components";
import Video from "./BackgroundVideo";
import SoundCloudPlayer from "./SoundCloudPlayer";
import AboutParallax from "./About";
import ReleasesParallax from "./ReleasesParallax";
import DiscoGrid from "./DiscoGrid";
import PictureGallery from "./PictureGallery";
import ContactParallax from "./ContactParallax";
import { Title, AboutText } from "../elements";
import { SocialIcon } from "react-social-icons";
import { purple } from "../utilities/Colors";

let Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template: 100vh 300px 220px auto 360px auto 100px auto auto 200px 100px/ 1fr 1fr;
`;

// column 3-4
const AboutTitleContainer = styled.div`
  grid-area: 3 / 1 / 4 / -1;
  background-color: black;
  /* border: dashed 1px red; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

// column 5
const AboutContainer = styled.div`
  grid-area: 5 / 1 / 6 / -1;
  background-color: black;
  align-items: center;
`;

// column
const DivideRow7 = styled.div`
  background-color: black;
  grid-area: 7 / 1 / 8 / -1;
`;

// column 11
const DivideRow11 = styled.div`
  background-color: black;
  grid-area: 11 / 1 / 12 / -1;
`;

export default class GridLayout extends Component {
  render() {
    return (
      <Grid>
        <Video />
        <SoundCloudPlayer />
        <AboutTitleContainer>
          <Title>About</Title>
        </AboutTitleContainer>
        <AboutParallax />
        <AboutContainer>
          <AboutText>
            Kousk is a producer born on the west coast of BC who finds her
            creative inspiration on adventures deep in the rainforest. She
            started learning classical piano when she was 5 and discovered her
            passion for electronic music production when she moved back home
            from living abroad in the Philippines. As she expresses experiences,
            ideas and feelings into music, she plays with synchronized movement
            and growth through sound.
          </AboutText>
        </AboutContainer>
        <PictureGallery />
        <DivideRow7 />
        <ReleasesParallax />
        <DiscoGrid />
        <ContactParallax />
        <DivideRow11 />
      </Grid>
    );
  }
}
