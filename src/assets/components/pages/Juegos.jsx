
import React from 'react'
import "../styles/Juegos.css";
import { useState } from 'react';
import callOfDutyImg from '../../img/Call of duty GOLD WAR.png';
import crashImg from '../../img/Crash.jpeg';
import ufcImg from '../../img/UFC 5.jpg';
import granTurismoImg from '../../img/Gran Turismo.jpg'; 
import unchartedImg from '../../img/Uncharted.jpg';
import godOfWarImg from '../../img/God of war.jpg';


export const Juegos = () => {
    const [filter, setJuegos] = useState([]);
    const juegos = [
        {id: 1, nombre: 'Call of Duty', genero: 'Guerra', imagen: callOfDutyImg},
        {id: 2, nombre: 'Crash Bandicoot', genero: 'Aventura', imagen: crashImg},
        {id: 3, nombre: 'UFC', genero: 'Peleas', imagen: ufcImg},
        {id: 4, nombre: 'Gran Turismo', genero: 'Carreras', imagen: granTurismoImg},
        {id: 5, nombre:'Uncharted', genero: 'Historia', imagen: unchartedImg},
        {id: 6, nombre:'God of War', genero: 'Historia', imagen: godOfWarImg},
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
