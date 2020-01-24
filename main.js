// Como primer paso podemos usar dos formas de hacer expresiones regulares
// 1.- Forma por medio de un objeto
let objRegEx = new RegExp("abc"); // le pasamos por parametro lo que seran los datos permitidos

// 2.- forma con el uso de slash (/)

let slash = /[0123456789]/; // dentro de / / van los caracteres permitidos pero dentro de [] va todo aquel que queremos usar

console.log(slash.test("1995")); // Usamos el metodo test para saber si funciona la expresion y nos devolvera un boolean
// Recibe como parámetro un String

// Ahora tambien existe una manera de simplificar las cosas, por ahora veremos el uso con slash
let num09 = /[0-9]/;
console.log(num09.test("2020"));
// como podemos observar asi ponemos un rango unicode [0-9] haciendo el uso de -

// Ahora cabe mencionar que existen maneras de abreviar las cosas con el uso de \
let numeros09 = /\d/;
console.log(numeros09.test("2030"));
/*
    Ahora te listo algunos uso mas comunes en expresiones regulares
    
    \d  -  Cualquier digito o caracter
    \w  -  Cualquier caracter alfanumerico("Hola mundo")
    \s  -  Cualquier caracter de espacios en blanco(espacio, tabulaciones, linea nueva o similar)
    \D  -  Cualquier caracter que no sea un numero
    \W  -  Caracter no alfanumerico
    \S  -  Caracter que no sea un espacio en blanco
    .   -  Cualquier caracter menos una salto de linea

*/

