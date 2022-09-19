/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */





let resultado="";
do{
    let palabra = prompt("Ingresa una palabra");
    if(resultado === ""){
        
        resultado = palabra
    }
    else{
        resultado = resultado + "-" + palabra;
    }

} while (confirm("¿Desea continuar?"));

document.write(resultado);

