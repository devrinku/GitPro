import React, { useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import GithubState from "../src/components/context/github/GithubState";
import "./App.css";
import Home from "./components/layouts/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/layouts/pages/About";
import AlertState from "./components/context/alert/AlertState";
import NotFound from "./components/layouts/pages/NotFound";
import Userinfo from "./components/user/Userinfo";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:name" component={Userinfo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
