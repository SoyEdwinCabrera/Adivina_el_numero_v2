let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
/*
Al ser funciones que se repiten, se pueden hacer una sola funcion que reciba los parametros

let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número entre 1 y 10";
*/
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroSecreto === numeroDeUsuario) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`,
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los numeros posibles
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "No hay más números para sortear");
  } else {
    // Si el numero generado está incluido en la lista de numeros sorteados
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroAleatorio();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  // limpiar caja
  limpiarCaja();
  // Indicar mensaje de intervalo de números
  // Generar un nuevo número secreto
  // Inicializar el contador de intentos
  condicionesIniciales();
  // Deshabilitar el botón de reiniciar
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
