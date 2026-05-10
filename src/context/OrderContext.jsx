import React, { createContext, useState, useContext, useEffect } from 'react';
import juegosData from '../Data/juegosData';
import { consolas as consolasData } from '../Data/consolasData';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        // Cargar pedidos guardados en localStorage al iniciar
        const savedOrders = localStorage.getItem('orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    // Guardar en localStorage cada vez que cambien los pedidos
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    // Estado para el inventario global (combinando juegos y consolas)
    const [inventory, setInventory] = useState(() => {
        const savedInventory = localStorage.getItem('inventory');
        return savedInventory ? JSON.parse(savedInventory) : [...juegosData, ...consolasData];
    });

    // Guardar inventario en localStorage
    useEffect(() => {
        localStorage.setItem('inventory', JSON.stringify(inventory));
    }, [inventory]);

    const addOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
    };

    const processOrder = (cliente, items, total, metodoPago, estado = 'Pendiente') => {
        const itemsMapeados = items.map(item => ({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            imagen: item.imagen,
            cantidad: item.quantity || item.cantidad
        }));

        const nuevoPedido = {
            id: Date.now(),
            fecha: new Date().toISOString(),
            cliente,
            items: itemsMapeados,
            total: Number(total).toFixed(2),
            metodoPago,
            estado
        };

        // Disminuir inventario automáticamente
        setInventory(prevInv => 
            prevInv.map(prod => {
                const itemEnPedido = itemsMapeados.find(it => it.id === prod.id);
                if (itemEnPedido) {
                    // Restamos la cantidad asegurándonos de no bajar de 0
                    return { ...prod, inventario: Math.max(0, prod.inventario - itemEnPedido.cantidad) };
                }
                return prod;
            })
        );

        addOrder(nuevoPedido);
        return nuevoPedido;
    };

    const updateOrderStatus = (id, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order => (order.id === id ? { ...order, estado: newStatus } : order))
        );
    };
    const deleteOrder = (id) => {
        setOrders(prev => prev.filter(order => order.id !== id));
    };

    const addInventoryItem = (newItem) => {
        setInventory(prev => [...prev, newItem]);
    };

    const updateInventoryItem = (updatedItem) => {
        setInventory(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
    };

    const deleteInventoryItem = (id) => {
        setInventory(prev => prev.filter(item => item.id !== id));
    };

    return (
        <OrderContext.Provider value={{ 
            orders, addOrder, processOrder, updateOrderStatus, deleteOrder, 
            inventory, addInventoryItem, updateInventoryItem, deleteInventoryItem 
        }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrders = () => useContext(OrderContext);