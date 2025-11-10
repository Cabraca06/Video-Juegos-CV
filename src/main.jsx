import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import { CartProvider } from './assets/components/pages/Compras/CartContext';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HashRouter>
      <CartProvider>
      <App />
      </CartProvider>
     </HashRouter>
  </React.StrictMode>
);  
