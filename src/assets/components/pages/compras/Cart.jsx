import React from 'react';
import { useCart } from '../../../../context/CartContext'; // Ajusta la ruta si es necesario
import '../../styles/Carrito.css'; 
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.precio, 0).toFixed(2);
    };

    if (cartItems.length === 0) {
        return (
            <div className="carrito-container carrito-vacio">
                <h2>Tu carrito está vacío</h2>
                <p>Parece que aún no has agregado juegos a tu carrito.</p>
                <Link to="/juegos" className="botonVer">
                    Explorar Juegos
                </Link>
            </div>
        );
    }

    return (
        <div className="carrito-container">
            <h2>Tu Carrito de Compras</h2>
            <div className="carrito-items">
                {cartItems.map(item => (
                    <div key={item.id} className="carrito-item">
                        <img src={item.imagen} alt={item.nombre} />
                        <div className="item-info">
                            <h3>{item.nombre}</h3>
                            <p>Precio: ${item.precio.toFixed(2)}</p>
                        </div>
                        <div className="item-actions">
                            <button onClick={() => removeFromCart(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => addToCart(item)}>+</button>
                        </div>
                        <div className="item-total">
                            <p>Subtotal: ${(item.quantity * item.precio).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carrito-summary">
                <h3>Total: ${getTotalPrice()}</h3>
                <button className="boton-finalizar">Finalizar Compra</button>
                <button onClick={clearCart} className="boton-vaciar">Vaciar Carrito</button>
            </div>
        </div>
    );
};
