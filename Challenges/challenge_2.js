/*Crear una función que muestre "¡Hola, mundo!" en la consola.*/

function holaMundo() {
  console.log("Hola Mundo!");
}

/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.*/

function holaNombre(nombre) {
  console.log(`Hola, ${nombre}!`);
}

/*Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/

function dobleNumero(numero) {
  return numero * 2;
}

/*Crear una función que reciba tres números como parámetros y devuelva su promedio.*/

function promedioNumeros(num1, num2, num3) {
  return (num1 + num2 + num3) / promedioNumeros.length;
}

/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/

function numeroMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

/*Crear una función que reciba un número como parámetro y devuelva el
resultado de multiplicar ese número por sí mismo.*/

function multiplicarNumero(num) {
  return num * num;
}
