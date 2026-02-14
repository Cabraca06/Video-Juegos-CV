import React from 'react';
import { useCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Carrito.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return <div className="cart-empty">El carrito está vacío.</div>;
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.imagen} alt={item.nombre} />
          <div>
            <h3>{item.nombre}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.precio}</p>
            <p>Subtotal: ${item.precio * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        Total: ${calculateTotal()}
      </div>
      <Link to="/checkout" className="checkout-button">
        Realizar Pago
      </Link>
    </div>
  );
};

export default Cart;





