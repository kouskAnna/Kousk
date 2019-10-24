import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Image1 from "../images/EssenceDark.png";
import styled, { css } from "styled-components";
import { ContactTitle, Email } from "../elements";
import { SocialIcon } from "react-social-icons";
import { purple } from "../utilities/Colors";

const ParallaxContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
`;

const TitleAndIconContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  /* height: 100%; */
  width: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
  padding-top: 30px;
  z-index: 1;
  /* border: dashed 1px yellow; */
`;

const IconFlex = styled.div`
  display: flex;
  justify-content: center;
`;

const IconFlexChild = styled.div``;

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
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
              url="https://www.facebook.com/kousk/"
              network="facebook"
              bgColor={purple}
              fgColor="blue"
              style={{ height: 100, width: 100, paddingLeft: 20 }}
            />
            <SocialIcon
              url="https://www.soundcloud.com/kousk/"
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
            <div style={{ height: 450 }} />
          </Parallax>
        </ParallaxContainer>
      </React.Fragment>
    );
  }
}

export default Contact;
