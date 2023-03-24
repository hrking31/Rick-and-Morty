import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <button>Random Character</button>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
