import React, { useState } from 'react';
import "../styles/consola.css";
import { Link } from 'react-router-dom';
import { consolas } from '../../../Data/consolasData';


export const Consolas = () => {
    // Estado para la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

    // Obtenemos una lista de géneros únicos y añadimos "Todos" al principio
    const categorias = ['Todos', ...new Set(consolas.map(consola => consola.fabricante))];

    // Filtramos los juegos basados en la categoría seleccionada
    const consolasFiltradas = categoriaSeleccionada === 'Todos'
      ? consolas
      : consolas.filter(consola => consola.fabricante === categoriaSeleccionada);

  return (
    <div className='container-principal-consolas'>
    <div className="container-filter-consolas">
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

    <div className='container-consolas'>
        {consolasFiltradas.map(consola => (
          <div key={consola.id} className="consola-card">
              <img src={consola.imagen} alt={consola.nombre} />
              <h3>{consola.nombre}</h3>
              <p>{consola.fabricante}</p>
              <Link to={`/Consolas/${consola.id}`} className="botonVer">
              Ir a la Consola
            </Link>
          </div>
        ))}  
      </div> 
    </div>
  );
}

