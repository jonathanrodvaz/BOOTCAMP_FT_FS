//1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**
const mostrarBoton = document.querySelector(".showme");
console.log(mostrarBoton)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const mostrarId = document.querySelector("#pillado")
console.log(mostrarId)

//1.3 Usa querySelector para mostrar por consola todos los p
const todosLosP = document.querySelectorAll("p");
console.log(todosLosP)

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const todoPokemon = document.querySelectorAll(".pokemon")
console.log(todoPokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
//data-function="testMe".

const showTest = document.querySelectorAll('[data-function]');
console.log(showTest)

/*var data = "data-function=";
const showTest = document.querySelectorAll(data + "testMe")
console.log(showTest)*/  //Este metodo no funciona. 


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".

var rick = 'data-function="testMe(2)'
const thirdCharacter = document.querySelector("rick")
console.log(thirdCharacter)  //No funciona, pendiente de corregir
