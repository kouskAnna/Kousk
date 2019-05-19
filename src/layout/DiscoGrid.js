import React, { Component } from "react";
import styled from "styled-components";
import { purple } from "../utilities/Colors";
import media from "styled-media-query";

const DiscoGridContainer = styled.div`
  grid-area: 9 / 1 / 10 / -1;
  display: grid;
  grid: 1fr 1fr 1fr/ 1fr;
  /* grid-gap: 80px 10px; */
  background: black;
  /* border: dashed 1px red; */
  padding-top: 80px;
  padding-bottom: 80px;
`;

const AlbumGrid = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: dashed 1px purple; */
`;

const AlbumGridTwo = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: dashed 1px purple; */
`;

const AlbumGridThree = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: dashed 1px purple; */
`;

const ImageBox = styled.div`
  /* border: dashed 1px red; */
  padding-top: 60px;
  padding-bottom: 60px;
`;

const Button = styled.button`
  justify-self: center;
  width: 150px;
  background: transparent;
  border-radius: 5px;
  border: 2px solid blue;
  color: white;
  font-family: "Harrington";
  font-size: 28px;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    background: ${purple};
    border: 2px solid blue;
  }
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  width: 120px;
  font-size: 20px;

  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */

  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */


  `}
`;

export const Tag = styled.a`
  text-decoration: none;
  color: blue;
  /* text-shadow: 1px 1px 5px white; */
  &:hover {
    color: white;
  }
`;

export default class DiscoGrid extends Component {
  render() {
    return (
      <DiscoGridContainer>
        <AlbumGrid>
          <ImageBox>
            <iframe
              style={{ border: 0, width: 350, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/track=3663964496/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
              seamless
            >
              <a href="http://kousk.bandcamp.com/track/kousk-esylus-tunnel-visions">
                Kousk &amp; Esylus - Tunnel Visions by KousK
              </a>
            </iframe>
          </ImageBox>
          <ImageBox>
            <iframe
              style={{ border: 0, width: 350, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2668580404/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1672680331/transparent=true/"
              seamless
            >
              <a href="http://casacaos.bandcamp.com/album/mux-vol-4-a">
                MUX vol.4 [a] by Casa Caos
              </a>
            </iframe>
          </ImageBox>
        </AlbumGrid>

        <AlbumGridTwo>
          <ImageBox>
            <iframe
              style={{ border: 0, width: 350, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1997835665/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="http://kousk.bandcamp.com/album/true-moon-ep">
                True Moon EP by KousK
              </a>
            </iframe>
          </ImageBox>
          <ImageBox>
            <iframe
              style={{ border: 0, width: 350, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=3917243234/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="http://garasadahrecords.bandcamp.com/album/kousk-transmute">
                KousK - Transmute by Garasadah Records
              </a>
            </iframe>
          </ImageBox>
        </AlbumGridTwo>
        <AlbumGridThree>
          <ImageBox>
            <iframe
              style={{ border: 0, width: 350, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2441640076/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="http://kousk.bandcamp.com/track/melo-nade-hindsight-kousk-remix">
                Melo.Nade - Hindsight (Kousk Remix) by KousK
              </a>
            </iframe>
          </ImageBox>
          <ImageBox>
            <iframe
              style={{ border: 0, width: 350, height: 350 }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2636650008/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="http://kousk.bandcamp.com/track/nagual-tzututa-kousk-remix">
                Nagual - Tzututa (Kousk Remix) by KousK
              </a>
            </iframe>{" "}
          </ImageBox>
        </AlbumGridThree>
        <Button>
          <Tag href="https://kousk.bandcamp.com/music">Hear More</Tag>
        </Button>
      </DiscoGridContainer>
    );
  }
}
