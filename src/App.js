import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Navbar from "./components/navbar";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import DashBoard from "./components/dashboard";

import apiData from "./services/data";

function App() {
  const [drawerStatus, setDrawerStatus] = React.useState(false);
  const [data, setData] = React.useState(apiData);

  const handleDrawerToggle = () => {
    setDrawerStatus(!drawerStatus);
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          data={data}
          drawerStatus={drawerStatus}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => <SignUp {...props} />}
          />
          <Route
            exact
            path="/signin"
            render={(props) => <SignIn {...props} />}
          />
          <Route
            path="/dashboard"
            exact
            render={(props) => (
              <DashBoard
                drawerStatus={drawerStatus}
                data={data}
                handleDrawerToggle={handleDrawerToggle}
                {...props}
              />
            )}
          />
          <Route path="/" exact render={(props) => <Home {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
