import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div className={style.card}>
        {/* <div className={style.close}> */}
        <button onClick={() => props.onClose(props.id)}>CLOSE</button>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        {/* <h2>{props.status}</h2> */}
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
        {/* <h2>{props.origin}</h2> */}
        <img src={props.image} alt={props.name} />
      </div>
    </div>
    // </div>
  );
}
