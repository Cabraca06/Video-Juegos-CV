
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {consolas} from '../../../../Data/consolasData';
import '../../styles/ConsolaDetalle.css';
export const ConsolaDetalle = () => {
  const { id } = useParams(); // Obtenemos el 'id' de la URL
  const consola = consolas.find(c => c.id === parseInt(id));

  if (!consola) {
    return <h2>Consola no encontrada</h2>;
  }

  return (
   <div className="container-det">
      <div className="detalle-container">
         <img src={consola.imagen} alt={consola.nombre} className="detalle-img" />
         <div className="detalle-info">
           <h1>{consola.nombre}</h1>
           <h2>Fabricante: {consola.fabricante}</h2>
           <p>{consola.descripcion || 'No hay descripción disponible para este juego.'}</p>
           {consola.videoId && (
            <div className="detalle-video-container">
              <iframe
                src={`https://www.youtube.com/embed/${consola.videoId}`}
                title={consola.nombre}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
           <Link to="/Consolas" className="botonVer">
             Volver a Consolas
           </Link>
         </div>
       </div>
    </div>
  );
};
