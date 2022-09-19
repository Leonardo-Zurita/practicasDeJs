// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let num1 = Number(prompt("Ingrese un numero divisible por 2, 3, 5 o 7"));

if(num1%2===0){
    console.log("Es divisible por 2")
    
}
else if(num1%3===0){
    console.log("Es divisible por 3")
 }

else if(num1%5===0){
   console.log("Es divisible por 5")
}

else if(num1%7===0){
    console.log("Es divisible por 7")
}