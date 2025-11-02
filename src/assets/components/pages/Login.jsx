import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';



export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Por favor, ingresa tu usuario y contraseña.');
      return;
    }
    // La contraseña debe ser igual al nombre de usuario
    if (username === password) {
      console.log('Login exitoso!');
      navigate('/Home'); // Redirige a la página Home
    } else {
      setError('El usuario o la contraseña son incorrectos.');
    }
  };

  const handleGuestLogin = () => {
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
          <button type='submit' className='login-btn'>Acceder</button>
        </form>
        <div className='guest-login'>
          <p>o</p>
          <button onClick={handleGuestLogin} className='guest-btn'>Entrar como invitado</button>
        </div>
      </div>
    </div>
  );
}

