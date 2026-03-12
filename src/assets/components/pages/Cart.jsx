import React from 'react';
import { useCart } from '../../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Carrito.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const { clearCart } = useCart();


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return <div className="cart-empty">El carrito está vacío.</div>;
  }
  const realizarPedido = () => {
    //Rellenar informacion de contacto y validar datos antes de realizar el pedido
  if (document.getElementById('nombre').value === '' || document.getElementById('email').value === '' || document.getElementById('direccion').value === '' || document.getElementById('MetodoPago').value === '') {
      alert('Por favor, complete toda la información de contacto');
      //no redireccionar nada sin antes rellenar los campos de contacto
      useNavigate('/cart')
      return;
    }
    alert('Pedido realizado con éxito');
    clearCart();
  }

  //Funcion de formulario de pedido


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
      <div className="form-pedido">
        <h3>Información de Contacto para solicitud de pedido</h3>
        <p>
         <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Ingrese su email" />
        </p>
        <p>
          <label htmlFor="telefono">Telefono:</label>
          <input type="text" id="direccion" name="direccion" placeholder="Ingrese su dirección de envío" />
        </p>
        <p> 
          <label htmlFor="MetodoPago">Metodos de Pago:</label>
          <select name="MetodoPago" id="MetodoPago">
            <option disabled selected value="">Seleccionar un Metodo</option>
          <option value="tarjetaCredito">Tarjeta de Crédito</option>
          <option value="paypal">PayPal</option>
          <option value="transferencia">Transferencia Bancaria</option>
          <option value="efectivo">Efectivo</option>
            </select>
        </p>

        
      </div>
      <Link to="/checkout" className="checkout-button">
        Realizar Pago
      </Link>
      <Link to="/juegos" className="checkout-button">
        Continuar Comprando
      </Link>
      <button className="checkout-button" onClick={realizarPedido}>Realizar Pedido</button>
    </div>
    
  );
  
};

export default Cart;





