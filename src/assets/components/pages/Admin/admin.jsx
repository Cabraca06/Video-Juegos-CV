import React, { useState, useEffect } from 'react';
import './style/admin.css';


 const Admin = () => {


const [usuarios, setUsuarios] = useState(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  const storedUsers = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
  return storedUsers.length > 0
    ? storedUsers
    : (user ? [user] : [{ username: user, password: '' }]);
});

 useEffect(() => {
  // Actualiza localStorage cada vez que `usuarios` cambia
  localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
}, [usuarios]);
  return (


    <> 

      <h1>Panel de Administración</h1>
      <div className='container'>

          <h3>Usuarios Registrados</h3>
         
          <h3>Reportes</h3>
          <p>Genera reportes sobre ventas, inventarios y comportamiento de los clientes. Analiza las tendencias de compra para tomar decisiones informadas sobre tu negocio.</p>

          <h3>Seguridad</h3>
          <p>Gestiona la seguridad de tu tienda, incluyendo la configuración de autenticación, permisos de usuario y protección contra amenazas. Asegúrate de que tu plataforma esté protegida contra ataques y vulnerabilidades.</p>
          
          <h3>Estadísticas</h3>
          <p>Visualiza estadísticas en tiempo real sobre el rendimiento de tu tienda, incluyendo ventas diarias, productos más vendidos y tráfico del sitio. Utiliza esta información para optimizar tu estrategia de negocio.</p>
      </div>

      </>
  );
};


export default Admin;

