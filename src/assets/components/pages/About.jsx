
import React from "react";
import "../styles/About.css";

export const About = () => {
    return(
        <section className="acerca">
            <div className="imgacerca">
            
            </div>
            <h1>Acerca de</h1>
            <p>Somos una tienda virtual de videojuegos, dedicada a la venta de juegos, consolas y accesorios para entusiastas y jugadores de todos los niveles de experiencia gaming.</p>
           <div className="container-about">
            <div className="About">
                <h1>Misión</h1>
                <p>Nuestra misión es ofrecer a los gamers una experiencia de compra inigualable, con un catálogo curado de los mejores videojuegos, precios competitivos y un servicio al cliente excepcional, para que cada jugador encuentre su próxima gran aventura con nosotros y se sienta parte de una comunidad apasionada.</p>
            </div>
            <div className="About">
                <h1>Visión</h1>
                <p>Nuestra visión es ser más que una tienda; aspiramos a convertirnos en el corazón de la comunidad de videojuegos, un espacio digital donde los jugadores no solo compren, sino que también descubran, compartan y celebren su pasión, impulsando la cultura gamer hacia el futuro.</p>
            </div>
           </div>
        </section>

    )
}


