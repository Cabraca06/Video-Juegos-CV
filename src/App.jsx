import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './assets/components/Navbar';
import './App.css';
import './assets/components/Navbar.css';
import {Home} from './assets/components/pages/Home';
import {About} from './assets/components/pages/About';
import {Contact} from './assets/components/pages/Contact';



function App() {


  return (
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </div>
  )
}
export default App;
