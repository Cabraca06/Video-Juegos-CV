import React, { useState, useRef } from "react";
import "../styles/checkout.css";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("tarjetaCredito");
  const { cartItems, removeFromCart } = useCart();
  const nombreRef = useRef(null);
  const emailRef = useRef(null);
  const direccionRef = useRef(null);
  const ciudadRef = useRef(null);
  const codigoPostalRef = useRef(null);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.precio * item.quantity, 0)
      .toFixed(2);
  };
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const navigate = useNavigate();
  
  const clearCart = () => {
    cartItems.length = 0;
  };


  //funcion de pagar que valida los campos de informacion de envio y pago, limpia el carrito y redirige a la pagina de confirmacion de pago
  const pagar = () => { 
    if (paymentMethod === "tarjetaCredito") {
      const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;
        const nombre = nombreRef.current.value;
        const email = emailRef.current.value;
        const direccion = direccionRef.current.value;
        if (!nombre || !email || !direccion || !cardNumber || !expiryDate || !cvv) {  
            alert("Por favor, complete todos los campos de información de envío y pago.");
            return;
        }
        setPaymentMethod(true);
        clearCart();
         navigate("/confirmPago"); 
      } else if (paymentMethod === "paypal") {
        window.location.href = "https://www.paypal.com";
      }
      if (paymentMethod === "transferencia") {
        const nombre = nombreRef.current.value;
        const email = emailRef.current.value;
        const direccion = direccionRef.current.value;
        if (!nombre || !email || !direccion) {
            alert("Por favor, complete todos los campos de información de envío.");
            return;
        }
        setPaymentMethod(true);
    
    }

  };


  // Función para volver al carrito sin limpiar los productos
  const volverCarrito = () => {
    if (window.confirm("¿Estás seguro de que deseas volver al carrito?")) {
      navigate("/cart");
    }
  };

  // Función para eliminar el carrito y redirigir al usuario al carrito vacío
  const eliminarCarrito = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar el carrito?")) {
      cartItems.length = 0;
      navigate("/cart");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imagen} alt={item.nombre} />
          <div>
            <h3>{item.nombre}</h3>
            <p>Subtotal: ${item.precio * item.quantity}</p>
          </div>
        </div>
      ))}

      <p>Información de envío:</p>
      <div>
        <form className="form-group" reload>
          <label htmlFor="nombre" className="nombre">
            Nombre:
          </label>
          <input type="text" id="nombre" name="nombre" required ref={nombreRef} />
          <label htmlFor="email" className="mail">
            Email:
          </label>
          <input type="text" id="email" name="email" required ref={emailRef}/>
          <label htmlFor="direccion" className="direccion">
            Dirección:
          </label>
          <input type="text" id="direccion" name="direccion" required ref={direccionRef} />
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" id="ciudad" name="ciudad" required  ref={ciudadRef}/>
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input type="text" id="codigoPostal" name="codigoPostal" required ref={codigoPostalRef} />
        </form>
      </div>
      <p className="method-payment">Metodos de pago:</p>
      <div>
        <select
          className="select-payment"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="tarjetaCredito">Tarjeta de Crédito</option>
          <option value="paypal">PayPal</option>
          <option value="transferencia">Transferencia Bancaria</option>
        </select>
      </div>
      <p className="pago-info">Información de pago:</p>
      <div></div>
      {paymentMethod === "tarjetaCredito" && (
        <div className="payment-form">
          <h4>Tarjeta de Crédito</h4>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input type="text" id="cardNumber" name="cardNumber" />

          <label htmlFor="expiryDate">Fecha de Expiración:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/AA"
          />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" />
        </div>
      )}

      {paymentMethod === "paypal" && (
        <div className="payment-info">
          <h4>PayPal</h4>
          <p>Serás redirigido a PayPal para completar tu pago.</p>
          {/*añadir un Botón de PayPal */}
        </div>
      )}

      {paymentMethod === "transferencia" && (
        <div className="payment-info">
          <h4>Transferencia Bancaria</h4>
          <p>Por favor, realiza la transferencia a la siguiente cuenta:</p>
          <p>Nombre del Titular:[Nombre de empresa]</p>
          <p>Número de Cuenta:[Numero de cuenta]</p>
          <p>Banco:[Nombre del Banco]</p>
        </div>
      )}
      <div className="cart-total">Total: ${calculateTotal()}</div>
      <button
        className="Buttons"
        type="submit"
        onClick={() => pagar(true)}
      >
        Confirmar Pago
      </button>
      <button className="Buttons" type="submit" onClick={volverCarrito}>      
        Volver al carrito
      </button>
      <button className="Buttons" type="submit" onClick={eliminarCarrito}>
        {" "}
        Eliminar carrito{" "}
      </button>
      {paymentMethod === true && <p>Pago confirmado. Gracias por tu compra!</p>}
      {paymentMethod === true &&
        cartItems.map((item) => removeFromCart(item.id))}
    </div>
  );
};

export default Checkout;
