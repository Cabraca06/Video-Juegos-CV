
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {consolas} from '../../../../Data/consolasData';
import '../../styles/ConsolaDetalle.css';
export const ConsolaDetalle = () => {
  const { id } = useParams(); // Obtenemos el 'id' de la URL
  const consola = consolas.find(j => j.id === parseInt(id));

  if (!consola) {
    return <h2>Juego no encontrado</h2>;
  }

  return (
   <div className="container-det">
      <div className="detalle-container">
         <img src={consola.imagen} alt={consola.nombre} className="detalle-img" />
         <div className="detalle-info">
           <h1>{consola.nombre}</h1>
           <h2>Fabricante: {consola.fabricante}</h2>
           <p>{consola.descripcion || 'No hay descripción disponible para este juego.'}</p>
           <p>{consola.video}</p>
           <Link to="/Consolas" className="botonVer">
             Volver a Consolas
           </Link>
         </div>
       </div>
    </div>
  );
};
