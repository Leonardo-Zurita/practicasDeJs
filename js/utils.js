//8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320        
// Esteban: Son 3 pasos
//  Pedirle el número al usuario
//  Analizar si ese número es divisible en 2
//  Imprimir mensajes diciendo es divisible 

// funcion para sacar factorial de un numero 

export function factorial(numero) {
    let res = 1;

    for (let i = numero; i > 0; i--) {
          res = res * i;
    }

    return res;
}

// tercera forma de llamar una funcion
const hola = function() {
} 


// funcion para poner la primera letra de string en mayuscula 
export const primeraLetraAMayuscula = (cadena) => {
      let primeraLetra = cadena.charAt(0);
    primeraLetra = primeraLetra.toUpperCase();

    let cadenaEnMinuscula = cadena.toLowerCase();

    cadenaEnMinuscula = cadenaEnMinuscula.slice(1);

    const cadenaResultante = primeraLetra + cadenaEnMinuscula;
    
    return cadenaResultante;
  }
  primeraLetraAMayuscula("hola sOy Leo")

  
  
  
  
  //Así se valida un email
  export const validarEmail = (email) => {
    const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
    
    if(regex.test(email)){
      // console.log("cumple el patron")
      return true;
    } else{
      // console.log("Nocumple el patron")
      return false;
    }
    
  }
  export const generarId = (n)=> {
    let id = "";
    for (let i = 0; i < n; i++){
      id += Math.floor(Math.random() * 10);
    }
    return id;
  }



