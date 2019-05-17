import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Image2 from "../images/releases.jpg";
// import styled, { css } from "styled-components";
// import media from "styled-media-query";
import { purple } from "../utilities/Colors";
import styled from "styled-components";

const Container = styled.div`
  grid-area: 8 / 1 / 9 / -1;
`;

class ReleasesParallax extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Parallax bgImage={Image2} strength={500}>
            <div style={{ height: 300 }} />
          </Parallax>
        </Container>
      </React.Fragment>
    );
  }
}

export default ReleasesParallax;
