import styled from "styled-components";
import { purple } from "../utilities/Colors";
import media from "styled-media-query";

export const Title = styled.h1`
  font-family: "Holiday Home";
  /* margin: 0 4em; */
  font-size: 5em;
  z-index: 1;
  color: ${purple};
  text-shadow: 1px 1px blue;
`;
export const Email = styled.h3`
  font-family: "Harrington";
  /* margin: 0 4em; */
  font-size: 2em;
  z-index: 1;
  color: white;
  text-shadow: 1px 1px blue;
  &:hover {
    text-shadow: 4px 4px black;
  }
`;

export const ReleasesTitle = styled(Title)`
  grid-area: 1 / 1 / -1 / -1;
  align-self: center;
  justify-self: center;
  padding-top: 20px;
  /* padding-bottom: 2%; */
`;

export const ContactTitle = styled(Title)`
  /* grid-area: 1 / 1 / -1 / -1; */
  align-self: center;
  justify-self: center;
  padding-top: 30px;
  /* padding-bottom: 2%; */
`;

export const VideoTitle = styled(Title)`
  font-size: 10em;
  text-align: center;
  padding-top: 170px;
  padding-right: 50px;
  color: #18003B;
    text-shadow: 0px 0px 7px white;


  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */

  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */

  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */


  `}
`;

export const AboutText = styled.p`
  font-family: "Harrington";
  font-size: 1.5em;
  color: white;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  padding-top: 6%;
  line-height: 1.5;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  font-size: 1em;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */    /* text-align: center; */
  font-size: 1.1em;

  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    `}
`;
