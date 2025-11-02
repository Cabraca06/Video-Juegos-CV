// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Requerido para obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// 1. Sirve los archivos estáticos generados por Vite desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Para cualquier otra ruta, devuelve el index.html principal.
//    Esto es crucial para que el enrutamiento del lado del cliente (react-router-dom) funcione.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
