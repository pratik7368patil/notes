import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectStrip from "./projectStrip";
import { Box, Typography, Divider, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useHistory, Switch, Route } from "react-router-dom";
import Project from "./project";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;
  const [currentProject, setCurrentProject] = React.useState({});
  const [currentProjectItem, setCurrentProjectItem] = React.useState({});

  const navigateToProject = (url, id) => {
    const newProject = data.filter((item) => item.id === id);
    const [project] = newProject;
    setCurrentProject(project);
    history.push(url);
  };

  const navigateToProjectItem = (url, id) => {
    const newProjectItem = currentProject.projectList.filter(
      (item) => item.id === id
    );
    const [item] = newProjectItem;
    setCurrentProjectItem(item);
    history.push(url);
  };

  return (
    <>
      <Box m={3}>
        <Typography variant="h6" color="textSecondary" component="h6">
          <Box fontWeight="bold">Dashboard</Box>
        </Typography>
        <Box mt={2} mb={2}>
          <Divider />
        </Box>
        <Grid container spacing={1}>
          <Grid item sm={6} md={3}>
            <Alert severity="info">Add New Project</Alert>
          </Grid>
          {data.length > 0 ? (
            data.map((item) => (
              <Grid item sm={6} md={3} key={item.id}>
                <ProjectStrip
                  item={item}
                  navigateToProject={navigateToProject}
                />
              </Grid>
            ))
          ) : (
            <Grid item sm={6} md={3}>
              <Alert severity="info">Project List is Empty!</Alert>
            </Grid>
          )}
        </Grid>
      </Box>
      <Switch>
        <Route
          exact
          path="/dashboard/:id"
          render={(props) => <Project itemList={currentProject} {...props} />}
        />
      </Switch>
    </>
  );
}
