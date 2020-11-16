import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarNewColor: {
    background: "white",
    color: "#2b2b2b",
    boxShadow: "none",
  },
  mainTitle: {
    flexGrow: 1,
  },
  title: {
    color: "#2b2b2b",
    textDecoration: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  projectTextStyleMain: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  projectTextStyle: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  const { handleDrawerToggle, drawerStatus, data } = props;
  const history = useHistory();

  const navigateTo = (url) => {
    history.push(url);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={drawerStatus}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <Box className={classes.projectTextStyleMain}>
          <Typography variant="body1" className={classes.projectTextStyle}>
            <Box fontWeight="fontWeightBold" m={2}>
              Project List
            </Box>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {data.map((item) => (
            <ListItem
              key={item.id}
              button
              onClick={() => navigateTo(`/dashboard/${item.id}`)}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar position="static" className={classes.appBarNewColor}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.mainTitle}>
            <Box
              className={classes.title}
              fontWeight="fontWeightBold"
              component={Link}
              to="/"
            >
              Notes
            </Box>
          </Typography>

          <Button color="inherit" component={Link} to="/signin">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
