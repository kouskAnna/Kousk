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

const AboutTitleContainer = styled.div`
  grid-area: 3 / 1 / 4 / -1;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const AboutContainer = styled.div`
  grid-area: 5 / 1 / 6 / -1;
  background-color: black;
  align-items: center;
`;

const DivideRow7 = styled.div`
  background-color: black;
  grid-area: 7 / 1 / 8 / -1;
`;

const DivideRow11 = styled.div`
  background-color: black;
  grid-area: 11 / 1 / 12 / -1;
`;

const ReleasesParallaxContainer = styled.div`
  grid-area: 8 / 1 / 9 / -1;
  display: grid;
  grid: 1fr / 1fr;
  background: black;
  height: 300px;
`;

const ContactParallaxContainer = styled.div`
  grid-area: 10 / 1 / 11 / -1;
  margin-left: 0;
  display: grid;
  grid: 1fr / 1fr;
  background: black;
  height: 450px;
`;

export default class GridLayout extends Component {
  render() {
    return (
      <Grid>
        <Video />
        <SoundCloudPlayer />
        <AboutTitleContainer id="About">
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
        <ReleasesParallaxContainer id="Releases">
          <ReleasesParallax />
        </ReleasesParallaxContainer>
        <DiscoGrid />
        <ContactParallaxContainer id="Contact">
          <ContactParallax />
        </ContactParallaxContainer>
        <DivideRow11 />
      </Grid>
    );
  }
}
