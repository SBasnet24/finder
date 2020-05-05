import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlerts: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlerts(" Please Enter Something", "dark");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
      this.mainInput.value = "";
    }
  };
  handleChange = ({ currentTarget }) =>
    this.setState({
      text: currentTarget.value,
    });

  render() {
    const { clearUsers, users } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            ref={(ref) => (this.mainInput = ref)}
            onChange={this.handleChange}
            type="text"
            name="text"
            value={this.state.name}
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
  }
}

export default Search;
