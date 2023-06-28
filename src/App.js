import React, { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import axios from "axios";

import "./App.css";
import About from "./Views/About/About";
import Detail from "./Views/Detail/Detail";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Login from "./Views/Login/Login";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const characterFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(characterFiltered);
  };

  const onSearch = (id) => {
    if (id > 826) {
      window.alert("¡Solo hay 826 IDs de personajes!");
      return;
    }

    const isIdLoaded = characters.some(
      (character) => character.id === Number(id)
    );
    if (isIdLoaded) {
      window.alert("¡Ese ID ya está cargado!");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡Debe ingresar un ID!");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        window.alert("Ocurrió un error al realizar la solicitud");
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Nav onSearch={onSearch} />
              <h1>Rick and Morty</h1>
              <Cards characters={characters} onClose={onClose} />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Nav onSearch={onSearch} />
              <About />
            </>
          }
        />
        <Route
          path="/detail/:detailId"
          element={
            <>
              <Nav onSearch={onSearch} />
              <Detail />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;

