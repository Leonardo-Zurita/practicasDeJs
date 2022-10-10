//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto
//que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function par(numero){
    const regex = /^[0-9]+$/;
    if(numero && regex.test(numero)){
        if(numero % 2 === 0){
            console.log("es par")

        }else{
            console.log("es impar");
        }
    }else{
        console.log("no es un numero");
    }
    
} 
par("5");

//dudas:
//porque en este ejercicio se usa el regex
//porque lo toma al "5" como un numero y no al -5
//no enitiendo el test que se usa con regex