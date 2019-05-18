import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Image2 from "../images/releases.jpg";
// import styled, { css } from "styled-components";
// import media from "styled-media-query";
import { purple } from "../utilities/Colors";
import styled from "styled-components";
import { ReleasesTitle } from "../elements";

const Container = styled.div`
  grid-area: 8 / 1 / 9 / -1;
  /* border: dashed 1px red; */
  display: grid;
  grid: 1fr / 1fr;
  background: black;
  height: 300px;
  /* text-align: center; */
  /* line-height: 200px; */
`;

const ParallaxContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
`;

class ReleasesParallax extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <ReleasesTitle>Releases</ReleasesTitle>
          <ParallaxContainer>
            <Parallax bgImage={Image2} strength={1000}>
              <div style={{ height: 300 }} />
            </Parallax>
          </ParallaxContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default ReleasesParallax;
