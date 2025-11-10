import React from "react";
import "../styles/Home.css";
import "../styles/Footer.css";
import { Link } from "react-router-dom";


export const Home = () => {
 
  return (
    <div>
      <main className="fondo">
        <section className="Home1">
          <div title="Logo de Video Juegos CV" className="logoHome">
            <h1 className="textFondo">Bienvenido a Video Juegos CV</h1>
          </div>
          <p className="textPrincipal">
            En nuestra Tienda de video juegos virtual, te ofrecemos una
            experiencia única para los amantes de los videojuegos. Explora
            nuestro catálogo de juegos, consolas y accesorios, y mantente al día
            con las últimas noticias y tendencias en el mundo de los
            videojuegos.
          </p>
        </section>

        <section className="Carrousel">
          <h2 className="textFondo">Juegos Destacados</h2>
          <div className="juegosDestacados">
            <div className="juego">
              <div className="call" alt="Juego 1" />
              <h3>Call of duty Cold War</h3>
              <Link to="/juegos" className="botonVer">
                Ir al juegos
              </Link>
            </div>
            <div className="juego">
              <div className="unch" alt="Juego 2" />
              <h3>Uncharted</h3>
              <Link to="/juegos" className="botonVer">
                Ir al juegos
              </Link>
            </div>
            <div className="juego">
              <div className="ufc" alt="Juego 3" />
              <h3>UFC 5</h3>
              <Link to="/juegos" className="botonVer">
                Ir al juegos
              </Link>
            </div>
            <div className="juego">
              <div className="crash" alt="Juego 4" />
              <h3>Crash Rumble</h3>
              <Link to="/juegos" className="botonVer">
                Ir al juegos
              </Link>
            </div>
          </div>
        </section>
        
        <section className="Ofrecemos">
          <h2 className="textFondo">¿Qué ofrecemos?</h2>
          <div className="OfreceJuego">
            <div className="card">
              <div className="imgJuego"> </div>
              <p className="textHom">
                En nuestro sitio web, encontrarás una amplia variedad de
                contenido relacionado con los videojuegos, incluyendo:  Reseñas
                de juegos  Noticias,  actualizaciones,  Guías, tutoriales y
                Foros de discusió.
              <p className="ofrece-card-btn">
              <Link to="/juegos" className="botonVer">
                Ir al juegos
              </Link>
              </p>

              </p>
          
            </div>
          </div>
        </section>

        <footer className="Footer">
          <p className="Footer">
          <p className="textFooter">
            Únete a nuestra comunidad de jugadores y mantente al día con todo lo
            relacionado con los videojuegos. ¡Explora, juega y disfruta con
            Video Juegos CV!
          </p>
            © 2025 Video Juegos CV. Todos los derechos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
};
