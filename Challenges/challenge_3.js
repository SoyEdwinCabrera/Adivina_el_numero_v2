/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura
en metros y peso en kilogramos, que se recibirán como parámetros.*/

function calcularIMC(altura, peso) {
  let altura = prompt("Escribe tu altura en metros: ");
  let peso = prompt("Escribe tu peso en kilogramos: ");
  return peso / (altura * altura);
}

/*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function factorial(numero) {
  let numero = prompt("Escribe un número: ");
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el
valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
Para esto, considera la cotización del dólar igual a R$4,80.*/

function convertirDolaresaReales(dolares) {
  let dolares = prompt("Escribe la cantidad de dólares a convertir: ");
  return dolares * 4.8;
}

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
utilizando la altura y la anchura que se proporcionarán como parámetros.*/

function calcularAreaYPerimetro(alto, ancho) {
  let alto = prompt("Escribe la alto de la sala: ");
  let ancho = prompt("Escribe la ancho de la sala: ");
  let area = alto * ancho;
  let perimetro = 2 * (alto + ancho);
  return `El área de la sala es ${area} y el perímetro es ${perimetro}`;
}

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/

function calcularAreaYPerimetroCirculo(radio) {
  let radio = promtp("Escribe el radio de la sala: ");
  let area = 3.14 * radio * radio;
  let perimetro = 2 * 3.14 * radio;
  return `El área de la sala es ${area} y el perímetro es ${perimetro}`;
}

/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/

function tablaMultiplicar(numero) {
  let numero = prompt("Escribe un número: ");
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
