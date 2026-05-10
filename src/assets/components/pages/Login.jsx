import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { useAuth } from '../../../context/AuthContext';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';



export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handLoginClient = () => {
    if (username === '' || password === '') {
      setError('Por favor, introduce usuario y contraseña.');
      return;
    }

    let targetPath = '';
    let userPayload = null;

    if (username === 'admin' && password === 'admin') {
      targetPath = '/Admin';
      userPayload = { name: 'Administrador', username: 'admin' };
    } else if (username === password) {
      targetPath = '/Home';
      userPayload = { name: username, username: username };
    } else {
      setError('Usuario o contraseña incorrectos.');
      return;
    }

    // Lógica para persistir al usuario en la lista de usuarios registrados
    const storedUsers = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    if (!storedUsers.some(u => u.username === username)) {
      storedUsers.push({ username, password });
      localStorage.setItem('usuariosRegistrados', JSON.stringify(storedUsers));
    }

    login(userPayload);
    navigate(targetPath);
  } 

  const handleGuestLogin = () => {
    login({ name: 'Invitado' }); // Marca al usuario como autenticado (invitado)
    navigate('/Home'); // Redirige a la página Home como invitado
  };


  return (
    <div className='section-login'>
      <div className='login-container'>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='username'>Usuario</label>
            <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Ingresa tu usuario' />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='La contraseña es tu mismo usuario' />
          </div>
          {error && <p className='error-message'>{error}</p>}
          <button onClick={handLoginClient} type='submit' className='login-btn'>Acceder</button>
        </form>
        <div className='guest-login'>
          <p>o</p>
          <button onClick={handleGuestLogin} className='guest-btn'>Entrar como invitado</button>
        </div>
      
        <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877F2', cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.facebook.com/' } />
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366', cursor: 'pointer' }} onClick={() => window.location.href = 'https://api.whatsapp.com'} />
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E4405F', cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.instagram.com/' } />
        </div>
      </div>
    </div>
    
    

  );
}