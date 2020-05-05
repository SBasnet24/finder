import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./users/Users";
import User from "./users/User";
import { Search } from "./users/Search";
import axios from "axios";
import { Alert } from "./components/layouts/alert";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  searchUsers = async (user) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}
         &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // get Single User
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}
         &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  // get Users repo
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}
         &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  // clears users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  // Set Alert if something is wrong
  setAlerts = (msg, type) => {
    this.setState({ alert: { msg, type } });
    // alert aairakhcha ra certain time pachi hatosh bhanera
    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    const { users, loading, user, repos } = this.state;
    return (
      <div className="App ">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    clearUsers={this.clearUsers}
                    setAlerts={this.setAlerts}
                    users={users}
                    searchUsers={this.searchUsers}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
