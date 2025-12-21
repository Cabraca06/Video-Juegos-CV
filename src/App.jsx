import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

// Context Providers
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Asumo que tienes un componente Navbar y componentes para los detalles
// Si los nombres o rutas son diferentes, ajústalos aquí.
import { Navbar } from './assets/components/Navbar'; 

// Page Components
import Login from './assets/components/pages/Login';
import { Home } from './assets/components/pages/Home';
import { About } from './assets/components/pages/About';
import { Juegos } from './assets/components/pages/Juegos';
import { Consolas } from './assets/components/pages/consolas';
import { Contact } from './assets/components/pages/Contact';
import { JuegoDetalle } from './assets/components/pages/Juegos/JuegoDetalle'; import { ConsolaDetalle } from './assets/components/pages/consolas/ConsolaDetalle';


// Componente para proteger rutas y añadir el layout principal (Navbar)
const ProtectedLayout = () => {
    const { isAuthenticated } = useAuth();

    // Si el usuario no está autenticado, lo redirige a la página de login
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Si está autenticado, muestra la barra de navegación y el contenido de la ruta hija
    return (
        <>
            <Navbar />
            <Outlet /> 
        </>
    );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
            <Routes>
                {/* Ruta pública para el Login */}
                <Route path="/login" element={<Login />} />
                
                {/* Rutas protegidas que usarán el ProtectedLayout */}
                <Route element={<ProtectedLayout />}>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/juegos" element={<Juegos />} />
                    { <Route path="/juegos/:id" element={<JuegoDetalle />} /> }
                    <Route path="/consolas" element={<Consolas />} />
                    {<Route path="/consolas/:id" element={<ConsolaDetalle />} /> }
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* Redirige cualquier ruta no encontrada a la página de inicio si está logueado, o al login si no */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
