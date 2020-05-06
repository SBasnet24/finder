import React from "react";
import { Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Navbar from "./components/layouts/Navbar";
import User from "./users/User";
import { Alert } from "./components/layouts/alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className="App ">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
