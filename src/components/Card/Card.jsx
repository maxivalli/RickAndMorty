import style from "./Card.module.css";
import { Link } from 'react-router-dom';

export default function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            <button className={style.button} onClick={() => onClose(id)} title="Cerrar">X</button>
         </div>
         <Link to={`/detail/${id}`}>
            <img src={image} alt='' title='Más info' />
         </Link>
         <h2 className={style.name}>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}
