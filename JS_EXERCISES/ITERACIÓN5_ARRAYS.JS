/*1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.*/

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log("Ejercicio 1.1: ", avengers[0]);

/*1.2 Cambia el primer elemento de avengers a "IRONMAN"*/

const theAvengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; //Nota: Modifico el nombre de la variable para que no de conflicto con la del ejercicio anterior. 
console.log("Ejercicio 1.2: ", theAvengers.shift());
console.log("Ejercicio 1.2: ", theAvengers.unshift("IRONMAN"));
console.log("Ejercicio 1.2: ", theAvengers);

/*1.3 console numero de elementos en el array usando la propiedad correcta de Array.  */ 

const theTheAvengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; //Nota: Modifico el nombre de la variable para que no de conflicto con la del ejercicio anterior. 
console.log("Ejercicio 1.3: ", theTheAvengers.length);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
console.log("Ejercicio 1.4: ", rickAndMortyCharacters.push("Morty", "Summer"));
console.log("Ejercicio 1.4: ", rickAndMortyCharacters);
console.log("Ejercicio 1.4: ", rickAndMortyCharacters[4]);

/*1.5 Elimina el último elemento del array y muestra el primero y el último por consola.*/

const theRickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; //Nota: Modifico el nombre de la variable para que no de conflicto con la del ejercicio anterior. 
console.log("Ejercicio 1.5: ", theRickAndMortyCharacters.pop());
console.log("Ejercicio 1.5: ", theRickAndMortyCharacters);
console.log("Ejercicio 1.5: ", theRickAndMortyCharacters[0]);
console.log("Ejercicio 1.5: ", theRickAndMortyCharacters[4]);


/*1.6 Elimina el segundo elemento del array y muestra el array por consola.*/

const theTheRickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; //Nota: Modifico el nombre de la variable para que no de conflicto con la del ejercicio anterior. 
console.log("Ejercicio 1.6: ", theTheRickAndMortyCharacters.splice(1, 1));
console.log("Ejercicio 1.6: ", theTheRickAndMortyCharacters);