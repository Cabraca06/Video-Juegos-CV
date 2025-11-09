import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/JuegoDetalle.css';



// Crearemos este archivo de estilos

// Importamos las imágenes y la data de nuevo, ya que este es un componente separado
import callOfDutyImg from '../../../../img/CallGOLDWAR.png';
import crashImg from '../../../../img/Crash.jpeg';
import ufcImg from '../../../../img/UFC5.jpg';
import granTurismoImg from '../../../../img/Gran turismo.avif'; 
import unchartedImg from '../../../../img/Uncharted.jpg';
import godOfWarImg from '../../../../img/God of war.jpg'; 

const juegos = [
    {id: 1, nombre: 'Call of Duty', genero: 'Guerra', imagen: callOfDutyImg, descripcion: 'Call of Duty: Black Ops Cold War es un videojuego de disparos en primera persona de 2020 desarrollado por Treyarch y Raven Software.',video:<iframe id="video" width="540" height="315" src="https://www.youtube.com/embed/SvNTIPZTulk?si=_qNFqNqrY-zdfLzU&pause=1"  title="call of duty cold war"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>, precio: 59.99 },

    {id: 2, nombre: 'Crash Bandicoot', genero: 'Aventura', imagen: crashImg, descripcion: 'Crash Bandicoot es una franquicia de videojuegos de plataformas. La serie fue creada por Andy Gavin y Jason Rubin durante su permanencia en Naughty Dog para Sony Computer Entertainment.', video:<iframe width="560" height="315" src="https://www.youtube.com/embed/o2b0PmF1bwg?si=IEaJ9x47jmDW8nPR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>, precio: 49.99 }, 

    {id: 3, nombre: 'UFC', genero: 'Pelea', imagen: ufcImg, descripcion: 'EA Sports UFC 5 es un videojuego de artes marciales mixtas desarrollado por EA Vancouver y publicado por EA Sports.', video:<iframe width="560" height="315" src="https://www.youtube.com/embed/AkeoP2HQUdE?si=u8YC28OvBX74ODL3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>, precio: 69.99 },

    {id: 4, nombre: 'Gran Turismo', genero: 'Carreras', imagen: granTurismoImg, descripcion: 'Gran Turismo es una serie de videojuegos de simulación de carreras producida por Polyphony Digital.', video:<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/1tBUsXIkG1A?si=ZjMQB2ZK_VAh9kOv&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>, precio: 79.99 },

    {id: 5, nombre:'Uncharted', genero: 'Historia', imagen: unchartedImg, descripcion: 'Uncharted es una serie de videojuegos de acción-aventura. La serie sigue al cazafortunas Nathan Drake.', video:<iframe width="560" height="315" src="https://www.youtube.com/embed/FSbap_5yCjI?si=-aBfSVVFir-deUfg" title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>, precio: 59.99 },

    {id: 6, nombre:'God of War', genero: 'Historia', imagen: godOfWarImg, descripcion: 'God of War es una serie de videojuegos de acción-aventura creada por David Jaffe en Santa Monica Studio de Sony.', video:<iframe width="560" height="315" src="https://www.youtube.com/embed/dIQGI36BxDE?si=1JOtwM7DDikEbcXj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>, precio: 89.99 },
];

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
           <p>{juego.video}</p>
           <Link to="/juegos" className="botonVer">
             Volver a Juegos
           </Link>
         </div>
       </div>
    </div>
  );
};
