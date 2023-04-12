// // let nombre;  // Crear una variable sin inicializar
// // nombre = "Jonathan";  //Inicializarla con un string



// // function saludo() {                          //Crea una función sin parametros cuyo cometido sea un console.log con un saludo.
// //     console.log("Buenas tardes!");
// // }
// // saludo();



// // const saludoArrow = () => {                 // Crea la misma función pero en formato arrow. 
// //     console.log("Buenas tardes!!");
// // }
// // saludoArrow();



// // function suma(param1, param2) {                         // Crea una función que ejecute una suma de dos parametros
// //     console.log("El resultado es: ", param1 + param2);
// // }
// // suma(5, 5);



// // const sumaArrow = (param1, param2) => {                 // convierte la función anterior en formato arrow
// //     console.log("El resultado es: ", param1 + param2);
// // }
// // sumaArrow(5, 6);



// // let numberArray= [3, 5, 2, 8, 9]        // crea un array
// // let numberArray2= [4, 7, 3, 8, 5]
 

// // function displayArray(array) {            // Crea una funcion que reciba el array anterior y lo muestre por consola
// //     console.log(array);
// //  }                               
// // displayArray(numberArray);

// // const mostrarArrow = (array) => {       //Convertir funcion anterior en formato arrow
// //     console.log(array);
// // }
// // mostrarArrow(numberArray2);


// // function age(edad) {
// //     if (edad >= 18) {
// //         console.log("Eres mayor de edad");
// //     } else {
// //         console.log("Eres menor de edad");
// //     }
// // } 
// // age(17);
// // age(30);
// // age(10);
// // age(18);
// // age(70);

// // const checkAge = (edad) => {
// //     edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");          //delante del ? es la condición, despues la consecuencia si se cumple, y trás el : es la condicion si no se cumple (el else)
// // }
// // checkAge(28);

// // function mayorCincuenta(edad) {                 //Crea una función que checke si eres mayor de cincuenta
// //     if (edad > 50) {
// //         console.log("Eres mayor de cincuenta");
// //     }
// // }

// // mayorCincuenta(56);
// // mayorCincuenta(30);

// // const overFifty = (edad) => {                           //Convierte la anterior función a arrow
// //     edad > 50 && console.log("Eres mayor de cincuenta!");
// // }
// // overFifty(57);



// // // const arrayCiudades = ["Luxemburgo", "Barcelona", "Madrid", "Berlin", "Palma"]
// // //                                                     // FOR se usa para recorrer arrays
// // // for (i = 0; i < arrayCiudades.length; i++)   {     //estructura for: for, abres parentesis, variable que se inicializa a 0(se utiliza para moverse), condición para que pare ese bucle (el largo del array), el movimiento de la condicion (puede ser incremento o decremento)
// // //     console.log(arrayCiudades[i])               //realizamos un console.log y linkamos el array con [i], usando corchetes porque es un elemento dentro del array, y usando "i" porque es la variable que se encuentra al comienzo del bucle.

// // // }

// // // //Recorrer ciudades con un FOREACH   //FOr each se usa principalmente para arrays

// // // arrayCiudades.forEach((ciudad, index)=>{console.log(ciudad, index)})  //lo que hay junto al forEach es una función callback. 

// // //  const sumUno = (numberOne, numberTwo) => {
// // //         numberOne > numberTwo ? console.log(numberOne) : console.log(numberTwo);

// // //  }

// // //  sumUno(5, 3);



// // //  function sum(numberOne , numberTwo) {
// // //     numberOne>numberTwo ? console.log(numberOne) : console.log(numberTwo)
// // //     if (numberOne > numberTwo) {
// // //         console.log(numberOne);
// // //     } else 
// // //      console.log(numberTwo);
// // //    }

// // //   sum(3, 5);

// // //   const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];  
// // //    function findLongestWord(param) {          
// // //      let avengerBig = "";    
// // //     for(let i=0; i<avengers.length; i++){      
// // //          if(avengers[i].length > avengerBig.length){         
// // //              avengerBig = avengers[i];     
// // //          }  
// // //     } return(avengerBig);  
// // //  }  
// // //  console.log(findLongestWord(avengers));


// // // const numbers = [1, 2, 3, 5, 45, 37, 58];

// // // function sumAll(array) {

// // //     let acc = 0;
// // //     array.forEach(valor => {
// // //         acc += valor;
// // //     });
// // //     return acc;
// // // }
// // // console.log(sumAll(numbers));


// // // /EJERCICIOS BASIC ALGORITHMS////

// // // //1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
// // // let myFavoriteHero = 'Hulk';

// // // //1.2 Crea una variable llamada x, asigna el valor 50 a ella.
// // // let x = 50;

// // // //1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
// // // let h = 5;
// // // let y = 10;

// // // //1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
// // // let z = h + y;
// // // console.log(z);


// // // //1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
// // // const character = {name: 'Jack Sparrow', age: 10};
// // // character.age = 25;
// // // console.log(character);

// // // //1.2 Declara 3 variables con los nombres y valores siguientes 
// // // 	let firstName = 'Jon'; 
// // // 	let lastName = 'Snow'; 
// // // 	let age = 24; 
// // //     let likes = 'los lobos';
// // // const presentacion = () => {
// // //     console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan ${likes}`)
// // // }
// // // presentacion();
// // // //Muestralos por consola de esta forma: 
// // // 	//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

// // // //1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
// // // //ambos juguetes.
// // // const toy1 = {name: 'Buss myYear', price: 19};
// // // const toy2 = {name: 'Rallo mcKing', price: 29};
// // // const sumaJuguetes = () => {
// // //     console.log('Si te compras un Buss myYear y un Rallo mcKing, la compra te queda en: ', toy1.price + toy2.price);
// // // }
// // // sumaJuguetes();

// // // 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// // // y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// // // basePrice más el valor de la variable globalBasePrice.
// // // let globalBasePrice = 10000;
// // // const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// // // const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
// // // globalBasePrice = 25000;
// // // const carOne = () => {
// // //     console.log('El precio final del BWM m&m es de: ', car1.basePrice + globalBasePrice);
// // // }
// // // const carTwo = () => {
// // //     console.log('El precio final del Chevrolet Corbina es de: ', car2.basePrice + globalBasePrice);
// // // }
// // // carOne();
// // // carTwo();

// // ////METODO LENGTH///

// // const country = "Italy";
// // console.log(country.length); // Retorna 5

// // const palabraLength = "Supercalifragilisticoespialidoso";
// // console.log(palabraLength.length); // retorna 32

// // const palabraDos = "EspañaEspañaEspaña";
// // console.log(palabraDos.length); // retorna 18

// // const palabraTres = "Urquinaona";
// // console.log(palabraTres.length); // retorna 10

// // const palabraPrueba = "Ibiza";
// // console.log(palabraPrueba.length);

// // ////METODO INCLUDES solo retorna booleano //////


// // const quote = "To infinity and beyond";

// // const word = "infinity";

// // console.log(quote.includes(word)); // Retorna true

// // const frase = "El método replace devuelve un string con el string insertado por argumento sustituido por el segundo argumento, es decir, como primer argumento recibirá el substring que queremos sustituir y como segundo argumento el substring que queremos que reemplace a este.";
 
// // const palabraEncontrar = "por";

// // console.log(frase.includes(palabraEncontrar));


// // const cita = "repeat: El método repeat devuelve un nuevo string con el número de copias del string donde lo estemos aplicando. Este número se le pasará por argumento al método."

// // const palabraPalabra = "aplicando"

// // console.log(cita.includes("Devuelve"));

// // ///METODO REPEAT///
// // const droid = "roger ";

// // console.log(droid.repeat(2)); // Retorna "roger roger";

// // const saludo = "Hola ";
// // const caracola = "Caracola";

// // console.log("Linea 244:",saludo.repeat(5));

// // //////// METODO REPLACE ////////////////

// // const movie = "Star Trek";

// // console.log(movie.replace("Trek", "Wars")); 
// // // Retorna "Star Wars"


// // const lluvia = "Hoy en el Telediario dan sol";

// // console.log(lluvia.replace("sol", "lluvia"));

// // const declaracion = "Mi declaracion de la renta esta pendiente";
// // console.log(declaracion.replace("pendiente", "terminada"));

// /////////////////////////////replaceALLL///////////////////////////////

// const quote = "Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las tinieblas en la Tierra de Mordor donde se extienden las Sombras.";

// console.log(quote.replaceAll("Anillo", "Gato"));
// // Retorna "Un Gato para gobernarlos a todos. 
// // Un Anillo para encontrarlos, un Anillo para atraerlos 
// // a todos y atarlos en las tinieblas en la Tierra de Mordor 
// // donde se extienden las Sombras."


// const bolsa = "La bolsa principal de España es el IBEX-35, y la bolsa principal de Nueva York es el SP-500";

// //console.log(bolsa.replaceAll("bolsa", "mercado"))

// //////SLICE///////
// const album = "Master of Puppets";

// console.log(album.slice(10, 13));
// // Retorna "Pup"

// console.log(bolsa.slice(40, 91));

// //////SPLIT///////

// const phrase = "Buenos días, ¿cómo estás?";
// console.log(phrase.split(" ", 3));
// // Retorna ["Buenos","días",",¿cómo" ]

// console.log(bolsa.split(" ", 1))

// ///////////////tolowercase y TOUPPERCASE//////////////////////
// const name = "Peter";
// console.log(name.toLowerCase());
// // // Retorna "peter"

// // const nameTwo = "Peter Parker Parker";
// // console.log(nameTwo.toUpperCase());
// // // Retorna "PETER"

// // ///////////////////////TRIM////////////////////////////////////////
// // const quoteQuote = "    Luke, yo soy tu padre     ";
// // console.log(quote.trim());
// // // Retorna "Luke, soy tu padre"





// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////METODOS NUMBERS///////////////////////////////////////////////////////////////////////////////////////////////////



// // // /////isNaN/////
// // // //isNaN: Is Not a Number
// // // isNaN(true);   // true
// // // isNaN("hola"); // false
// // // isNaN(10);     // false
// // // isNaN("12");   // false
// // // const hora = 10;
// // // const tiempo = "Las diez";
// // // console.log(isNaN(tiempo));

// // // /////////////////////////isInteger///////////
// // // ////isInteger: El método isInteger nos indica a través de un booleano si el valor pasado es un número entero, si no nos devolverá false////
// // // const integer = 10;
// // // const decimal = 12.5;

// // // Number.isInteger(integer); //true
// // // Number.isInteger(decimal); //false

// // /////parseInt///// convertir numero string a numero entero
// // const age = "18";
// // const ageToNumber = parseInt(age);
// // console.log(ageToNumber);
// // // Retorna 18 en formato number


// // /////////////parseFloat//////////////////
// // const budget = "1.250";
// // const budgetInFloat = parseFloat(budget);
// // console.log(budgetInFloat);
// // // Retorna 1.25 en número decimal

// // //////////toString////////////

// // let num = 255;

// // alert( num.toString(16) );  // ff
// // alert( num.toString(2) );   // 11111111


// // ////////////////METODOS DE ARRAYS/////////////////
// // ////pop//////

// // pop()///////// no admite parámetros. Elimina el último elemento del array



// // //////push///// push() entre los paréntesis se pueden añadir tantos valores como se quiera añadir a  el array, separados por comas (,). Añade un elemento al array en última posición.

// // moderatIII.push('Ethereal');

// // console.log(moderatIII);

// // /////reverse//////

// // reverse() //////tampoco admite parámetros. Invierte el orden del array.

// ///////shift/////////
// //shift() funciona como pop(), pero extrayendo del array el primer elemento. Todos los índices de la matriz se actualizan.

// //moderatIII.shift();

// const mercadoBolsa = ["3", "4", "5"]

// console.log(mercadoBolsa.shift());

// console.log(mercadoBolsa);


// ///////unshift////////
// ////unshift sirve para insertar elementos a un array, al principio de este array. 

// mercadoBolsa.unshift(2, 3);
// console.log(mercadoBolsa);

// //////sort/////////
// /**sort()** ordena los elementos del array, tal y como ordena los nombres de archivo un ordenador, es decir:

// - Los valores como los de esta matriz se ordenan por orden alfabético.

// - Si la matriz consiste en una serie de números, estos se ordenan según las cifras más a la izquierda, de menor a mayor. Así, por ejemplo, una matriz que consista en **200,35,40,1** no se ordenará según el valor de las cifras —**1,35,40,200**—, sino que **sort()** devolverá **1,200,35,40**/

// //moderatIII.sort();

// //console.log(moderatIII);

// ///////////splice////////////
//**slice()** extrae una copia de una sección especificada de una matriz, aunque a diferencia de **splice()** no la modifica.
/*Para este método el primer parámetro es obligatorio y el segundo opcional:
- Definidos ambos naturales, el primero es el índice desde el que debe comenzarse la copia (se incluye ese elemento en la misma), y el segundo el índice en el que debe detenerse (y este elemento que no se incluye).
- Definido sólo uno, cuenta como el índice desde el que comenzar la copia, que abarcará los elementos hasta el final de la matriz.*/

let people3 = ["Andres", "Wilson", "Dunia", "Lucas", "Carlos", "Maria", "Sandra"];
let amPeople = people3.splice(1, 5, "NUEVO NOMBRE")
console.log(amPeople)
console.log(people3)


/////////////////METODOS QUE NO MODIFICAN EL ARRAY //////////////////////////////////////////

///////concat///////
////////concat() en este caso he concatenado la segunda matriz a la primera, pero se pueden encadenar una serie de elementos separados por comas, o incluso varias matrices.

const nuMerosOne = ["Hola", "Caracola", "Rayos", "Y", "Truenos"];
const nuMerosTwo = [8, 3, 5, 9, 9];

// console.log(nuMerosTwo.concat(nuMerosOne));

//////////////////join()//////////////////////////
///Empleado sin un parámetro, join() devuelve una mera cadena en la que los valores del array están separados por comas. Sin embargo, se puede especificar una cadena que sirva como separador.

// let nuMeMeros = nuMerosOne.join('-');
// console.log(nuMeMeros);

/////ToString///////
////toString() este método es similar a join(), sólo que no admite parámetros, y que el resultado es un objeto String, con sus propias propiedades y métodos.

// moderatII.toString()

// console.log(moderatII);

//SLICE//
/**slice()** extrae una copia de una sección especificada de una matriz, aunque a diferencia de **splice()** no la modifica.

Para este método el primer parámetro es obligatorio y el segundo opcional:

- Definidos ambos naturales, el primero es el índice desde el que debe comenzarse la copia (se incluye ese elemento en la misma), y el segundo el índice en el que debe detenerse (y este elemento que no se incluye).

- Definido sólo uno, cuenta como el índice desde el que comenzar la copia, que abarcará los elementos hasta el final de la matriz.*/

const vaLlejo = [2, "cincuenta", "K-H7", 98, "Valencia"];
console.log(vaLlejo.slice(1, 3))

const comidas = ["macarrones", "lentejas", "potaje", "pizza"];
let comidasCopy = comidas.slice(1, comidas.length);  ////// aqui, al definir los parametros de slice, estas diciendo "Cortame del 1 al final del array". porque cuando dices comidas.length estas diciendo cortame hasta el final del array. 
console.log(comidasCopy)