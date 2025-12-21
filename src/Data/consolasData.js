import React from 'react';

import ps5 from '../img/Consola PS5.webp';
import xbox from '../img/XBOX series .webp'
import nintendoSO from '../img/Nintendo switch oled.webp'
import ps2 from '../img/PS2.webp'
import xbox360 from '../img/Xbox 360.webp'

export const consolas = [
    {id:1, nombre: 'PlayStation 5', fabricante: 'Sony', imagen: ps5, descripcion: 'La PlayStation 5 es la consola de última generación de Sony, ofreciendo gráficos impresionantes y tiempos de carga rápidos.',inventario: 10 ,precio: 499.99},
    {id:2, nombre: 'XboX Series X', fabricante: 'Microsoft', imagen:xbox, descripcion: 'La Xbox Series X es la consola más potente de Microsoft, diseñada para ofrecer una experiencia de juego fluida y de alta calidad.',inventario:8 ,precio: 499.99},
    {id:3, nombre: 'Nintendo Switch', fabricante: 'Nintendo', imagen: nintendoSO, descripcion: 'La Nintendo Switch es una consola híbrida que permite jugar tanto en casa como en movimiento.',inventario:13 ,precio: 349.99},
    {id:4, nombre: 'PlayStation 2', fabricante: 'Sony', imagen: ps2, descripcion: 'La PlayStation 2 es una consola de videojuegos de Sony que ofrece una amplia gama de juegos y características multimedia.', inventario:23 ,precio: 99.99},
    {id:5, nombre: 'Xbox 360', fabricante: 'Microsoft', imagen: xbox360, descripcion: 'La Xbox 360 es una consola de videojuegos de Microsoft que ofrece una experiencia de juego en línea y una amplia biblioteca de juegos.',inventario:17 ,precio: 149.99},
];

