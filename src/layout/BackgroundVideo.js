import React, { Component } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { VideoTitle } from "../elements";
import ScrollspyNav from "react-scrollspy-nav";

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
  border: dashed 2px purple;
  height: 100px;
`;

const HeaderLogo = styled.div`
  width: 10%;
  /* height: 80%; */
  border: dashed 2px yellow;
`;

const HeaderTitle = styled(HeaderLogo)`
  /* border: dashed 2px purple; */
  width: 90%;
  border: dashed 2px green;
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

const NavItemTitle = styled.span`
  font-family: "Harrington";
  font-size: 2em;
  text-decoration: none;
  margin-right: 10px;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  font-size: 1.1rem
  margin-right: 10px;


  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */

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

export default class Video extends Component {
  render() {
    return (
      <VideoContainer>
        <Header>
          <HeaderLogo />
          <HeaderTitle>
            <ScrollspyNav
              scrollTargetIds={["About", "Releases", "Contact"]}
              activeNavClass="is-active"
              scrollDuration="600"
            >
              <NavListContainer>
                <li>
                  <a href="/">
                    <NavItemTitle>Home</NavItemTitle>
                  </a>
                </li>
                <li>
                  <a href="#About">
                    <NavItemTitle>About</NavItemTitle>
                  </a>
                </li>
                <li>
                  <a href="#Releases">
                    <NavItemTitle>Releases</NavItemTitle>
                  </a>
                </li>
                <li>
                  <a href="#Contact">
                    <NavItemTitle>Contact</NavItemTitle>
                  </a>
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
          src="https://s3.us-east-2.amazonaws.com/kouskpublic/MoriaBackground.mp4"
        />
      </VideoContainer>
    );
  }
}
