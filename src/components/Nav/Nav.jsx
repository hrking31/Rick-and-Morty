import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "../styles/Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.nav}>
      <Link to="/">
        <button className={style.logout}>Logout</button>
      </Link>
      <div className={style.navButtons}>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
      {/* <button>Random Character</button> */}
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
