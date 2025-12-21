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