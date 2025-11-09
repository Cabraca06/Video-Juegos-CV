import React, { useState } from 'react';
import "../styles/consola.css";
import { Link } from 'react-router-dom';
import { consolas } from '../../../Data/consolasData';
import { useCart } from '../../components/pages/Compras/CartContext';

export const Consolas = () => {
  const { addToCart } = useCart(); // 2. Obtén la función para agregar al carrito
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
              <div className='consolas-card-info'>
              <p>Genero: {consola.fabricante}</p>
              <p>Inventario: {consola.inventario}</p>
              </div> 
              <p>Precio: ${consola.precio}</p>
            <div className='consolas-card-botones'>
            <Link to={`/Consolas/${consola.id}`} className="botonVer">
              Ver Consola
            </Link>
            <button onClick={() => addToCart(consola)} className="botonCarrito">
                Agregar al carrito
                  </button>
            </div>
          </div>
        ))}  
      </div> 
    </div>
  );
}

