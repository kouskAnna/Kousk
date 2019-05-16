import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Image2 from "../images/releases.jpg";
// import styled, { css } from "styled-components";
// import media from "styled-media-query";
import { purple } from "../utilities/Colors";
import styled from "styled-components";

const Container = styled.div`
  grid-area: 4 / 1 / 5 / -1;
  display: flex;
  justify-content: center;
  text-align: center;
`;

class ReleasesParallax extends Component {
  render() {
    return (
      <React.Fragment>
        <Parallax bgImage={Image2} strength={500}>
          <div style={{ height: 300 }}>
            <Container />
          </div>
        </Parallax>
      </React.Fragment>
    );
  }
}

export default ReleasesParallax;
