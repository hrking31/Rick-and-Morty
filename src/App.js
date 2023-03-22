import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import axios from "axios";
//import SearchBar from "./components/SearchBar.jsx";
//import characters from "./data.js";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("Ya existe ese Personaje");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
