#Pagina de video juegos

- Tiene una estructura la cual por carpetas estaran los nombres de los arhivos correpondientes, con forme el cliente solicite añadir mass informacion se sigue creando.





# Compila el proyecto
npm run build

# Añade todos los cambios a Git
git add .

# Guarda los cambios (commit):
git commit -m "nada"

# Sube los cambios a la rama main
git push origin main 

# Ejecuta el script de despliegue en tu terminal:
npm run deploy


*   `homepage`: Le indica a `gh-pages` a qué URL se desplegará.
*   `predeploy`: Este script se ejecuta automáticamente antes de `deploy`. Se asegura de que tu proyecto se construya (`npm run build`) con los últimos cambios.
*   `deploy`: Este script toma la carpeta `dist` (que se genera con el build) y la publica en la rama `gh-pages` de tu repositorio.

