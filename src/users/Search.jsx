import React, { useState, useContext } from "react";
import GithubContext from "./../context/github/githubContext";
import AlertContext from "./../context/alert/alertContext";

export const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { users, clearUsers } = githubContext;
  const { setAlerts } = alertContext;

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlerts(" Please Enter Something", "dark");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  const handleChange = ({ currentTarget }) => setText(currentTarget.value);
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          type="text"
          name="text"
          value={text}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {/* Clearing the users */}
      {users.length > 0 && (
        <button onClick={clearUsers} className="btn btn-light btn-block">
          Clear
        </button>
      )}
    </div>
  );
};
