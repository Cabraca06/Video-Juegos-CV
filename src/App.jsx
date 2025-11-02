import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './assets/components/Navbar';
import './App.css';
import './assets/components/Navbar.css';
import Login from './assets/components/pages/Login';
import {Home} from './assets/components/pages/Home';
import {About} from './assets/components/pages/About';
import {Juegos} from './assets/components/pages/Juegos';
import {Contact} from './assets/components/pages/Contact';
import {JuegoDetalle} from './assets/components/pages/Juegos/JuegoDetalle';




function App() {


  return (
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Juegos" element={<Juegos />} />
        <Route path="/juegos/:id" element={<JuegoDetalle />} /> 
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </div>
  )
}
export default App;
