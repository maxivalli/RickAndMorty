/* (3) Se importa el estilo y la funcion Link. Se renderiza la Card que recibe varias propiedas como argumento. */

import style from "./Card.module.css";
import { Link } from 'react-router-dom';

export default function Card({ id, name, species, status, gender, image, origin, onClose }) {
   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            <button className={style.button} onClick={() => onClose(id)} title="Cerrar">X</button>
         </div>
         <Link to={`/detail/${id}`}>
         <img src={image} alt='' title='Más info'/>
         </Link>
         <h2 className={style.name}>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}
