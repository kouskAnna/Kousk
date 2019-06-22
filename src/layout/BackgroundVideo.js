import React, { Component } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { VideoTitle } from "../elements";
import ScrollspyNav from "react-scrollspy-nav";
import Logo from "../images/logo.png";

const VideoContainer = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: grid;
  grid: 1fr 1fr 1fr / 1fr;
  /* align-items: center; */
`;

let Header = styled.header`
  grid-area: 1 / 1 / 2 / -1;
  /* background-color: black; */
  background: transparent;

  /* opacity: 0.4; */
  display: flex;
  flex-direction: horizontal;
  justify-content: flex-start;
  height: 100px;
`;

let HeaderLogoImage = styled.div`
  /* border: dashed 2px purple; */
  background: ${props => `url(${Logo})`};

  background-position: left;
  margin-left: 10px;
  background-size: 70px 70px;

  background-repeat: no-repeat;

  height: 100%;

  width: 100%;
`;

const HeaderLogo = styled.div`
  width: 10%;
  /* height: 80%; */
  /* border: dashed 2px yellow; */
`;

const HeaderTitle = styled(HeaderLogo)`
  /* border: dashed 2px purple; */
  width: 90%;
  /* border: dashed 2px green; */
`;

const NavListContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  height: 100px;
  align-items: center;
  justify-content: flex-end;
  margin-right: 100px;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  margin-right: 20px;


  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */

  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */


  `}
`;

const NavItemTitle = styled.p`
  font-family: "Harrington";
  font-size: 2.5em;
  text-decoration: none;
  margin-right: 60px;
  color: white;
  font-weight: bold;
  /* letter-spacing: 2px; */
  text-shadow: 2px 2px 8px black;
  &:hover {
    text-shadow: 4px 4px 8px turquoise;
  }

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  font-size: 1.1rem
  margin-right: 20px;

  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    margin-right: 40px;
    font-size: 1.5rem

  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */


  `}
`;

const TitleContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

let StyledVideo = styled.video`
  grid-area: 1 / 1 / -1 / -1;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const textShadow = {
  hover: {
    textShadow: "1px 1px 1px black"
  }
};

const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-shadow: 1px 1px 3px purple;
  }
`;

export default class Video extends Component {
  render() {
    return (
      <VideoContainer>
        <Header>
          <HeaderLogoImage>
            <HeaderLogo />
          </HeaderLogoImage>
          <HeaderTitle>
            <ScrollspyNav
              scrollTargetIds={["About", "Releases", "Contact"]}
              activeNavClass="is-active"
              scrollDuration="600"
            >
              <NavListContainer>
                <li>
                  <Link href="/">
                    <NavItemTitle style={textShadow}>Home</NavItemTitle>
                  </Link>
                </li>
                <li>
                  <Link href="#About">
                    <NavItemTitle>About</NavItemTitle>
                  </Link>
                </li>
                <li>
                  <Link href="#Releases">
                    <NavItemTitle>Releases</NavItemTitle>
                  </Link>
                </li>
                <li>
                  <Link href="#Contact">
                    <NavItemTitle>Contact</NavItemTitle>
                  </Link>
                </li>
              </NavListContainer>
            </ScrollspyNav>
          </HeaderTitle>
        </Header>
        <TitleContainer>
          <VideoTitle>Kousk</VideoTitle>
        </TitleContainer>
        <StyledVideo
          autoPlay
          loop
          muted
          src="https://kouskpublic.s3.us-east-2.amazonaws.com/AvatarCode.MOV"
        />
      </VideoContainer>
    );
  }
}
