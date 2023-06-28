import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.map(
        ({ id, name, species, status, gender, image, origin }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              status={status}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
