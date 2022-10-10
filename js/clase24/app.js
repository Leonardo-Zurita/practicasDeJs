// let nombre = "Leonardo"
// let apellido = "Zurita"
// let email = "leo@gmail.com"
// let domicilio = "Pepe 200 yerba buena, Tucumán, Argentina"
// let esMonotributista = true
// let esActivo = true

import {Usuario} from "./Usuario.js";

// //let usuarioLeo = ["Leonardo","Zurita","leo@gmail.com"]

// let usuarioLeo = {
//    nombre: "Leonardo",
//    apellido: "Zurita",
  
//    email: "leo@gmail.com",
//    domicilio: "Pepe 200 yerba buena, Tucumán, Argentina",
//    esMonotributista: true,
//    esActivo: true,
//   //los metodos llevan funciones
//   comprar: ()=>{
//     // console.log(`Ha comprado ${product}`)
//   },
//   vender: function(){},
//   loguar: ()=>{},
//   tegistrar: ()=>{},
//   registrar: ()=>{},
//   desloguear: ()=>{}
    
// }
// // usuarioLeo.nombre = "pepe"
// // logusuarioLeo.nombre 
// // usuarioLeo.comprar("pelota")
// // delete usuaruiLeo.domicilio
// // usuarioLeo.estaLogueado = true;
// // usuarioLeo

// // Object.keys(usuarioLeo)
// // Object.values(usuarioLeo)

// const claves = Object.keys(usuarioLeo);
// const valores = Object.values(usuarioLeo);

// console.log(claves);
// for (let i = 0; i < claves.length; i++){}

let usuarioLeo = new Usuario("Leonardo", "Zurita","leo@gmail.com");

console.log(usuarioLeo);


