/* (2) Se importan los componentes, modulos css y funciones necesarios. Define el componente App, que contiene un estado para los personajes, 
funciones para filtrar y buscar personajes utilizando la API de Rick and Morty, y retorna una estructura de elementos JSX que incluye 
un encabezado, una lista de tarjetas de personajes y enrutamiento para las páginas de inicio, sobre y detalles. */

import './App.css';
import { useState } from 'react';
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import About from './Views/About/About';
import Detail from './Views/Detail/Detail'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';

function App() {
   const [characters, setCharacters] = useState([]);

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFiltered)
   }

   const onSearch = (id) => {
      if (id > 826) {
         window.alert('¡Solo hay 826 IDs de personajes!');
         return;
      }

      const isIdLoaded = characters.some(character => character.id === Number(id));
      if (isIdLoaded) {
         window.alert('¡Ese ID ya está cargado!');
         return;
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            /* setLoadedIds((oldIds) => [...oldIds, id]); */
         } else {
            window.alert('¡Debe ingresar un ID!');
         }
      })
         .catch((error) => {
            console.log('Error:', error);
            window.alert('Ocurrió un error al realizar la solicitud');
         });
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Routes>
            <Route path='/home' element={<>
               <h1>Rick and Morty</h1>
               <Cards characters={characters} onClose={onClose}></Cards>
            </>} />
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:detailId' element={<Detail />}></Route>
         </Routes>
      </div>
   );
}

export default App;
