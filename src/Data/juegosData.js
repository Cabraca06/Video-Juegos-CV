// src/data/juegosData.js
import callOfDutyImg from '../img/CallGOLDWAR.png';
import crashImg from '../img/Crash.jpeg';
import ufcImg from '../img/UFC5.jpg';
import granTurismoImg from '../img/Gran turismo.avif'; 
import unchartedImg from '../img/Uncharted.jpg';
import godOfWarImg from '../img/God of war.jpg'; 

// se pueden añadir más juegos si es necesario
export const juegos = [
    {id: 1, nombre: 'Call of Duty', genero: 'Guerra', imagen: callOfDutyImg, descripcion: 'Call of Duty: Black Ops Cold War es un videojuego de disparos en primera persona de 2020 desarrollado por Treyarch y Raven Software.', inventario: 15, precio: 59.99},
   
    {id: 2, nombre: 'Crash Bandicoot', genero: 'Aventura', imagen: crashImg, descripcion: 'Crash Bandicoot es una franquicia de videojuegos de plataformas...', inventario: 10, precio: 49.99},
   
    {id: 3, nombre: 'UFC', genero: 'Pelea', imagen: ufcImg, descripcion: 'EA Sports UFC 5 es un videojuego de artes marciales mixtas...', inventario: 8, precio: 69.99},
   
    {id: 4, nombre: 'Gran Turismo', genero: 'Carreras', imagen: granTurismoImg, descripcion: 'Gran Turismo es una serie de videojuegos de simulación de carreras...', inventario: 12, precio: 79.99},
   
    {id: 5, nombre:'Uncharted', genero: 'Historia', imagen: unchartedImg, descripcion: 'Uncharted es una serie de videojuegos de acción-aventura...', inventario: 5, precio: 59.99},
   
    {id: 6, nombre:'God of War', genero: 'Historia', imagen: godOfWarImg, descripcion: 'God of War es una serie de videojuegos de acción-aventura...', inventario: 7, precio: 89.99},
    
];
