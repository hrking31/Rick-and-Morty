import { useState } from "react";
import style from "../styles/SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  return (
    <div className={style.searchBar}>
      <input
        className={style.search}
        onChange={handleChange}
        type="search"
        name="search"
        value={id}
        placeholder="Enter id"
      />
      <button className={style.buttonSearch} onClick={() => onSearch(id)}>
        Add Character
      </button>
    </div>
  );
}
