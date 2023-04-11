let nombre;  // Crear una variable sin inicializar
nombre = "Jonathan";  //Inicializarla con un string



function saludo() {                          //Crea una función sin parametros cuyo cometido sea un console.log con un saludo.
    console.log("Buenas tardes!");
}
saludo();



const saludoArrow = () => {                 // Crea la misma función pero en formato arrow. 
    console.log("Buenas tardes!!");
}
saludoArrow();



function suma(param1, param2) {                         // Crea una función que ejecute una suma de dos parametros
    console.log("El resultado es: ", param1 + param2);
}
suma(5, 5);



const sumaArrow = (param1, param2) => {                 // convierte la función anterior en formato arrow
    console.log("El resultado es: ", param1 + param2);
}
sumaArrow(5, 6);



let numberArray= [3, 5, 2, 8, 9]        // crea un array
let numberArray2= [4, 7, 3, 8, 5]
 

function displayArray(array) {            // Crea una funcion que reciba el array anterior y lo muestre por consola
    console.log(array);
 }                               
displayArray(numberArray);

const mostrarArrow = (array) => {       //Convertir funcion anterior en formato arrow
    console.log(array);
}
mostrarArrow(numberArray2);


function age(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
} 
age(17);
age(30);
age(10);
age(18);
age(70);

const checkAge = (edad) => {
    edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");          //delante del ? es la condición, despues la consecuencia si se cumple, y trás el : es la condicion si no se cumple (el else)
}
checkAge(28);

function mayorCincuenta(edad) {                 //Crea una función que checke si eres mayor de cincuenta
    if (edad > 50) {
        console.log("Eres mayor de cincuenta");
    }
}

mayorCincuenta(56);
mayorCincuenta(30);

const overFifty = (edad) => {                           //Convierte la anterior función a arrow
    edad > 50 && console.log("Eres mayor de cincuenta!");
}
overFifty(57);



const arrayCiudades = ["Luxemburgo", "Barcelona", "Madrid", "Berlin", "Palma"]
                                                    // FOR se usa para recorrer arrays
for (i = 0; i < arrayCiudades.length; i++)   {     //estructura for: for, abres parentesis, variable que se inicializa a 0(se utiliza para moverse), condición para que pare ese bucle (el largo del array), el movimiento de la condicion (puede ser incremento o decremento)
    console.log(arrayCiudades[i])               //realizamos un console.log y linkamos el array con [i], usando corchetes porque es un elemento dentro del array, y usando "i" porque es la variable que se encuentra al comienzo del bucle.

}

//Recorrer ciudades con un FOREACH   //FOr each se usa principalmente para arrays

arrayCiudades.forEach((ciudad, index)=>{console.log(ciudad, index)})  //lo que hay junto al forEach es una función callback. 

 const sumUno = (numberOne, numberTwo) => {
        numberOne > numberTwo ? console.log(numberOne) : console.log(numberTwo);

 }

 sumUno(5, 3);



 function sum(numberOne , numberTwo) {
    numberOne>numberTwo ? console.log(numberOne) : console.log(numberTwo)
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else 
     console.log(numberTwo);
   }

  sum(3, 5);

  const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];  
   function findLongestWord(param) {          
     let avengerBig = "";    
    for(let i=0; i<avengers.length; i++){      
         if(avengers[i].length > avengerBig.length){         
             avengerBig = avengers[i];     
         }  
    } return(avengerBig);  
 }  
 console.log(findLongestWord(avengers));


const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {

    let acc = 0;
    array.forEach(valor => {
        acc += valor;
    });
    return acc;
}
console.log(sumAll(numbers));


/EJERCICIOS BASIC ALGORITHMS////

//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = 'Hulk';

//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50;

//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
let h = 5;
let y = 10;

//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y;
console.log(z);


//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

//1.2 Declara 3 variables con los nombres y valores siguientes 
	let firstName = 'Jon'; 
	let lastName = 'Snow'; 
	let age = 24; 
    let likes = 'los lobos';
const presentacion = () => {
    console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan ${likes}`)
}
presentacion();
//Muestralos por consola de esta forma: 
	//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

//1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
//ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const sumaJuguetes = () => {
    console.log('Si te compras un Buss myYear y un Rallo mcKing, la compra te queda en: ', toy1.price + toy2.price);
}
sumaJuguetes();

1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
const carOne = () => {
    console.log('El precio final del BWM m&m es de: ', car1.basePrice + globalBasePrice);
}
const carTwo = () => {
    console.log('El precio final del Chevrolet Corbina es de: ', car2.basePrice + globalBasePrice);
}
carOne();
carTwo();
