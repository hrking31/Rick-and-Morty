import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "../styles/Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.nav}>
      <div>
        <Link to="/">
          <button>Log Out</button>
        </Link>
        <Link to="/about">
          <button>ABOUT</button>
        </Link>
        <Link to="/home">
          <button>HOME</button>
        </Link>
        {/* <button>Random Character</button> */}
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
