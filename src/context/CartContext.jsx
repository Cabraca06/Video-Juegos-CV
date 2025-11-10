import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
export const CartContext = createContext();

// 2. Crear un Hook personalizado para usar el contexto más fácilmente
export const useCart = () => useContext(CartContext);

// 3. Crear el Proveedor del Contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un item al carrito (o incrementar su cantidad)
    const addToCart = (itemToAdd) => {
        setCartItems(prevItems => {
            const itemInCart = prevItems.find(item => item.id === itemToAdd.id);
            if (itemInCart) {
                return prevItems.map(item =>
                    item.id === itemToAdd.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Si es la primera vez, lo agregamos con cantidad 1
            return [...prevItems, { ...itemToAdd, quantity: 1 }];
        });
    };

    // Función para remover un item (o decrementar su cantidad)
    const removeFromCart = (itemId) => {
        setCartItems(prevItems => {
            const itemInCart = prevItems.find(item => item.id === itemId);
            if (itemInCart.quantity === 1) {
                return prevItems.filter(item => item.id !== itemId);
            } else {
                return prevItems.map(item =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    };

    // Función para limpiar todo el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    // Función para obtener el número total de items
    const getCartItemCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const value = { cartItems, addToCart, removeFromCart, clearCart, getCartItemCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

/*import React from 'react';
import { useCart } from '../../../../context/CartContext'; // Ajusta la ruta si es necesario
import '../../styles/Carrito.css'; 
import { Link } from 'react-router-dom';

export const Carrito = () => {
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
 */