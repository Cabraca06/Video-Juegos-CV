import React from "react";
import "../styles/home.css";
import "../styles/Footer.css";
export const Home = () => {
  return (
    <div>
      <main className="fondo">
        <section className="Home1">
          <div alt="Logo de Video Juegos CV" className="logoHome">
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
              <img src="/src/img/Call of duty GOLD WAR.png" alt="Juego 1" />
              <h3>Call of duty Cold War</h3>
              <a
                className="botonVer"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al juego
              </a>
            </div>
            <div className="juego">
              <img src="/src/img/Uncharted.jpg" alt="Juego 2" />
              <h3>Uncharted</h3>
              <a
                className="botonVer"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al juego
              </a>
            </div>
            <div className="juego">
              <img src="/src/img/UFC 5.jpg" alt="Juego 3" />
              <h3>UFC 5</h3>
              <a
                className="botonVer"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al juego
              </a>
            </div>
            <div className="juego">
              <img src="/src/img/Crash.jpeg" alt="Juego 4" />
              <h3>Crash Rumble</h3>
              <a
                className="botonVer"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al juego
              </a>
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
                <a className="botonVer" href="">Ir al Juego</a>
              </p>

              </p>
          
            </div>
          </div>
        </section>

        <section className="Footer">
          <p className="Footer">
          <p className="textFooter">
            Únete a nuestra comunidad de jugadores y mantente al día con todo lo
            relacionado con los videojuegos. ¡Explora, juega y disfruta con
            Video Juegos CV!
          </p>
            © 2025 Video Juegos CV. Todos los derechos reservados.
          </p>
        </section>
      </main>
    </div>
  );
};
