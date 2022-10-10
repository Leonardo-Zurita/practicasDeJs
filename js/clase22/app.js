import {factorial, primeraLetraAMayuscula, validarEmail} from "./utils.js";

const resultadoFactorial = factorial(8);

console.log(resultadoFactorial);

const str = "hola soy leo Y ESTOY APRENDIENDO JS"
const cadena = primeraLetraAMayuscula(str);
// se puede poner en el parentecis el str o lo que está entre comillas
 console.log(cadena);

const texto = "Leo"
const texto2 = 20

const resultado = texto + texto2;
//La forma de escribir de esta forma se llama template strings o literals
const datos = `Su nombre es ${texto} y tiene ${texto2} años`;
console.log(datos); 



//email
const email = "leonardodanielzurita@hotmail.com";
const emailValidado = validarEmail(email)

if(emailValidado) console.log("Email valido")
else console.log("Email NO valido")





