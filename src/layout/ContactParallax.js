import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Image1 from "../images/EssenceDark.png";
import styled, { css } from "styled-components";
import { ContactTitle, Email } from "../elements";
import { SocialIcon } from "react-social-icons";
import { purple } from "../utilities/Colors";

// import media from "styled-media-query";
// import { Title } from "../elements";

const Container = styled.div`
  grid-area: 10 / 1 / 11 / -1;
  margin-left: 0;
  display: grid;
  grid: 1fr / 1fr;
  background: black;
  height: 500px;
  /* border: dashed 1px red; */

  /* width: 300px; */
  /* text-align: center;
  height: 28em; */
`;

const ParallaxContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
`;

const TitleAndIconContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  /* height: 100%; */
  width: 500px;
  align-self: center;
  justify-self: center;
  text-align: center;
  padding-top: 30px;
  z-index: 1;
  /* border: dashed 1px yellow; */
`;

const IconFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const IconFlexChild = styled.div``;

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <TitleAndIconContainer>
            <ContactTitle>Contact</ContactTitle>
            <br />
            <IconFlex>
              <SocialIcon
                url="https://www.instagram.com/kousk/"
                network="instagram"
                bgColor="blue"
                fgColor={purple}
                style={{ height: 100, width: 100 }}
              />
              <SocialIcon
                url="https://www.instagram.com/kousk/"
                network="facebook"
                bgColor={purple}
                fgColor="blue"
                style={{ height: 100, width: 100 }}
              />
              <SocialIcon
                url="https://www.instagram.com/kousk/"
                network="soundcloud"
                bgColor="blue"
                fgColor={purple}
                style={{ height: 100, width: 100 }}
              />
            </IconFlex>
            <br />
            <br />
            <Email>kouskmusic@gmail.com</Email>
          </TitleAndIconContainer>
          <ParallaxContainer>
            <Parallax bgImage={Image1} strength={1000}>
              <div style={{ height: 500 }} />
            </Parallax>
          </ParallaxContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contact;
