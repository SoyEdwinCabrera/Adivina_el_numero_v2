/*Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".*/

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

/*Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre
que se presione el botón "Console".*/

function mensaje() {
  console.log("El botón fue clicado");
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt",
preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje
concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".*/

function ciudad() {
  let ciudad = prompt("Indica el nombre de una ciudad de Brasil");
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

/*Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".*/

function alerta() {
  alert("Yo amo JS");
}

/*Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.*/

function suma() {
  let num1 = parseInt(prompt("Indica un número"));
  let num2 = parseInt(prompt("Indica otro número"));
  alert(`La suma de los números es: ${num1 + num2}`);
}
