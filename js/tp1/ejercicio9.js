/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
 */

const frase = prompt("Ingrese una frase");
console.log(frase);

for (let i = 0; i <= frase.length; i++) {
  if (
    frase.charAt(i, 1) == "a" ||
    frase.charAt(i, 1) == "e" ||
    frase.charAt(i, 1) == "i" ||
    frase.charAt(i, 1) == "o" ||
    frase.charAt(i, 1) == "u" 
     ) {
    document.write(frase.charAt(i, 1));
  }
}

