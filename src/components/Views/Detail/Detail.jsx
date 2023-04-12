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
    <div className={style.containerDetail}>
      <div className={style.name}>
        <h1>{character.name}</h1>
      </div>
      <div className={style.containerInfo}>
        <div className={style.infoCharacter}>
          <div className={style.status}>
            <h1>{character.status}</h1>
          </div>
          <div>
            <h1>{character.species}</h1>
            <h4>SPECIE</h4>
            <h1>{character.gender}</h1>
            <h4>GENDER</h4>
            <h1>{character.origin?.name}</h1>
            <h4 className={style.origin}>ORIGIN</h4>
          </div>
        </div>
        <div className={style.imgCharacter}>
          <img src={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  );
}
