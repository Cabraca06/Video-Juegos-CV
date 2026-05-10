import React, { useState, useEffect } from 'react';
import './style/admin.css';
import { useOrders } from '../../../../context/OrderContext';

 const Admin = () => {
  const { orders } = useOrders();

const [usuarios, setUsuarios] = useState(() => {
  return JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
});
  const [editingIndex, setEditingIndex] = useState(null);
  const [newName, setNewName] = useState('');

 useEffect(() => {
  // Actualiza localStorage cada vez que `usuarios` cambia
  localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
}, [usuarios]);

  const eliminarUsuario = (username) => {
    if (username === 'admin') {
      alert("No puedes eliminar la cuenta de administrador principal.");
      return;
    }
    if (window.confirm(`¿Estás seguro de que deseas eliminar al usuario ${username}?`)) {
      setUsuarios(prev => prev.filter(u => u.username !== username));
    }
  };

  const iniciarEdicion = (index, currentName) => {
    setEditingIndex(index);
    setNewName(currentName);
  };

  const guardarEdicion = (index) => {
    if (newName.trim() === '') {
      alert("El nombre de usuario no puede estar vacío.");
      return;
    }

    const nuevosUsuarios = [...usuarios];
    // Evitar renombrar el admin principal si es necesario para la lógica de negocio
    if (nuevosUsuarios[index].username === 'admin' && newName !== 'admin') {
       if (!window.confirm("¿Estás seguro de cambiar el nombre del administrador principal? Esto podría afectar el acceso.")) return;
    }

    nuevosUsuarios[index].username = newName;
    setUsuarios(nuevosUsuarios);
    setEditingIndex(null);
    setNewName('');
  };

  const cancelarEdicion = () => {
    setEditingIndex(null);
    setNewName('');
  };

  // Cálculos para reportes y estadísticas
  const totalVentas = orders.reduce((acc, order) => acc + Number(order.total), 0).toFixed(2);

  const obtenerMasVendidos = () => {
    const conteo = {};
    orders.forEach(order => {
      order.items?.forEach(item => {
        const nombre = item.nombre || 'Artículo';
        conteo[nombre] = (conteo[nombre] || 0) + (item.cantidad || 0);
      });
    });
    // Convertir a array, ordenar de mayor a menor y tomar los 5 primeros
    return Object.entries(conteo)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  const topArticulos = obtenerMasVendidos();
  const maxQuantity = topArticulos.length > 0 ? Math.max(...topArticulos.map(i => i[1])) : 0;

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h1>Panel de Administración</h1>
        <p>Bienvenido al centro de control de Video Juegos C.V</p>
      </header>

      <div className='admin-grid'>
          <div className="admin-section">
            <h3>Usuarios Registrados</h3>
            <div className="stat-number">{usuarios.length}</div>
            <p>Usuarios activos en la plataforma</p>

            <div className="user-list">
              {usuarios.length > 0 ? (
                usuarios.map((u, index) => (
                  <div key={index} className="user-item">
                    {editingIndex === index ? (
                      <>
                        <input 
                          type="text" 
                          value={newName} 
                          onChange={(e) => setNewName(e.target.value)}
                          className="edit-input"
                          autoFocus
                        />
                        <div className="action-btns">
                          <button onClick={() => guardarEdicion(index)} className="save-btn" title="Guardar">✔</button>
                          <button onClick={cancelarEdicion} className="cancel-btn" title="Cancelar">✖</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="user-name">{u.username || 'Invitado'}</span>
                        <div className="action-btns">
                          <button 
                            className="edit-btn" 
                            onClick={() => iniciarEdicion(index, u.username)}
                            title="Editar usuario"
                          >
                            ✏️
                          </button>
                          {u.username !== 'admin' && (
                            <button 
                              className="delete-btn" 
                              onClick={() => eliminarUsuario(u.username)}
                              title="Eliminar usuario"
                            >
                              Eliminar
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <p>No hay usuarios registrados.</p>
              )}
            </div>
          </div>
         
          <div className="admin-section">
            <h3>Reportes de Ventas</h3>
            <p className="income"><strong>Ingresos Totales:</strong> <span>${totalVentas}</span></p>
            <p><strong>Pedidos Realizados:</strong> {orders.length}</p>
          </div>
          
          <div className="admin-section wide">
            <h3>Estadísticas: Artículos más solicitados</h3>
            {topArticulos.length > 0 ? (
              <div className="chart-container">
                {topArticulos.map(([nombre, cantidad]) => (
                  <div key={nombre} className="chart-bar-wrapper">
                    <div className="chart-info">
                      <span className="item-name">{nombre}</span>
                      <span className="item-count">{cantidad} vendidos</span>
                    </div>
                    <div className="chart-bar-bg">
                      <div 
                        className="chart-bar-fill" 
                        style={{ width: `${(cantidad / maxQuantity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay datos de ventas para mostrar estadísticas.</p>
            )}
          </div>
      </div>
    </div>
  );
};



 
export default Admin;
