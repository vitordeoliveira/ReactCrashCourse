import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <small>
        Using jsonplaceholder> so the ID of the Todos just increment by one,
        more than one add todo and start to do error
      </small>
      <p>
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </p>
    </header>
  );
}
