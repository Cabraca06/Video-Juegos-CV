import { useOrders } from '../../../../context/OrderContext';
import './style/Pedido.css';

const ESTADOS = ['Pendiente', 'Enviado', 'Completado', 'Cancelado'];

const Pedido = () => {
  const { orders, inventory, updateOrderStatus, deleteOrder } = useOrders();

  // Generar el mapa de productos dinámicamente desde el inventario del contexto
  const productosMap = inventory.reduce((acc, p) => {
    acc[p.id] = { nombre: p.nombre, imagen: p.imagen };
    return acc;
  }, {});

  const getEstadoClass = (estado) => {
    const map = {
      Pendiente:  'estado-pendiente',
      Enviado:    'estado-enviado',
      Completado: 'estado-completado',
      Cancelado:  'estado-cancelado',
    };
    return map[estado] ?? 'estado-pendiente';
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este pedido?')) {
      deleteOrder(id);
    }
  };

  return (
    <div className="pedido-container">
      <h2 className="pedido-title">Listado de Pedidos</h2>

      {orders.length === 0 ? (
        <p className="pedido-empty">No hay pedidos registrados.</p>
      ) : (
        <div className="pedido-table-wrapper">
          <table className="pedido-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Artículos</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>#{order.id}</td>

                  <td>
                    {new Date(order.fecha).toLocaleDateString('es-CR', {
                      year: 'numeric', month: 'short', day: 'numeric'
                    })}
                  </td>

                  <td>{order.cliente?.nombre ?? 'Invitado'}</td>
                  


                  {/* Artículos: imagen + nombre + cantidad */}
                  <td>
                    <div className="pedido-items-wrapper">
                      {order.items?.map((item, idx) => {
                        const producto = productosMap[item.id];
                        const nombre   = producto?.nombre ?? item.nombre ?? 'Artículo';
                        const imagen   = producto?.imagen ?? item.imagen ?? null;
                        return (
                          <div key={idx} className="pedido-item-row">                            {imagen ? (
                              <img
                                src={imagen}
                                alt={nombre}
                                className="pedido-item-img"
                                onError={e => { e.target.style.display = 'none'; }}
                              />
                            ) : (
                              <div className="pedido-img-placeholder">?</div>
                            )}
                            <div className="pedido-item-info">
                              <span className="pedido-item-name">{nombre}</span>
                              <span className="pedido-item-qty">x{item.cantidad}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </td>

                  <td>${Number(order.total).toFixed(2)}</td>

                  {/* Selector de estado */}
                  <td>
                    <select
                      value={order.estado}
                      onChange={e => updateOrderStatus(order.id, e.target.value)}
                      className={`pedido-estado-select ${getEstadoClass(order.estado)}`}
                    >
                      {ESTADOS.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                      ))}
                    </select>
                  </td>

                  {/* Botón eliminar */}
                  <td>
                    <button
                      className="pedido-delete-btn"
                      onClick={() => handleDelete(order.id)}
                      title="Eliminar pedido"
                    >
                      🗑 Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Pedido;