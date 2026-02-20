import React from 'react';
import  NavAdmin   from './navAdmin/navAdmini';

 const Admin = () => {
  return (
    <div>

      <h1>Panel de Administración</h1>
      <div className='container'>
          
          
          <h3>Usuarios</h3>
          <p>Administra los usuarios registrados en la plataforma. Puedes ver su información, gestionar roles (administrador, cliente) y tomar acciones como bloquear o eliminar cuentas si es necesario.</p>

          <h3>Reportes</h3>
          <p>Genera reportes sobre ventas, inventarios y comportamiento de los clientes. Analiza las tendencias de compra para tomar decisiones informadas sobre tu negocio.</p>

          <h3>Seguridad</h3>
          <p>Gestiona la seguridad de tu tienda, incluyendo la configuración de autenticación, permisos de usuario y protección contra amenazas. Asegúrate de que tu plataforma esté protegida contra ataques y vulnerabilidades.</p>
          
          <h3>Estadísticas</h3>
          <p>Visualiza estadísticas en tiempo real sobre el rendimiento de tu tienda, incluyendo ventas diarias, productos más vendidos y tráfico del sitio. Utiliza esta información para optimizar tu estrategia de negocio.</p>


      </div>

 
    </div>
  );
};

export default Admin;

