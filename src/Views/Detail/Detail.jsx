import style from '../Detail/Detail.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.detail}>
      <div>
        <h2>detalle</h2>
      </div>
      <div className={style.container}>
        <img src={character.image} alt=''></img>
        <div className={style.text}>
        <h3>Name: {character.name && character.name}</h3>
        <h4>Gender: {character.gender}</h4>
        <h4>Status: {character.status && character.status}</h4>
        <h4>Species: {character.species && character.species}</h4>
        <h4>Origin: {character.origin?.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Detail;