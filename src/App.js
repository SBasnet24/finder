import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Sujan Basnet";
    const list = ["name", "age", "sex"];
    return (
      <div className="App ">
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        {true ? <h1>Hello</h1> : <h2>K cha</h2>}
      </div>
    );
  }
}

export default App;
