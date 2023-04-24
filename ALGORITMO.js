

const cuerpo = document.querySelector("body");
const miTitulo = document.querySelector("#titulo");
const miImagen = document.querySelector("#imagen");
const miLink = document.querySelector("#link");
const usuarioNuevo = document.querySelector("#usuario");

const imgGato = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY92wPd5c_01eprHiIgKxTv4G9I0wdKYsTFNbSBQrF&s"
const imgPeli = "https://pixel.disco.skyshowtime.com/uuid/03dbc720-c36d-3b49-b912-8cc42c655787/COVER_TITLE_TALL/414/552?language=en-US&proposition=SKYSHOWTIME&version=2dcb8fa1-f9e6-3b7d-ba5d-9dda053def08"
const imgPrograma = "https://static.javatpoint.com/images/javascript/javascript_logo.png"

const linkTrayecto = "https://erick-c3.github.io/Trayecto-de-Programador-/html/material-clase.html"
const linkDiscord = "https://discord.com/channels/1095718019658952754/1095718020401336393"
const linkStack = "https://es.stackoverflow.com/"

let modeloFondo = prompt ("Que tipo de modelo de pagina desea?");
let nombreUsuario = prompt ("Introduzca su usuario"); 

usuarioNuevo = nombreUsuario

function disenioPagina (colorFondo, colorTexto, imagenLink, paginaLink, anchoImg, tamañoTitulo, formatoLetra, colorUsuario){
    cuerpo.style.backgroundColor = colorFondo;
    miTitulo.style.color = colorTexto;
    miImagen.src = imagenLink;
    miLink.href = paginaLink;
    miImagen.style.fontSize = anchoImg;
    miTitulo.style.width = tamañoTitulo;
    miTitulo.style.fontFamily = formatoLetra;
    usuarioNuevo.style.color = colorUsuario;
   }
 
if (modeloFondo == 1) {
     disenioPagina ("orange", "black", imgGato, linkTrayecto, "200px", "10px", "monospace", "blue") 
} else if (modeloFondo == 2) {
    disenioPagina ("black", "white", imgPeli, linkDiscord, "300px", "20px", "cursive")
} else if (modeloFondo == 3) {
    disenioPagina ("pink", "green", imgPrograma, linkStack, "450px", "30px", "fantasy")
} else (document.write ("Error Fatal"))


