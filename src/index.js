/* (1) Se importan las bibliotecas de React y ReactDOM y el enrutador BrowserRouter de react-router-dom. Luego, renderiza
el componente App dentro del enrutador BrowserRouter y lo muestra en el elemento con el ID 'root' del documento HTML. */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
)
