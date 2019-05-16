import React, { Component } from "react";
import styled from "styled-components";

let Header = styled.header`
  grid-area: 1 / 1 / 2 / -1;
  background-color: black;
  display: flex;
  flex-direction: horizontal;
  justify-content: flex-start;
  /* height: 120px; */
`;

const HeaderLogo = styled.div`
  width: 10%;
  /* height: 80%; */
  border: dashed 2px purple;
`;

const HeaderTitle = styled(HeaderLogo)`
  border: dashed 2px purple;
  width: 90%;
`;

// const HeaderChild3 = styled(HeaderChild1)`
//   border: dashed 2px purple;
//   width: 20%;
// `;

export default class HeaderClass extends Component {
  render() {
    return (
      <Header>
        <HeaderLogo />
        <HeaderTitle />
      </Header>
    );
  }
}
