import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './assets/components/Navbar';
import './App.css';
import './assets/components/Navbar.css';
import {Home} from './assets/components/pages/Home';
import {About} from './assets/components/pages/About';
<<<<<<< HEAD
import {Juegos} from './assets/components/pages/Juegos';
=======
>>>>>>> 2296af00a5a44782c786d13e82ec2fb8c9969001
import {Contact} from './assets/components/pages/Contact';



function App() {


  return (
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
<<<<<<< HEAD
        <Route path="/Juegos" element={<Juegos />} />
=======
>>>>>>> 2296af00a5a44782c786d13e82ec2fb8c9969001
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </div>
  )
}
export default App;
