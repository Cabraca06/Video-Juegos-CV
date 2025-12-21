import callOfDutyImg from '../img/CallGOLDWAR.png';
import crashImg from '../img/Crash.jpeg';
import ufcImg from '../img/UFC5.jpg';
import granTurismoImg from '../img/Gran turismo.avif'; 
import unchartedImg from '../img/Uncharted.jpg';
import godOfWarImg from '../img/God of war.jpg'; 
import fifa24Img from '../img/FC24.jpg';
import thelastofus2Img from '../img/the last of us.jpg';
import residentEvilVlillageImg from '../img/residentEVillage.png';
import assesingCreedValhallaImg from '../img/assesins creed.webp';
import Cyberpunk2077Img from '../img/cyberp2077.png';


const juegos = [
    {id: 1, nombre: 'Call of Duty', genero: 'Guerra', imagen: callOfDutyImg, descripcion: 'Call of Duty: Black Ops Cold War es un videojuego de disparos en primera persona de 2020 desarrollado por Treyarch y Raven Software.', videoId: "SvNTIPZTulk", precio: 59.99 },

    {id: 2, nombre: 'Crash Bandicoot', genero: 'Aventura', imagen: crashImg, descripcion: 'Crash Bandicoot es una franquicia de videojuegos de plataformas. La serie fue creada por Andy Gavin y Jason Rubin durante su permanencia en Naughty Dog para Sony Computer Entertainment.', videoId: "o2b0PmF1bwg", precio: 49.99 }, 

    {id: 3, nombre: 'UFC', genero: 'Pelea', imagen: ufcImg, descripcion: 'EA Sports UFC 5 es un videojuego de artes marciales mixtas desarrollado por EA Vancouver y publicado por EA Sports.', videoId: "AkeoP2HQUdE", precio: 69.99 },

    {id: 4, nombre: 'Gran Turismo', genero: 'Carreras', imagen: granTurismoImg, descripcion: 'Gran Turismo es una serie de videojuegos de simulación de carreras producida por Polyphony Digital.', videoId: "1tBUsXIkG1A", precio: 79.99 },

    {id: 5, nombre:'Uncharted', genero: 'Historia', imagen: unchartedImg, descripcion: 'Uncharted es una serie de videojuegos de acción-aventura. La serie sigue al cazafortunas Nathan Drake.', videoId: "FSbap_5yCjI", precio: 59.99 },

    {id: 6, nombre:'God of War', genero: 'Historia', imagen: godOfWarImg, descripcion: 'God of War es una serie de videojuegos de acción-aventura creada por David Jaffe en Santa Monica Studio de Sony.', videoId: "dIQGI36BxDE", precio: 69.99 },
    
    {id:7, nombre: 'FIFA 24', genero: 'Deportes', imagen: fifa24Img, descripcion: 'FIFA 24 es la última entrega de la popular serie de videojuegos de fútbol desarrollada por EA Sports.', videoId: "exampleVideoId7", precio: 59.99 },
   
    {id:8, nombre: 'The Last of Us Part II', genero: 'Aventura', imagen: thelastofus2Img, descripcion: 'The Last of Us Part II es un videojuego de acción y aventura desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment.', videoId: "exampleVideoId8", precio: 69.99 },
    
    {id:9, nombre: 'Resident Evil Village', genero: 'Horror', imagen: residentEvilVlillageImg, descripcion: 'Resident Evil Village es un videojuego de survival horror desarrollado y publicado por Capcom.', videoId: "exampleVideoId9", precio: 59.99 },
    
    {id:10, nombre: 'Assassin\'s Creed Valhalla', genero: 'Aventura', imagen: assesingCreedValhallaImg , descripcion: 'Assassin\'s Creed Valhalla es un videojuego de acción y aventura desarrollado por Ubisoft Montreal y publicado por Ubisoft.', videoId: "exampleVideoId10", precio: 69.99 },
    
    {id:11, nombre: 'Cyberpunk 2077', genero: 'Ciencia Ficción', imagen: Cyberpunk2077Img, descripcion: 'Cyberpunk 2077 es un videojuego de rol de acción desarrollado por CD Projekt Red.', videoId: "exampleVideoId11", precio: 59.99 },
];

export default juegos;

