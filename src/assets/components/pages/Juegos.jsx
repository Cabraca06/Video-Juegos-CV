<<<<<<< HEAD
import React from 'react'
import "../styles/Juegos.css";
import { useState } from 'react';


export const Juegos = () => {
    const [filter, setJuegos] = useState([]);
        const juegos = [
        {id: 1, nombre: 'Call of Duty', genero: 'Guerra', imagen: '/img/Call of duty GOLD WAR.png'},
        {id: 2, nombre: 'Crash Bandicoot', genero: 'Aventura', imagen: '/img/Crash.jpeg'},
        {id: 3, nombre: 'UFC', genero: 'Peleas', imagen: '/src/img/Call of duty GOLD WAR.png'},
        {id: 4, nombre: 'Gran Turismo', genero: 'Carreras', imagen: '/src/img/Call of duty GOLD WAR.png'},
        {id: 5, nombre:'Uncharted', genero: 'Historia', imagen: '/src/img/Uncharted.jpg'},
        {id: 6, nombre:'God of War', genero: 'Historia', imagen: '/src/img/God of war.jpg'},
    ];
  return (
    <div className='container-principal'>
        <div className="container-filter-juegos">
            <ul>
                <li>Guerra</li>
                <li>Aventura</li>
                <li>Peleas</li>
                <li>Carreras</li>
            </ul>        
        </div> 
    
    <div className='container-juegos'>
    {juegos.map(juego => (
            <div key={juego.id} className="juego-card">
                <img src={juego.imagen} alt={juego.nombre} />
                <h3>{juego.nombre}</h3>
                <p>{juego.genero}</p>
            </div>
        ))}  
        </div> 
     </div>
  )
}

export default Juegos


=======
 function Juegos() {
    return (
        <div>
            <h1>Juegos Page</h1>
            <p>Welcome to the Juegos page!</p>
        </div>
    );
}
    export default Juegos;
>>>>>>> 2296af00a5a44782c786d13e82ec2fb8c9969001
