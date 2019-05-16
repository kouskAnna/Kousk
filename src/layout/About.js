import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Image1 from "../images/about.jpg";
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

class AboutParallax extends Component {
  render() {
    return (
      <React.Fragment>
        <Parallax bgImage={Image1} strength={500}>
          <div style={{ height: 300 }}>
            <Container />
          </div>
        </Parallax>
      </React.Fragment>
    );
  }
}

export default AboutParallax;
