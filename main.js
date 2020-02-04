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

//3.- Si queremos evitar el unico uso de un numero usamos ^ 

const sinNumeroFavorito = /[^9]/; 

console.log(sinNumeroFavorito.test("999")); // false, ya que solo hay numeors 9
console.log(sinNumeroFavorito.test("1239")); // true, porque hay mas numeros y no solamente el 9

//4.- si queremos hacer coincidir un número entero, una secuencia de uno o más dígitos, para ello solo agregamos +
console.log(/\d+/.test("123"));
// el mas(+) al final de la expresion indica que esperamos caracteres de este tipo

// Para caracteres opcionales soo se agrega el signo de interrogacion cerrado ?

const opcionales = /colou?r/; // En este caso la letra opcional o caracter es la u

console.log(opcionales.test("color")); 
console.log(opcionales.test("colour"));
// ambos arrojaran un true porque coiciden en la expresión, y es así como se usan los opcionales.


//5.- Tambien podemos encotrar algo en las expresion regular al final una i

let caseSensitive = /boo+(hoo+)+/i;
console.log(caseSensitive.test("Boohoohooooo"));
console.log(caseSensitive.test("boohoooo"));

// Esto quiere decir que no distingue entre mayusculas y minusculas por eso ambos ejemplo retornan true

// Tambien podemos indicar el minimo y el maximo de caracteres que pueen repetirse
let repetir = /\d{2,4}/; // minimo 2 maximo 4
console.log(repetir.test("1")); // solo es uno por tanto retorna false
console.log(repetir.test("11")); // ahora son dos y retorna true

//6.- Ahora llegamos a un punto donde usaremos exec en ves de tes, test solo funciona para saber si esta correcta nuestra expresion pero
// exec hace algo mas, por ejemplo:

let nuevoExec = /[a-g]/;
console.log(nuevoExec.exec("zabx"));
console.log(nuevoExec.exec("zzg").index);

// Esto no retorna un arreglo indicando donde inicia la coincidencia de la expresion, el indice y el input que está

// Todo lo que esta en parentesis y coincida con la condicion la mostrará en el metodo exec
let masCoincidencias = /'([^']*)'/;
console.log(masCoincidencias.exec("ella dice 'hola'"));

//Al usar el metodo exec nos muestra las coincidencias y en caso de que no existan exec mostrara como undefined(en el uso de parentesis)
console.log(/mal(o)?/.exec("mal"));


// Ahora una expresion regular para una fecha

const fechaNueva = /\d{2}-\d{2}-\d{2,4}/;
console.log(fechaNueva.exec("09-10-2000"));

// Para dar un limite de inicio o fin  podemos usar $ y ^, veamo un pequeño ejemplo

// este ejemplo es para que inicie y finalize con letra
console.log(/\bcat\b/.test("concatenate"));// false
console.log(/\bcat\b/.test("cat"));// true
console.log(/\bcat/.test("catnate"));// true
console.log(/cat\b/.test("catendercat"));// true

/*
    Digamos que queremos que nuestra expresion regular inicie con un numero pero seguido de ello
    queremos una palabra como (hola, adios, buenas) usamos el simbolo de tuberia o pipe ( | )
*/

const numSaludo = /\b\d+ (hola|bye|bueno)s?\b/; // los parentesis es para marcar el limite de los pipes
console.log(numSaludo.test("33 buenos"));
console.log(numSaludo.test("3 holaadio"));

// ¿Puedes explicar esta expresion regular?   /\b([01]+b|[\da-f]+h|\d+)\b/.