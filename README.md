# INICIO DEL PROYECTO

# DESCRIPCION: 
Es una tienda de video juegos, lo cual se podrá ver la descripción y comprar cada uno de los juegos y consolas, ellos cuentam conninventario el cual se disminuirá por cada compra. 
 .El navbar de login para clientes es: 
      -Home
      -About
      -Juegos
      -Consolas
      -Contacto
#User 
  -Login:
    -Cliente: El cliente se puede loguear utilizando el mismo usuario de contraseña.
    -Invitado: Los clientes pueden ingresar como invitados sin contraseña
    -Administrador: En adimnistrador solo las personas autorizadas tienen acceso, lo cual pueden hacer vaierdad de acciones como revisar y alistar pedidos y verificacion de pagos realizados o pendiente.


# Pagina de HOME
- Contiene una portada
- Seccion pequeña de varios juegos(los más vendidos)
- Sección de ofrecemos: se hablará de lo que se vende en la tienda de C.V
- Tienen un Footer

# Pagina de ABOUT
- Acerca de
- Mision
- Vision de la empresa

# Pagina de juegos
- Contiene todos los juegos(un filtro), se pueden seleccionar por categorias.
- Cuenta con una carta cada juegos, los cuales cada carta, Contiene:
                                                                - Genero ------|> - Ir al juego: Boton para trasladar a ver la infromacion del juego que quiere comprar
                                                                - Inventario---|
                                                                - Precio-------|> - Agregar al carrito: Botón para agregar al carrito de compras el juego que quiera.
                                                                - Nombre-------!

  










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
*   `deploy`: Este script toma la carpeta `d` (que se genera con el build) y la publica en la rama `gh-pages` de tu repositorio.

