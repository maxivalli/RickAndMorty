import './App.css';

import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';

import axios from "axios";

import About from './Views/About/About';
import Detail from './Views/Detail/Detail'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Login from './Views/Login/Login'

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
         <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={
               <React.Fragment>
                  <Nav onSearch={onSearch}></Nav>
                  <h1>Rick and Morty</h1>
                  <Cards characters={characters} onClose={onClose}></Cards>
               </React.Fragment>
            } />
            <Route path='/about' element={
               <React.Fragment>
                  <Nav onSearch={onSearch}></Nav>
                  <About />
               </React.Fragment>
            }></Route>
            <Route path='/detail/:detailId' element={
               <React.Fragment>
                  <Nav onSearch={onSearch}></Nav>
                  <Detail />
               </React.Fragment>
            }></Route>
         </Routes>
         <Outlet />
      </div>
   );
}

export default App;
