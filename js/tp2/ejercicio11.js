/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

let nombre1, edad1, nombre2, edad2, nombre3, edad3;
while (true){

nombre1 = prompt("Ingrese el primer nombre");
edad1 = prompt("Ingrese la primera edad");

if(edad1!==null && !isNaN(edad1) && Number(edad1)>=0){
    edad1 = Number(edad1);
    break
    
}
} 

while (true){

nombre2 = prompt("Ingrese el segundo nombre");
edad2 = prompt("Ingrese la segunda edad");

if(edad2!==null && !isNaN(edad2)&& Number(edad2)>=0){
    edad2 = Number(edad2);
    document.write("Estoy dentro del if")
    break

}
}

while (true){

nombre3 = prompt("Ingrese el tercer nombre");
edad3 = prompt("Ingrese la tercera edad");

if(edad3!==null && !isNaN(edad3)&& edad3>=0){
    edad3 = Number(edad3);
    break

}
}
//switch
const mayor = Math.max(edad1, edad2, edad3);
console.log(mayor)

if(mayor===edad1){
    console.log("El de mayy¿or edad es " + nombre1)
}else if (mayor===edad2){
    console.log("El de mayor edad es " + nombre2)

} else{
    console.log("El de mayor edad es" + nombre3)
}