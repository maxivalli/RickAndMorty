import React, { useState } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import altImage from "../../Assets/altImage.jpg";

export default function Card({ id, name, species, gender, image, onClose }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button
          className={style.button}
          onClick={() => onClose(id)}
          title="Cerrar"
        >
          X
        </button>
      </div>
      <Link to={`/detail/${id}`}>
        <img
          src={isHovered ? altImage : image}
          alt=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
      <h2 className={style.name}>Name: {name}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}
