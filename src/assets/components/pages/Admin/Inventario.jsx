import React, { useState } from 'react';
import { useOrders } from '../../../../context/OrderContext';
import './style/admin.css';

const Inventario = () => {
    const { inventory, addInventoryItem, updateInventoryItem, deleteInventoryItem } = useOrders();
    const [editingItem, setEditingItem] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('Todos');

    const categories = ['Todos', ...new Set(inventory.map(item => item.fabricante || item.genero).filter(Boolean))];

    const initialFormState = {
        nombre: '',
        descripcion: '',
        precio: '',
        inventario: '',
        imagen: '',
        fabricante: '', 
        genero: ''
    };

    const [form, setForm] = useState(initialFormState);

    const handleEdit = (item) => {
        setEditingItem(item.id);
        setForm(item);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Está seguro de eliminar este artículo del inventario?')) {
            deleteInventoryItem(id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemData = {
            ...form,
            id: editingItem || Date.now(),
            precio: parseFloat(form.precio) || 0,
            inventario: parseInt(form.inventario) || 0
        };

        if (editingItem) {
            updateInventoryItem(itemData);
        } else {
            addInventoryItem(itemData);
        }
        
        setEditingItem(null);
        setForm(initialFormState);
        setShowForm(false);

        // Opcional: Resetear búsqueda y filtros para confirmar visualmente el cambio
        setSearchTerm('');
        setCategoryFilter('Todos');
        alert('Artículo actualizado correctamente');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, imagen: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const filteredInventory = inventory.filter(item => {
        const matchesSearch = item.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        const category = item.fabricante || item.genero;
        const matchesCategory = categoryFilter === 'Todos' || category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="admin-panel">
            <header className="admin-header">
                <h1>Gestión de Inventario</h1>
                <button className="download-btn excel-btn" onClick={() => { setShowForm(!showForm); setEditingItem(null); setForm(initialFormState); }}>
                    {showForm ? 'Cancelar' : 'Agregar Nuevo Artículo'}
                </button>
            </header>

            {showForm && (
                <div className="admin-section" style={{ marginBottom: '20px' }}>
                    <h3>{editingItem ? 'Editar Artículo' : 'Nuevo Artículo'}</h3>
                    <form onSubmit={handleSubmit} className="inventory-form">
                        <div className="input-grid">
                            <input type="text" placeholder="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} required className="edit-input" />
                            <input type="number" step="0.01" placeholder="Precio" value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} required className="edit-input" />
                            <input type="number" placeholder="Stock" value={form.inventario} onChange={e => setForm({...form, inventario: e.target.value})} required className="edit-input" />
                            <input type="text" placeholder="Fabricante (Si es Consola)" value={form.fabricante} onChange={e => setForm({...form, fabricante: e.target.value})} className="edit-input" />
                            <input type="text" placeholder="Género (Si es Juego)" value={form.genero} onChange={e => setForm({...form, genero: e.target.value})} className="edit-input" />
                        </div>
                        <textarea placeholder="Descripción" value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} required className="edit-input" style={{ minHeight: '80px' }} />
                        
                        <div style={{ marginTop: '10px' }}>
                            <label>Imagen del artículo:</label>
                            <input type="file" accept="image/*" onChange={handleFileChange} />
                            {form.imagen && <img src={form.imagen} alt="Preview" style={{ width: '80px', display: 'block', marginTop: '10px', borderRadius: '8px' }} />}
                        </div>

                        <button type="submit" className="save-btn" style={{ marginTop: '15px', width: '100%', padding: '10px' }}>
                            {editingItem ? 'Actualizar Artículo' : 'Registrar Artículo'}
                        </button>
                    </form>
                </div>
            )}

            <div className="admin-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="admin-section wide">
                    <h3>Artículos Disponibles</h3>

                    <div className="inventory-filters">
                        <input 
                            type="text" 
                            placeholder="Buscar por nombre..." 
                            className="edit-input" 
                            style={{ maxWidth: '300px' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <select 
                            className="edit-input" 
                            style={{ maxWidth: '200px' }}
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div className="pedido-table-wrapper" style={{ overflowX: 'auto' }}>
                        <table className="pedido-table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredInventory.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt="" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} /></td>
                                        <td>{item.nombre}</td>
                                        <td>${item.precio}</td>
                                        <td>{item.inventario}</td>
                                        <td className="action-btns">
                                            <button className="edit-btn" onClick={() => handleEdit(item)}>✏️</button>
                                            <button className="delete-btn" onClick={() => handleDelete(item.id)}>🗑</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventario;