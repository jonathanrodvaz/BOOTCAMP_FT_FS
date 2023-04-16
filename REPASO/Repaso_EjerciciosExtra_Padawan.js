

// //Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

function checkUsersAge() {
  for (let i = 0; i < users.length; i++) {          //Aqui inicializas el bucle
    const usuario = users[i]                        //Aqui debes crear una variable donde guardaras cada iteracion del bucle. Sin esto, no puedes aplicar los if a cada caso dentro del array.
    if (usuario.years < 18) {                       //Aqui ya debes hacer referencia a la variable creada en la linea de arriba, porque entonces así se para en casa caso individual y le aplica la ccondicion del if
      console.log('El usuario ' + usuario.name + ' es menor de edad') //Aqui usas el .name con la variable creada en el for, NO CON EL ARRAY COMO HACIAS ANTES. Así no puedes pararte en cada caso particular del array, como si puedes hacer con el usuario que es users[i], es decir, cada iteración dentro del array. Si no usas estas expresiones mas concretas, no puedes especificar nada dentro del array. 
    } else {
      console.log('El usuario ' + usuario.name + ' es mayor de edad')
    }
  }
}
checkUsersAge() 

// //Ejemplo de los apuntes que he usado para hacer el ejercicio: 
// const personas = [
//   {
//     name: "Pepe",
//     age: 28,
//   },
//   {
//     name: "Jose",
//     age: 33,
//   },
//   {
//     name: "Maria",
//     age: 17,
//   },
// ]

// for (let i = 0; i < personas.length; i++) {
//   const persona = personas[i]
//   if (persona.age < 18) {
//     console.log(persona.name + " es menor de edad")
//   } else {
//     console.log(persona.name + " es mayor de edad")
//   }
// }

//Variación usando ternario. 
function checkAgeTernario() {
  for (let i = 0; i < users.length; i++) {
    const usuario = users[i]
    usuario.years < 18 ? console.log(`El usuario ${usuario.name} es menor de edad`) : console.log(`El usuario ${usuario.name} es mayorcito ya`)
  }
} 
checkAgeTernario()

// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. 
//Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

  
function foodReplacer() {
  for (let food of foodSchedule) {
    const comida = food.name                      //Aqui declaro la variable comida, donde se guardara el nombre de cada comida del array
    const vegano = food.isVegan                   //Aqui declaro la variable vegano para poder acceder al valor de isVegan y así poder usarlo en la condicion
    if(vegano === false){                         //Aqui lo que hago es: Si vegano (variable donde guardo el valor de isVegan) es falso, pues ejecutas lo que hay abajo.
   console.log(comida.replace('Salmon', 'Banana')) 
    } 
    } console.log(foodSchedule)
  
   }
  
foodReplacer() //No consigo pasar de este punto. Pese a haber logrado que en mi funcion pueda chequear si los valores de isVegan son ciertos o no, no me deja cambiar los nombres. 

//Prueba que hice al principio del ejercicio para ver como podia acceder a las propiedades. 
// function foodReplacer() {
//   for (i=0; i<foodSchedule.length; i++) {
//     let vegano = foodSchedule.isVegan
//     if (vegano === true) {
//       console.log('Esta comida es vegana')
//       }else{
//         console.log('Esta comida no es vegana')
//       }
//   }
// }
// foodReplacer()


//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, 
//menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, 
//mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];
// function sortByGenre() {
//   const peliculaPequeña = []
//   const peliculaMediana = []
//   const peliculaGrande = []
//   for (movie of movies) {
//     let duracion = movies.durationInMinutes
//     if (duracion < 100) {
//       movie.shift() && movie.unshift(peliculaPequeña)
//     } if (duracion > 100 && duracion < 200) {
//       movie.shift() && movie.unshift(peliculaMediana)
//     } if (duracion > 200) {
//       movie.shift() && movie.unshift(peliculaGrande)
//     }
//   } console.log(peliculaPequeña)
//   console.log(peliculaMediana)
//   console.log(peliculaGrande)
// }
// sortByGenre()     //Llegados a este punto, no sé muy bien como proceder, pues el codigo no ejecuta nada más que una sucesión de [] vacios. Pruebo a mirar en internet como mover un objeto de un array a otro.

// function sortByGenre() {
//   const peliculaPequeña = []
//   const peliculaMediana = []
//   const peliculaGrande = []
//   for (movie of movies) {
//     let duracion = movies.durationInMinutes
//     if (duracion < 100) {
//       movie.shift() && movie.unshift(peliculaPequeña)
//     } if (duracion > 100 && duracion < 200) {
//       movie.shift() && movie.unshift(peliculaMediana)
//     } if (duracion > 200) {
//       movie.shift() && movie.unshift(peliculaGrande)
//     }
//   } console.log(peliculaPequeña)
//   console.log(peliculaMediana)
//   console.log(peliculaGrande)
// }
//sortByGenre()  
function sortByGenre() {
  const peliculaPequeña = []
  const peliculaMediana = []
  const peliculaGrande = []
movies.forEach(function(movie, durationInMinutes) {
  if (durationInMinutes < 100 ){
    movies.splice(movie)
    peliculaPequeña.push(movie)
  } if (durationInMinutes > 100 && durationInMinutes < 200){
    movies.splice(movie)
    peliculaMediana.push(movie)
  } if (durationInMinutes > 200){
    movies.splice(movie)
    peliculaGrande.push(movie)
  }
  console.log(peliculaPequeña)
console.log(peliculaMediana)
console.log(peliculaGrande)
}); 

}
sortByGenre()  //Llegados a este punto, no puedo avanzar más. No sé como seguir. Al ejecutar la función solo consigue separarme una pelicula dentro de un array vacio, pero el resto no funcionan. 