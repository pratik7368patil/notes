import React from "react";
import CardItem from "./card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Divider } from "@material-ui/core";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mainContainer: {
    padding: 20,
  },
  gridStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function CardList(props) {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h4" component="h4">
        <Box fontWeight="bold">Project 1</Box>
      </Typography>
      <Box mt={2} mb={2}>
        <Divider />
      </Box>
      <Grid container spacing={1} className={classes.gridStyle}>
        <Grid item sm={6} md={3}>
          <CardItem />
        </Grid>
        <Grid item sm={6} md={3}>
          <CardItem />
        </Grid>
        <Grid item sm={6} md={3}>
          <CardItem />
        </Grid>
        <Grid item sm={6} md={3}>
          <CardItem />
        </Grid>
      </Grid>
    </div>
  );
}
