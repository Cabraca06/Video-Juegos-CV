import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Juegos.css";
// Asegúrate de que la ruta de importación de tus datos sea correcta
import juegosData  from '../../../Data/juegosData'; 
import { useCart } from '../../../context/CartContext';

export const Juegos = () => {
  const { addToCart } = useCart();
  
  // Estados declarados
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;



  // 2. Definición de categorías únicas
  const categorias = ['Todos', ...new Set(juegosData.map(juego => juego.genero))];

  // Filtrado
  const juegosPorCategoria = categoriaSeleccionada === 'Todos'
      ? juegosData
      : juegosData.filter(juego => juego.genero === categoriaSeleccionada);

  const juegosFiltrados = juegosPorCategoria.filter(juego =>
      juego.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  //logica paginación de juegos filtrados
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = juegosFiltrados.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(juegosFiltrados.length / itemsPerPage);

  return (
    <div className='container-principal'>
      <div className="container-filter-juegos">
        <h3>Categorías</h3>
        <br />
        {/* Input de búsqueda declarado y funcional */}
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); 
          }}
          style={{ 
            width: '85%', padding: '8px', margin: '10px auto', 
            display: 'block', borderRadius: '4px', border: '1px solid #ccc' 
          }}
        />
        <ul>
          {categorias.map(categoria => (
            <li
              key={categoria}
              onClick={() => {
                setCategoriaSeleccionada(categoria);
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className={categoriaSeleccionada === categoria ? 'active' : ''}
            >
              {categoria}
            </li>
          ))}
        </ul>
      </div> 

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className='container-juegos'>
          {currentItems.length > 0 ? (
            currentItems.map(juego => (
              <div key={juego.id} className="juego-card">
                <img src={juego.imagen} alt={juego.nombre} />
                <h3>{juego.nombre}</h3>
                <div className="juego-card-info">
                  <p>Género: {juego.genero}</p>
                  <p>Inventario: {juego.inventario}</p>
                </div>
                <p>Precio: ${juego.precio}</p>
                <div className='juego-card-botones'>
                  <Link to={`/juegos/${juego.id}`} className="botonVer">
                    Ir al juego
                  </Link>
                  <button onClick={() => addToCart(juego)} className="botonCarrito">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: 'black', textAlign: 'center', width: '100%', marginTop: '2rem' }}>
              No se encontraron juegos con los filtros actuales.
            </p>
          )}
        </div>

        {/* Controles de Paginación */}
        {totalPages > 1 && (
          <div className="pagination-controls" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px', alignItems: 'center' }}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
              disabled={currentPage === 1} 
              className="botonVer" 
              style={{cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1}}
            >
              Anterior
            </button>
            <span> Página {currentPage} de {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
              disabled={currentPage === totalPages} 
              className="botonVer" 
              style={{cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.5 : 1}}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div> 
  );
};