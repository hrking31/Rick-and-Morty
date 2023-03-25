import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <hr />
      <Link to="/">
        <button>Log Out</button>
      </Link>
      <hr />
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
      <hr />
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <hr />
      <button>Random Character</button>
      <hr />
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
