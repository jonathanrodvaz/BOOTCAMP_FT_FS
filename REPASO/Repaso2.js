// /*1.1 Iteración #1: Buscar el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto*/


// function sum1(numberOne , numberTwo) {
//     if (numberOne > numberTwo) {
//         console.log(numberOne);
//     } else {
//         console.log(numberTwo);
//     }
//   }
// sum1(1, 2);

// //Version 2
// function sum2(numberOne , numberTwo) {
//     numberOne > numberTwo ? console.log(numberOne) : console.log(numberTwo);
//   }
// sum2(1, 2);

/*2.2 Iteración #2: Buscar la palabra más larga

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función*/

// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

// function findLongestWord(param) {
    
//     let palabraMasLarga = "";
//     for (i = 0; i < param.length; i++) {
        
//         if (param[i].length > palabraMasLarga.length) {
//             palabraMasLarga = param[i]
       
//         }  else {
//             palabraMasLarga == palabraMasLarga
//         }
//     } 
//     return palabraMasLarga;
//   } 


// console.log(findLongestWord(avengers));


/*1.3 Iteración #3: Calcular la suma

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let acc = 0
  param.forEach((param) => {
    acc += param;
    
  })

return (acc);
}

  console.log(sumAll(numbers));

  /*1.4 Iteración #4: Calcular el promedio

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
const numbers3 = [12, 21, 38, 5, 45, 37, 6];


function average(param) {
  let acc = 0
  param.forEach((param) => {
    acc += param;

  }) 
  console.log(acc / param.length)
}

 average(numbers3);

 /**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/
//Hay que hacerlo con una sola variable, un condicional, y usar el metodo que te dice el tipo de variable. 
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  
}
console.log(averageWord(mixedElements));
//Que pide este ejercicio?
//Filtrar los numeros de los strings en un array
//y acto seguido los sume. 

    
/***Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let duplicados = []       
    for (i=0; i < param.length; i++) {  
    !duplicados.includes(param[i]) && duplicados.push(param[i]) 
        
    } return duplicados
    } 
    
  
  console.log(removeDuplicates(duplicates))


 /******Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'

  ];
  function finderName(param) {

    param === nameFinder ? console.log("false") : console.log("true")
       
    }


finderName("Clint");
