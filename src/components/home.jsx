import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 561,
    padding: "0px 30px 0px 30px",
    borderRadius: 0,
  },
  mainContainer: {
    height: "100%",
  },
  alignToCenter: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  },
  mainBtn: {
    width: 250,
    "&:hover": {
      background: "gray",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.main} elevation={0}>
        <Grid container className={classes.mainContainer}>
          <Grid item sm={6} className={classes.alignToCenter}>
            <Box mb={4}>
              <Typography variant="h3">
                <Box fontWeight="fontWeightBold">
                  Best Way to keep your notes!
                </Box>
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="body1">
                Access your notes anywhere, easy to share and manage! Lorem
                ipsum dolor sit amet consectetur adipiscing elit cursus
                porttitor, libero iaculis vehicula nec commodo vulputate odio
                dignissim ante vitae,
              </Typography>
            </Box>
            <Button
              variant="contained"
              className={classes.mainBtn}
              color="primary"
              component={Link}
              to="/dashboard"
            >
              Get Started
            </Button>
          </Grid>
          <Grid item sm={6}></Grid>
        </Grid>
      </Paper>
    </>
  );
}
