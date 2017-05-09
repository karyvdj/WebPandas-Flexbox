// alert("hola")
var botonOrigen = document.getElementById('origen');
var botonExtincion = document.getElementById('extincion');
var botonFotos = document.getElementById('fotos');
var fotos = document.getElementsByClassName('imagenBoton');

var p01 = document.getElementById('p01');
var p02 = document.getElementById('p02');
var borrar = document.getElementsByClassName('cerrar');

function quitarP1(){
  p01.style.visibility = "hidden";
  botonOrigen.removeEventListener("click", quitarP1);
  botonOrigen.addEventListener("click", ponerP1);
}

function ponerP1(){
  p01.style.visibility = "visible";
  botonOrigen.removeEventListener("click", ponerP1);
  botonOrigen.addEventListener("click", quitarP1);
}

botonOrigen.addEventListener("click", quitarP1);


function quitarP2(){
  p02.style.visibility = "hidden";
  botonExtincion.removeEventListener("click",quitarP2);
  botonExtincion.addEventListener("click", ponerP2);
}

function ponerP2(){
  p02.style.visibility = "visible";
  botonExtincion.removeEventListener("click",ponerP2);
  botonExtincion.addEventListener("click", quitarP2);
}

botonExtincion.addEventListener("click", quitarP2);


function identificarTache() {
  cerrar(this);
}

for (var i = 0; i < borrar.length; i++) {
  borrar[i].addEventListener("click", identificarTache);
}

function cerrar(tache) {
  var padre = tache.parentNode;
  padre.style.display = "none";
}

function restaurarFotos() {
  for (var i = 0; i < fotos.length; i++) {
    fotos[i].style.display = "inline-block"
  }
}
botonFotos.addEventListener("click", restaurarFotos)
// borrar.addEventListener("click", cerrar);
