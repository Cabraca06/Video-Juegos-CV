import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App.jsx';
import Login from "./assets/components/pages/Login.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Login />
    </BrowserRouter>
  </React.StrictMode>
);  
