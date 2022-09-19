// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));
const num3 = Number(prompt("Ingrese el tercer numero"));

if (num1 > num2 && num1 > num3) {
  console.log("El mayor de los 3 es el " + num1);
}

if(num2 > num1 && num2 > num3){
    console.log("El mayor de los 3 es el " + num2);

}
if(num3 > num1 && num3 > num2){
    console.log("El mayor de los 3 es el " + num3);
}
