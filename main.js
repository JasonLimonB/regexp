// Como primer paso podemos usar dos formas de hacer expresiones regulares
// 1.- Forma por medio de un objeto
const objRegEx = new RegExp("abc"); // le pasamos por parametro lo que seran los datos permitidos

// 2.- forma con el uso de slash (/)
const slash = /[0123456789]/; // dentro de / / van los caracteres permitidos pero dentro de [] va todo aquel que queremos usar

console.log(slash.test("1995")); // Usamos el metodo test para saber si funciona la expresion y nos devolvera un boolean
// Recibe como parámetro un String

// Ahora tambien existe una manera de simplificar las cosas, por ahora veremos el uso con slash
const num09 = /[0-9]/;
console.log(num09.test("2020"));
// como podemos observar asi ponemos un rango unicode [0-9] haciendo el uso de -

// Ahora cabe mencionar que existen maneras de abreviar las cosas con el uso de \
const numeros09 = /\d/;
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

// Tambien podemos hacer el siguiente ejemplo para tener poder usar un formato de fecha utilizando expresiones regulares

const formatoFecha = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/; // tamuen pueden ir dentro de [] ejemplo [\d]
console.log(formatoFecha.test("01-10-2020 17:12"));

// Como podemos ver no retornara un true pero nuestra expresioon regular es difícil de que se entienda

// Si queremos evitar el unico uso de un numero usamos ^ 

const sinNumeroFavorito = /[^9]/; 

console.log(sinNumeroFavorito.test("999")); // false, ya que solo hay numeors 9
console.log(sinNumeroFavorito.test("1239")); // true, porque hay mas numeros y no solamente el 9

// si queremos hacer coincidir un número entero, una secuencia de uno o más dígitos, para ello solo agregamos +
console.log(/\d+/.test("123"));
// el mas(+) al final de la expresion indica que esperamos caracteres de este tipo

// Para caracteres opcionales soo se agrega el signo de interrogacion cerrado ?

const opcionales = /colou?r/; // En este caso la letra opcional o caracter es la u

console.log(opcionales.test("color")); 
console.log(opcionales.test("colour"));
// ambos arrojaran un true porque coiciden en la expresión, y es así como se usan los opcionales.


