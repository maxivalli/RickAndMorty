import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar( {onSearch} ) {
   const [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className={style.searchBar}>
         <input 
         type='search' 
         onChange={handleChange} 
         value={id}
         placeholder="Ingresa un ID..."/>
         <button onClick={() => {onSearch(id); setId("")}} title="Agregar">
            <i className="fa fa-plus"></i>
         </button>
      </div>
   );
}
