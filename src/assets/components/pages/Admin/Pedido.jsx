import React from 'react';
import { useCart } from '../../../../context/CartContext';
import '../Admin/style/Pedido.css';

const Pedido = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <div className="pedido-empty">No hay artículos en el pedido.</div>;
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="pedido">
      <h2>Resumen del Pedido</h2>
      {cartItems.map(item => (
        <div key={item.id} className="pedido-item">
          <img src={item.imagen} alt={item.nombre} />
          <div>
            <h3>{item.nombre}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.precio}</p>
            <p>Subtotal: ${item.precio * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="pedido-total">
        Total: ${calculateTotal()}
      </div>
      <div className="pedido-info">
        <h3>Información de Contacto</h3>
        <p>
          <strong>Nombre:</strong> [Nombre del Cliente]
        </p>
        <p>
          <strong>Email:</strong> [Email del Cliente]
        </p>
        <p>
          <strong>Dirección de Envío:</strong> [Dirección del Cliente]
        </p>
      </div>
      <div className="pedido-estado">
        <h3>Estado del Pedido</h3>
        <p>
          <strong>Estado:</strong> Pendiente
        </p>
      </div>
    </div>
  );
};

export default Pedido;
