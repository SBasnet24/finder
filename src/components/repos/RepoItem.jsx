import React from "react";
import { PropTypes } from "prop-types";

export const RepoItem = ({ repo: { html_url, name } }) => {
  return (
    <div className="card">
      <h3>
        <a style={{ color: "#313538" }} href={html_url}>
          {name}
        </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
