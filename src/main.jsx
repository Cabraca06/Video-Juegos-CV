import { HashRouter } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HashRouter basename="/Video-Juegos-CV/" > /*,  colocar dentro del HashRouter cuando este lista para desplegar en github*/
      <CartProvider>
      <App />
      </CartProvider>
     </HashRouter>
  </React.StrictMode>
);  
