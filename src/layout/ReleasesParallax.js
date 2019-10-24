import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Image2 from "../images/releases.jpg";
// import styled, { css } from "styled-components";
// import media from "styled-media-query";
import { purple } from "../utilities/Colors";
import styled from "styled-components";
import { ReleasesTitle } from "../elements";

const ParallaxContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
`;

class ReleasesParallax extends Component {
  render() {
    return (
      <React.Fragment>
        <ReleasesTitle>Releases</ReleasesTitle>
        <ParallaxContainer>
          <Parallax bgImage={Image2} strength={1000}>
            <div style={{ height: 300 }} />
          </Parallax>
        </ParallaxContainer>
      </React.Fragment>
    );
  }
}

export default ReleasesParallax;
