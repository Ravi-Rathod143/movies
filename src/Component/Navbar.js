import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          background: "lightgray",
          color: "blue",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Movies</h1>
        </Link>

        <Link to="/fav" style={{ textDecoration: "none" }}>
          <h2 style={{ marginLeft: "5rem" }}>Favourite</h2>
        </Link>
      </div>
    );
  }
}