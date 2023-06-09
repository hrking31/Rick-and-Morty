import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div className={style.card}>
        <div className={style.close}>
          <button
            className={style.closeBtn}
            onClick={() => props.onClose(props.id)}
          >
            ❎
          </button>
        </div>

        <div className={style.cardBody}>
          <Link to={`/detail/${props.id}`}>
            <h2 className={style.name}>{props.name}</h2>
          </Link>
          {/* <h2>{props.status}</h2> */}
          {/* <h2>{props.species}</h2> */}
          {/* <h2>{props.gender}</h2> */}
          {/* <h2>{props.origin}</h2> */}
        </div>

        <div className={style.fav}>
          <button className={style.favoriteBtn}>❤️</button>
        </div>

        <div className={style.cardImage}>
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </div>
  );
}
