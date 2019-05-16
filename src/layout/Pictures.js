import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Image1 from "../images/alien.jpg";
import Image2 from "../images/sideFeather.jpg";
import Image3 from "../images/kousk4.jpg";
import Image4 from "../images/kousk2.jpg";
import Image5 from "../images/Mono.jpg";
import Image6 from "../images/dome.jpg";
import Image7 from "../images/TunnelVision2.jpg";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import styled from "styled-components";

const GridListContainer = styled.div`
  grid-area: 6 / 1 / 7 / -1;
`;

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  }
});

function Pictures(props) {
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 5;
    }

    if (isWidthUp("lg", props.width)) {
      return 4;
    }

    if (isWidthUp("md", props.width)) {
      return 3;
    }
    if (isWidthUp("sm", props.width)) {
      return 2;
    }
    if (isWidthUp("xs", props.width)) {
      return 1;
    }

    return 1;
  };
  const { classes } = props;

  return (
    <React.Fragment>
      <GridListContainer>
        <div className={classes.root}>
          <GridList
            className={classes.gridList}
            cols={getGridListCols()}
            spacing={0}
            cellHeight={300}
          >
            <GridListTile cols={0.25}>
              <img src={Image1} />
            </GridListTile>
            <GridListTile cols={0.25}>
              <img src={Image2} />
            </GridListTile>
            <GridListTile cols={0.25}>
              <img src={Image3} />
            </GridListTile>
            <GridListTile cols={0.25}>
              <img src={Image5} />
            </GridListTile>
            <GridListTile cols={0.25}>
              <img src={Image4} />
            </GridListTile>
            <GridListTile cols={0.25}>
              <img src={Image6} />
            </GridListTile>
          </GridList>
        </div>
      </GridListContainer>
    </React.Fragment>
  );
}

Pictures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pictures);
