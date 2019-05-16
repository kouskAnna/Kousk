import React, { Component } from "react";
import styled, { css } from "styled-components";
import Grid from "styled-components-grid";
import { ThemeProvider } from "styled-components";
import { purple } from "../utilities/Colors";

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

const Container = styled.div`
  grid-area: 9 / 1 / 10 / -1;
`;

const DiscoContainer = styled.div`
  background-color: black;
  text-align: center;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${purple};
  color: white;
  font-family: "Holiday Home";
  font-size: 28px;
  &:hover {
    background: ${purple};
    border: 2px solid blue;
  }
`;

export const Tag = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: blue;
  }
`;

export default class Discography extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <DiscoContainer>
            <Grid halign="justify-center">
              <Grid.Unit
                size={{ xs: 1, md: 1, lg: 0.25, xl: 0.25 }}
                style={{ paddingBottom: 70 }}
              >
                <iframe
                  style={{ frameBorder: 3, width: 350, height: 350 }}
                  src="https://bandcamp.com/EmbeddedPlayer/track=3663964496/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
                  seamless
                >
                  <a href="http://kousk.bandcamp.com/track/kousk-esylus-tunnel-visions">
                    Kousk &amp; Esylus - Tunnel Visions by KousK
                  </a>
                </iframe>
              </Grid.Unit>
              <Grid.Unit
                size={{ xs: 1, md: 1, lg: 0.25, xl: 0.25 }}
                style={{ paddingBottom: 70 }}
              >
                <iframe
                  style={{ border: 0, width: 350, height: 350 }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=2668580404/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1672680331/transparent=true/"
                  seamless
                >
                  <a href="http://casacaos.bandcamp.com/album/mux-vol-4-a">
                    MUX vol.4 [a] by Casa Caos
                  </a>
                </iframe>
              </Grid.Unit>
            </Grid>
            <Grid halign="justify-center">
              <Grid.Unit
                size={{ xs: 1, md: 1, lg: 0.25, xl: 0.25 }}
                style={{ paddingBottom: 70 }}
              >
                <iframe
                  style={{ border: 0, width: 350, height: 350 }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=1997835665/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                >
                  <a href="http://kousk.bandcamp.com/album/true-moon-ep">
                    True Moon EP by KousK
                  </a>
                </iframe>
              </Grid.Unit>
              <Grid.Unit
                size={{ xs: 1, md: 1, lg: 0.25, xl: 0.25 }}
                style={{ paddingBottom: 70 }}
              >
                <iframe
                  style={{ border: 0, width: 350, height: 350 }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=3917243234/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                >
                  <a href="http://garasadahrecords.bandcamp.com/album/kousk-transmute">
                    KousK - Transmute by Garasadah Records
                  </a>
                </iframe>
              </Grid.Unit>
            </Grid>
            <Grid halign="justify-center">
              <Grid.Unit
                size={{ xs: 1, md: 1, lg: 0.25, xl: 0.25 }}
                style={{ paddingBottom: 70 }}
              >
                <iframe
                  style={{ border: 0, width: 350, height: 350 }}
                  src="https://bandcamp.com/EmbeddedPlayer/track=2441640076/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                >
                  <a href="http://kousk.bandcamp.com/track/melo-nade-hindsight-kousk-remix">
                    Melo.Nade - Hindsight (Kousk Remix) by KousK
                  </a>
                </iframe>
              </Grid.Unit>
              <Grid.Unit
                size={{ xs: 1, md: 1, lg: 0.25, xl: 0.25 }}
                style={{ paddingBottom: 70 }}
              >
                <iframe
                  style={{ border: 0, width: 350, height: 350 }}
                  src="https://bandcamp.com/EmbeddedPlayer/track=2636650008/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                >
                  <a href="http://kousk.bandcamp.com/track/nagual-tzututa-kousk-remix">
                    Nagual - Tzututa (Kousk Remix) by KousK
                  </a>
                </iframe>
              </Grid.Unit>
            </Grid>
            <Button>
              <Tag href="https://kousk.bandcamp.com/music">Hear More</Tag>
            </Button>
          </DiscoContainer>
        </Container>
      </ThemeProvider>
    );
  }
}
