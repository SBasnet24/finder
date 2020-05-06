/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "./../context/github/githubContext";
import { Spinner } from "./../components/layouts/Spinner";
import { PropTypes } from "prop-types";
import { Repos } from "./../components/repos/Repos";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, getUserRepos, repos } = githubContext;
  useEffect(() => {
    const { login } = match.params;
    getUser(login);
    getUserRepos(login);
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;
  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-dark">
        Back To Search
      </Link>
      Hirable :{" "}
      {hireable ? (
        <i className="fa fa-check text-success" />
      ) : (
        <i className="fa fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: {login}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: {company}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog: {blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-dark">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-primary">Public Repos: {public_repos}</div>
        <div className="badge badge-light">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};
export default User;
