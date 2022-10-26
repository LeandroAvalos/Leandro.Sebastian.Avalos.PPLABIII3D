import {crearCartaParaAnuncio} from "./crearAnunciosDinamicos.js";

const anuncios = JSON.parse(localStorage.getItem("lista")) || [];
const divContenedorAnuncios = document.getElementById("container");

anuncios.forEach(elemento => {
    divContenedorAnuncios.appendChild(crearCartaParaAnuncio(elemento));
});