import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/JuegoDetalle.css';
import  juegos  from '../../../../Data/juegosData';

export const JuegoDetalle = () => {
  const { id } = useParams(); // Obtenemos el 'id' de la URL
  const juego = juegos.find(j => j.id === parseInt(id));

  if (!juego) {
    return <h2>Juego no encontrado</h2>;
  }

  return (
   <div className="container-det">
      <div className="detalle-container">
         <img src={juego.imagen} alt={juego.nombre} className="detalle-img" />
         <div className="detalle-info">
           <h1>{juego.nombre}</h1>
           <h2>Género: {juego.genero}</h2>
           <p>{juego.descripcion || 'No hay descripción disponible para este juego.'}</p>
           {juego.videoId && (
            <div className="detalle-video-container">
              <iframe
                src={`https://www.youtube.com/embed/${juego.videoId}`}
                title={juego.nombre}
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
