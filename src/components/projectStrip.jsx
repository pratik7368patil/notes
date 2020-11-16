import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, IconButton, Box } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  headStyle: {
    flexGrow: 1,
    textDecoration: "none",
  },
});

export default function ProjectStrip(props) {
  const classes = useStyles();
  const { item, navigateToProject } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className={classes.root} variant="outlined">
      <Box
        className={classes.headStyle}
        onClick={() => navigateToProject(`/dashboard/${item.id}`, item.id)}
      >
        <Typography variant="body1" color="primary">
          <Box ml={2} fontWeight="bold">
            {item.name}
          </Box>
        </Typography>
      </Box>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Open</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </Paper>
  );
}
