function sum(numOne, numTwo) {
    if (numOne < numTwo) {
    return numTwo;
  } else {
    return numOne;
  }
  
  }
  console.log(sum(50, 30));


  ////////////////////////////////////////////////////

  /**Iteración #2: Buscar la palabra más larga**/

  /*Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
  
  Puedes usar este array para probar tu función:*/
  
  
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord() {
  let nombreMas = avengers[0];
  for (i = 0; i < avengers.length; i++) {
    if (avengers[i].length > nombreMas.length) {
      nombreMas = avengers[i];
    }
  }
  return nombreMas;
  
}
console.log(findLongestWord());

/**Iteración #3: Calcular la suma

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:*/

const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll() { 
  let suma = 0;
  numbers.forEach(
    numero=>{
      suma += numero
    }
  )
  return suma;
}
console.log(sumAll());

/**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

/*const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}

/**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/

/*const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
}

/***Iteración #6: Valores únicos**

/Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/
const duplicates = [                  ////RESUELTO CONSULTANDO https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o ////
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


let removeDuplicates = duplicates.filter((element, index) => {   //Explicación de dev.to: To eliminate duplicates, the filter() method is used to include only the elements whose indexes match their indexOf values, since we know that the filer method returns a new array based on the operations performed on it:
    return duplicates.indexOf(element) === index;
});

console.log(removeDuplicates);

/***Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/

const nameFinder = [                            ////RESUELTO CONSULTANDO https://stackoverflow.com/questions/27541311/search-a-word-in-array-of-words
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
function search (term) {
  for (var i = 0, len = nameFinder.length; i < len; i++) {
    if (nameFinder[i] === term) {
      console.log(nameFinder[i] + ' is found at ' + i);
    }
  }
}

search('Natasha');