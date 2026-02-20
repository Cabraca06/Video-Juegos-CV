import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/JuegoDetalle.css';
import  juego  from '../../../../Data/juegosData';

export const JuegoDetalle = () => {
  const { id } = useParams(); // Obtenemos el 'id' de la URL
  const juegos = juego.find(c => c.id === parseInt(id));
  

  return (
   <div className="container-det">
      <div className="detalle-container">
         <img src={juegos.imagen} alt={juego.nombre} className="detalle-img" />
         <div className="detalle-info">
           <h1>{juegos.nombre}</h1>
           <h2>Género: {juegos.genero}</h2>
           <p>{juegos.descripcion || 'No hay descripción disponible para este juego.'}</p>
           {juegos.videoId && (
            <div className="detalle-video-container">
              <iframe
                src={`https://www.youtube.com/embed/${juegos.videoId}`}
                title={juegos.nombre}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
           <Link to="/juegos" className="botonVer">
             Volver a Juegos
           </Link>
         </div>
       </div>
    </div>
  );
};
