import React, { useState } from 'react';
import "../styles/consola.css";
import { Link } from 'react-router-dom';
import { consolas } from '../../../Data/consolasData';
import { useCart } from '../../../context/CartContext';

export const Consolas = () => {
  const { addToCart } = useCart(); // 2. Obtén la función para agregar al carrito
     // Estado para la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    // Obtenemos una lista de géneros únicos y añadimos "Todos" al principio
    const categorias = ['Todos', ...new Set(consolas.map(consola => consola.fabricante))];

    // Filtramos los juegos basados en la categoría seleccionada
    const consolasPorCategoria = categoriaSeleccionada === 'Todos'
      ? consolas
      : consolas.filter(consola => consola.fabricante === categoriaSeleccionada);

      // filtramos por el término de búsqueda
    const consolasFiltradas = consolasPorCategoria.filter(consola =>
      consola.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = consolasFiltradas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(consolasFiltradas.length / itemsPerPage);

  return (
    <div className='container-principal-consolas'>
    <div className="container-filter-consolas">
        <h3>Categorias</h3>
        <br />
        <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Resetear página al buscar
                }}
                style={{ width: '85%', padding: '8px', margin: '10px auto', display: 'block', borderRadius: '4px', border: '1px solid #ccc' }}
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
    <div className='container-consolas'>
    {currentItems.length > 0 ? (
          currentItems.map(consola => (
          <div key={consola.id} className="consola-card">
              <img src={consola.imagen} alt={consola.nombre} />
              <h3>{consola.nombre}</h3>
              <div className='consolas-card-info'>
              <p>Fabricante: {consola.fabricante}</p>
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
        ))
      ) : (
        <p style={{ color: 'black', textAlign: 'center', width: '100%', marginTop: '2rem' }}>
            No se encontraron consolas con los filtros actuales.
        </p>
      )}  
    </div> 
    {totalPages > 1 && (
        <div className="pagination-controls" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px', alignItems: 'center' }}>
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="botonVer" style={{cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1}}>Anterior</button>
          <span> Página {currentPage} de {totalPages}</span>
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="botonVer" style={{cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.5 : 1}}>Siguiente</button>
        </div>
    )}
    </div>
    </div>
  );
}

