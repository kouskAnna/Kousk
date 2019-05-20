import React, { Component } from "react";
import styled from "styled-components";
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
  background-color: black;
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
  /* border: dashed 2px red; */
`;

const NavItemTitle = styled.span`
  font-family: "Harrington";
  font-size: 2em;
  text-decoration: none;
  margin-right: 30px;
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
              scrollTargetIds={["section_1", "section_2", "section_3"]}
              activeNavClass="is-active"
            >
              <NavListContainer>
                <li>
                  <a href="/">
                    <NavItemTitle>Home</NavItemTitle>
                  </a>
                </li>
                <li>
                  <a href="#section_1">
                    <NavItemTitle>About</NavItemTitle>
                  </a>
                </li>
                <li>
                  <a href="#section_2">
                    <NavItemTitle>Releases</NavItemTitle>
                  </a>
                </li>
                <li>
                  <a href="#section_3">
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
