/* Crea una lista vacía llamada "listaGenerica".*/

let listaGenerica = [];

/* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes
elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

/* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

let lenguagesDeProgramacion1 = ["Java", "Ruby", "Golang"];

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/

function mostrarLenguajes() {
  console.log(lenguagesDeProgramacion);
}

/* Crea una función que muestre en la consola todos los elementos de la lista
"lenguagesDeProgramacion en orden inverso.*/

function mostrarLenguajesInverso() {
  console.log(lenguagesDeProgramacion.reverse());
}

/* Crea una función que calcule el promedio de los elementos en una lista de números.*/

function promedioLista(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

/* Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/

function mostrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log(`El número mayor es ${mayor} y el número menor es ${menor}`);
}

/* Crea una función que devuelva la suma de todos los elementos en una lista.*/

function sumaLista(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

/* Crea una función que devuelva la posición en la lista donde se encuentra un elemento
pasado como parámetro, o -1 si no existe en la lista.*/

function encontrarElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i;
    }
  }
  return -1;
}

/* Crea una función que reciba dos listas de números del mismo tamaño y devuelva
una nueva lista con la suma de los elementos uno a uno.*/

function sumaListas(lista1, lista2) {
  let nuevaLista = [];
  for (let i = 0; i < lista1.length; i++) {
    nuevaLista.push(lista1[i] + lista2[i]);
  }
  return nuevaLista;
}

/* Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

function cuadradoLista(lista) {
  let nuevaLista = [];
  for (let i = 0; i < lista.length; i++) {
    nuevaLista.push(lista[i] * lista[i]);
  }
  return nuevaLista;
}
