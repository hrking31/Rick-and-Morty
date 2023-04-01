import style from "../../styles/Detail.module.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.detail}>
      <h2>{character.name}</h2>
      <h2>STATUS | {character.status}</h2>
      <h2>SPECIE | {character.species}</h2>
      <h2>GENDER | {character.gender}</h2>
      <h2>ORIGIN | {character.origin?.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
