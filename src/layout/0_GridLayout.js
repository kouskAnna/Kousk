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
const DivideRow3 = styled.div`
  grid-area: 3 / 1 / 4 / -1;
  /* border: dashed 1px red; */
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

// column 5
const DivideRow5 = styled.div`
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
        <DivideRow3>
          <Title>About</Title>
        </DivideRow3>
        <AboutParallax />
        <DivideRow5>
          <AboutText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AboutText>
        </DivideRow5>
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
