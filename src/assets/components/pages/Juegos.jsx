

import React, { useState } from 'react';
import "../styles/Juegos.css";
import { Link } from "react-router-dom";
import { juegos } from '../../../Data/juegosData';
export const Juegos = () => {
     // Estado para la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    // Obtenemos una lista de géneros únicos y añadimos "Todos" al principio
    const categorias = ['Todos', ...new Set(juegos.map(juego => juego.genero))];
    // Filtramos los juegos basados en la categoría seleccionada
    const juegosFiltrados = categoriaSeleccionada === 'Todos'
    ? juegos
    : juegos.filter(juego => juego.genero === categoriaSeleccionada);

    


  return (
    <div className='container-principal'>
        <div className="container-filter-juegos">
            <h3>Categorias</h3>
            <br />
            <ul>
                {categorias.map(categoria => (
                    <li
                        key={categoria}
                        onClick={() => setCategoriaSeleccionada(categoria)}
                        className={categoriaSeleccionada === categoria ? 'active' : ''}
                    >
                        {categoria}
                    </li>
                ))}
            </ul>
            
        </div> 
    
    <div className='container-juegos'>
    {juegosFiltrados.map(juego => (
            <div key={juego.id} className="juego-card">
                <img src={juego.imagen} alt={juego.nombre} />
                <h3>{juego.nombre}</h3>
                <div className="juego-card-info">
                  <p>Genero: {juego.genero}</p>
                  <p>Inventario: {juego.inventario}</p>
                </div>
                <Link to={`/juegos/${juego.id}`} className="botonVer">
                Ir al juego
              </Link>
            </div>
        ))}  
        </div> 
     </div>
  )
}
