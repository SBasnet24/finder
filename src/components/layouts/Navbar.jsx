import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
// import Navbar from './Navbar';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-dark">
      <h2>
        <NavLink to="/">
          <i className={icon} /> {title}
        </NavLink>
      </h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "GitFinder",
  icon: "fa fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
