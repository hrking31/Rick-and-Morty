import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/Views/About/About";
import Detail from "./components/Views/Detail/Detail";
import Error404 from "./components/Views/Error404/Error404";
import Form from "./components/Form/Form";
//import images from "./assets/images";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = "ejemplo@mail.com";
  const PASSWORD = "1234";
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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

  // function Caracter() {
  //   setCharacters((oldChars) => {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     const newCharacter = characters[randomIndex];
  //     return [...oldChars, newCharacter];
  //   });
  // }

  return (
    <div className={style.app}>
      {location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
      {/* <img src={images.img4} /> */}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
