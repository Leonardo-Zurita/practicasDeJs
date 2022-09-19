// 2- Escribir un programa que solicite una nota (número) de 0  a 10.
//  Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
//  Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.


let nota;
do{
    nota=Number(prompt("Ingrese una nota del 0 al 10"));
    console.log(nota);

    if(!isNaN(nota) && nota>=0 && Number(nota) <=10){
    }    

        else if(Number(nota) > 10){
            console.log("Numero invalido");
    }    
              
    
    if(nota===0 || nota===1 || nota===2){
        alert("Muy deficiente");        
    }

    if(nota===3 || nota===4){
        alert("Insuficiente");
    }

    if(nota===5 ||nota===6){
        alert("Insuficiente");


    }
    if(nota===7){
        alert("Bien");


    } 
    if(nota===8 ||nota===9){
        alert("Insuficiente");


    } 
    if(nota===10){
        alert("Insuficiente");
    }    


   else{ 
        (alert("Ingrese un numero valido"))
        
    }

}
while(confirm("¿Desea continuar?"));
