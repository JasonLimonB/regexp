// Como primer paso podemos usar dos formas de hacer expresiones regulares
// 1.- Forma por medio de un objeto
const objRegEx = new RegExp("abc"); // le pasamos por parametro lo que seran los datos permitidos

// 2.- Forma con el uso de slash (/)
const slash = /[0123456789]/; // dentro de / / van los caracteres permitidos pero dentro de [] va todo aquel que queremos usar

console.log(slash.test("1995")); // Usamos el método test para saber si funciona la expresión y nos devolverá un boolean
// Recibe como parámetro un String

// Ahora también existe una manera de simplificar las cosas, por ahora veremos el uso con slash
const num09 = /[0-9]/;
console.log(num09.test("2020"));
// como podemos observar así ponemos un rango unicode [0-9] haciendo el uso de -

// Ahora cabe mencionar que existen maneras de abreviar las cosas con el uso de \
const numeros09 = /\d/;
console.log(numeros09.test("2030"));
/*
    Ahora te listo algunos uso mas comunes en expresiones regulares
    
    \d  -  Cualquier dígito o carácter
    \w  -  Cualquier carácter alfanumérico("Hola mundo")
    \s  -  Cualquier carácter de espacios en blanco(espacio, tabulaciones, linea nueva o similar)
    \D  -  Cualquier carácter que no sea un numero
    \W  -  Carácter no alfanumérico
    \S  -  Carácter que no sea un espacio en blanco
    .   -  Cualquier carácter menos una salto de linea

*/

// También podemos hacer el siguiente ejemplo para tener poder usar un formato de fecha utilizando expresiones regulares

const formatoFecha = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/; // también pueden ir dentro de [] ejemplo [\d]
console.log(formatoFecha.test("01-10-2020 17:12"));

// Como podemos ver no retornara un true pero nuestra expresión regular es difícil de que se entienda

//3.- Si queremos evitar el único uso de un numero usamos ^ 

const sinNumeroFavorito = /[^9]/; 

console.log(sinNumeroFavorito.test("999")); // false, ya que solo hay números 9
console.log(sinNumeroFavorito.test("1239")); // true, porque hay mas números y no solamente el 9

//4.- si queremos hacer coincidir un número entero, una secuencia de uno o más dígitos, para ello solo agregamos +
console.log(/\d+/.test("123"));
// el mas(+) al final de la expresión indica que esperamos caracteres de este tipo

// Para caracteres opcionales solo se agrega el signo de interrogación cerrado ?

const opcionales = /colou?r/; // En este caso la letra opcional o carácter es la u

console.log(opcionales.test("color")); 
console.log(opcionales.test("colour"));
// ambos arrojaran un true porque coinciden en la expresión, y es así como se usan los opcionales.


//5.- También podemos encontrar algo en las expresión regular al final una i

let caseSensitive = /boo+(hoo+)+/i;
console.log(caseSensitive.test("Boohoohooooo"));
console.log(caseSensitive.test("boohoooo"));

// Esto quiere decir que no distingue entre mayúsculas y minúsculas por eso ambos ejemplo retornan true

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

// Todo lo que esta en paréntesis y coincida con la condición la mostrará en el método exec
let masCoincidencias = /'([^']*)'/;
console.log(masCoincidencias.exec("ella dice 'hola'"));

//Al usar el método exec nos muestra las coincidencias y en caso de que no existan exec mostrara como undefined(en el uso de paréntesis)
console.log(/mal(o)?/.exec("mal"));


// Ahora una expresión regular para una fecha

const fechaNueva = /\d{2}-\d{2}-\d{2,4}/;
console.log(fechaNueva.exec("09-10-2000"));

// Para dar un limite de inicio o fin  podemos usar $ y ^

// este ejemplo es para que inicie y finalice con letra
console.log(/\bcat\b/.test("concatenate"));// false
console.log(/\bcat\b/.test("cat"));// true
console.log(/\bcat/.test("catnate"));// true
console.log(/cat\b/.test("catendercat"));// true

/*
    Digamos que queremos que nuestra expresión regular inicie con un numero pero seguido de ello
    queremos una palabra como (hola, adios, buenas) usamos el símbolo de tubería o pipe ( | )
*/

const numSaludo = /\b\d+ (hola|bye|bueno)s?\b/; // los paréntesis es para marcar el limite de los pipes
console.log(numSaludo.test("33 buenos"));
console.log(numSaludo.test("3 holaadio"));

// ¿Puedes explicar esta expresión regular?   /\b([01]+b|[\da-f]+h|\d+)\b/.

// Ahora veamos un momento el método replace en javascript
// Como sabemos este método reemplazará aquellos caracteres que le indiquemos pero solamente el primero que haga match

console.log("papa".replace("p", "m")); // imprimirá mapa

// como podemos ver solo hace el replace con la primer p, pero si queremos podemos usar un poco de expresiones regulares como:

console.log("gpapa".replace("Borobudur".replace(/[ou]/, "a"));console.log("papa".replace("Borobudur".replace(/[ou]/, "a")); 
// a la primera que haga match con [ou]
            
// para que el replace aplique a todas las coincidencias usamos lo siguiente
console.log("papa".replace(/p/g, "m")); // reemplazará las p por m, y en este caso por ser una expresión regular omitimos ""

