/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
.*/

const num1 = prompt("Ingrese el primer numero");
const num2 = prompt("Ingrese el segundo numero");

const result = Number(num1) + Number(num2);

console.log("El resultado es " + result)
