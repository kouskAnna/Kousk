import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Gallery from "react-grid-gallery";
import Image1 from "../images/alien.jpg";
import Image2 from "../images/kousk2.jpg";
import Image3 from "../images/kousk4.jpg";
import Image4 from "../images/dome.jpg";
import Image5 from "../images/sideFeather.jpg";
import Image6 from "../images/Mono.jpg";
import Image8 from "../images/bowWalk.jpg";
import Image7 from "../images/overShoulder.jpg";

const ImageContainer = styled.div`
  grid-area: 6 / 1 / 7 / -1;
  background: black;
`;

const IMAGES = [
  {
    src: Image1,
    thumbnail: Image1,
    thumbnailWidth: 280,
    thumbnailHeight: 174
  },
  {
    src: Image2,
    thumbnail: Image2,
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: Image3,
    thumbnail: Image3,
    thumbnailWidth: 220,
    thumbnailHeight: 212
  },

  {
    src: Image4,
    thumbnail: Image4,
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: Image5,
    thumbnail: Image5,
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: Image6,
    thumbnail: Image6,
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: Image7,
    thumbnail: Image7,
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];

export default class PictureGallery extends Component {
  render() {
    return (
      <ImageContainer>
        <Gallery images={IMAGES} />;
      </ImageContainer>
    );
  }
}
