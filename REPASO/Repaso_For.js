////FOR////
// for (inicializacion; condicion; actualizacion) {  las lineas de codigo que queremos que se repitan}
// for (i=0; i<array.length; i++) { las lineas de codigo que queremos que se repitan }

let i;
for (i = 20; i >= 0; i--) {
  //console.log("me encuentro en la posicion " + i);
}

for (let x = 0; i >= 20; i++) {
  //console.log("me encuentro en la posicion " + i);
}

///Recorrer un array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (x = 0; x < number.length; x++) {
  console.log(number[x]);
}

let family = [
  {
    type: "padre",
    name: "Miguel",
    adress: [28029, "Madrid"],
  },
  {
    type: "madre",
    name: "Lucia",
    adress: ["Madrid"],
  },
  {
    type: "hijo",
    name: "Luis",
    adress: ["Madrid"],
  },
];

console.log(family[0].adress);
///  ----- EJEMPLO 1: bucles anidados para entras a la key adress
for (x = 0; x < family.length; x++) {
  for (let z = 0; z < family[x].adress.length; z++) {
    console.log(
      `el miembro de la familia llamado ${family[x].name} vive en ${family[x].adress[z]}`
    );
    //el miembro de la familia llamado Miguel vive en Madrid
    //el miembro de la familia llamado Lucia vive en 28024
  }
}

// -----EJEMPLO 2: sacar la persona que vive en el CP: 28024
for (i = 0; i < family.length; i++) {
  for (x = 0; x < family[i].adress.length; x++) {
    // family[i].adress[x] == 28024 &&  console.log(`${family[i].name} vive en el codigo postal 28024`);
  }
}

// ---- EJEMPLO 3: sacar la persona a la cual le falta el codigo postal en su adress

for (i = 0; i < family.length; i++) {
  let acc = 0;
  for (let s = 0; s < family[i].adress.length; s++) {
    typeof family[i].adress[s] == "number" && acc++;
  }

  // guardamos el string que luego sacamos por consola
  /// tres formas de evaluar el valor de la variable templateString
  // -------- FORMA 1 ----- TERNARIO
  let templateString =
    acc == 0
      ? `${family[i].name} le falta el codigo postal`
      : `${family[i].name} tiene el codigo postal`;

  // -------- FORMA 2 ----- OPERADOR AND
  
  templateString = acc == 0 && `${family[i].name} le falta el codigo postal`;

  // -------- FORMA 3 ------ IF

  if (acc == 0) {
    templateString = `${family[i].name} le falta el codigo postal`;
  } else {
    templateString = `${family[i].name} tiene el codigo postal`;
  }
  //console.log(templateString); // sacamos el resultado de si tienen o no codigo postal
}

// ---- EJEMPLO 4: ahora lo que hacemos es que contador lo guardamos en un objeto y este dentro de un array

let family1 = [
  {
    type: "padre",
    name: "Miguel",
    adress: [28029, "Madrid"],
  },
  {
    type: "madre",
    name: "Lucia",
    adress: ["Madrid"],
  },
  {
    type: "hijo",
    name: "Luis",
    adress: ["Madrid"],
  },
];

let familyContadorCheck = [];
for (let i = 0; i < family1.length; i++) {
  let contador = 0;
  for (let x = 0; x < family1[i].adress.length; x++) {
    typeof family1[i].adress[x] == "number" && contador++;
  }
  // aqui creamos un objeto al cual inyectare al array familyContadorCheck
  
  const person = {
    name: family1[i].name,
    contador,
    CP: contador == 0 ? "le falta el CP" : "NO le falta el CP",
  };

  // le meto el objeto person a el array
  
  familyContadorCheck.push(person);
}

console.log(familyContadorCheck);
const saludos = () => {
for (i = 0; i < 10; i++){
    console.log('Hola ', i)
}
}
saludos()

const alimentos = ["Tomate", "Lechuga", "Pan", "Galletas", "Agua"]

for (let i = 0; i < alimentos.length; i++) {
  const alimento = alimentos[i]
  console.log(alimento)
  //ARRANCA EL BUCLE
  //i=0 -> i < 5 -> const alimento = alimentos[0] -> "Tomate"
  //++
  //i=1 -> i < 5 -> const alimento = alimentos[1] -> "Lechuga"
  //++
  //i=2 -> i < 5 -> const alimento = alimentos[2] -> "Pan"
  //++
  //i=3 -> i < 5 -> const alimento = alimentos[3] -> "Galletas"
  //++
  //i=4 -> i < 5 -> const alimento = alimentos[4] -> "Agua"
  //++
  //i=5 -> i < 5 -> NO SE CUMPLE, SE ROMPE EL BUCLE
}

const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

for (let i=0; i < diasSemana.length; i++){
    const diaSemana = diasSemana[i]
    console.log(diaSemana)
}

//Version sin mirar. 
 const members1 = ['Miercoles', 'Fetido', 'Morticia', 'Gomez']
 const familyMembers = []

 for (let i=0; i < members.length; i++) {
     console.log(members[i], ' Addams')
 }

//Version apuntes
const members = ["Miercoles", "Fetido", "Morticia", "Gomez", "Cosa"]
 const addamsFamily = []

 for (let i = 0; i < members.length; i++) {
   const member = members[i]
   const fullName = member + " Addams"
   addamsFamily.push(fullName)
 }

 console.log(addamsFamily)

const numbers = [1, 2, 3, 4, 5, 6]

 for (let i = 0; i < numbers.length; i++) {   //Aqui inicializas el bucle
   const number = numbers[i]                  //Aqui creas la variable donde se guardara cada iteracion dentro del array numbers
   const result = number * 2                  //Aqui creas la variable result, que guardará la operación number (cada numero del array, durante la iteracion) multiplicado por dos
   console.log(result)                        //Aqui muestras por consola el resultado. 
 }

const personas = [
    {
      name: "Pepe",
      age: 28,
    },
    {
      name: "Jose",
      age: 33,
    },
    {
      name: "Maria",
      age: 17,
    },
  ]
  
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i]
    if (persona.age < 18) {
      console.log(persona.name + " es menor de edad")
    } else {
      console.log(persona.name + " es mayor de edad")
    }
  }
  
  //Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

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

//Variación usando ternario. 
function checkAgeTernario() {
  for (let i = 0; i < users.length; i++) {
    const usuario = users[i]
    usuario.years < 18 ? console.log(`El usuario ${usuario.name} es menor de edad`) : console.log(`El usuario ${usuario.name} es mayorcito ya`)
  }
} 
checkAgeTernario()

//Variacion usando for...of//  //Nota: No consigo que este ejercicio funcione. Explicación en la linea que ejecuta la función
function CheckAgeForOf(users) {
  for (let user of users){
    const edad = user.age
    if (edad < 18) {
      console.log(`Este usuario: ${user} es menor de edad`)
    } else {
      console.log(`Este usuario: ${user} es mayor de edad`)
    }
  }
}
CheckAgeForOf(users)  // Me da como resultado 'Este usuario: [object Object] es mayor de edad' repetido tantas veces como objetos hay dentro del array users.


////FOR...OF////
////Sirve para elementos iterables: string, set, arguments, array////
 const movies = ["Batman", "Dune", "Titanic", "Babylon"]

// //Por cada movie en movies -> console.log(movie)
for (let movie of movies) {
   const quote = "Pelicula: " + movie
   console.log(quote)
 }

 for (let movie of movies){
  const declaracion = 'Esto de aquí es una pelicula: ' + movie
  console.log(declaracion)
 }
//Prueba 1
 const listaUsuariosAdmitidos = ['Pepe', 'Juan', 'Paco', 'Emilio', 'Navarro', 'Aguijón Fernandez']
 for (let usuario of listaUsuariosAdmitidos){
  const saludo = 'Buenos días, ' + usuario
  console.log(saludo)
 }
//Prueba 2
 const arrayUsuariosYEdades = [
  {
    Nombre: 'Pepe',
    Edad: 58
  },
  {
    Nombre: 'Juan',
    Edad: 37
  },
  {
    Nombre: 'Paco',
    Edad: 46
  },
  {
    Nombre: 'Emilio el Robot',
    Edad: 190
  },
  {
    Nombre: 'Navarro',
    Edad: 30
  }
 ]
 for (let user of arrayUsuariosYEdades){
  const nombre = user[i]
  const edad = user.Edad
  console.log(`El usuario ${nombre} tiene ${edad} años`)
 }
//El resultado es un print por cada usuario que dice 'El usuario undefined tiene (la edad de cada usuario) años'. Solo acierta en presentar la edad de cada usuario del array. A lo mejor for...of no sirve con arrays de objetos. 

//Prueba 3, sin mirar. 
const arrayRankingCoches = ['Ford Mustang Fastback 1969', 'Dodge Charger', 'Pontiac Firebird from Smokey And The Bandit', 'Little Red Corvette', 'Ferrari Daytona-Spider']

for (let car of arrayRankingCoches) {
  const lineaPrint = `Uno de mis coches favoritos es el ${car}`
  console.log(lineaPrint)
}


//Prueba 4, sin mirar.
const unknownPleasures = ['1.Disorder', '2.Day of the Lords', '3.Candidate', '4.Insight', '5.New Dawn Fades', '6.Shes lost Control', '7.Shadowplay', '8.Wilderness', '9.Interzone', '10.I remember nothing']  
console.log('El disco "Unknown Pleasures" de la banda "Joy Division" contiene las siguientes canciones: ')
for (let song of unknownPleasures){
  console.log(song)
}



////FOREACH////
////Para usar con arrays////

movies.forEach((movie, i) => console.log(movie, i))

unknownPleasures.forEach((i, song) => console.log(i, song))

arrayRankingCoches.forEach((car, i) => console.log(`El coche ${car} tiene la posicion ${i}`))
arrayRankingCoches.forEach((car, i) => console.log(`El coche ${car} tiene la posicion: `, i))

const floodLand = ['Dominion/Mother Russia', 'Flood I', 'Lucretia My Reflection', '1959', 'This Corrosion', 'Flood II', 'Driven Like The Snow', 'Never Land (a fragment)']
console.log("El Disco 'Floodland' de la banda 'Sisters of Mercy' contiene las siguientes canciones: ")
floodLand.forEach((song, i) =>  console.log(i, song))

const moreBounceToTheOunce = ['More Bounce To The Ounce', 'Dance Floor (Part I)', 'Doo Wah Ditty(Blow That Thing)', 'I Can Make You Dance (Part I)', 'Computer Love', 'Do It Roger', 'HeartBreaker (Part I)', '(Everybody) Get Up', 'Slow And Easy', 'I Want To Be Your Man']
console.log("El Disco 'More Bounce To The Ounce, & Other Hits' de la banda 'Zapp & Roger' contiene las siguientes canciones: ")
moreBounceToTheOunce.forEach((song, i) => console.log(i, ":", song))

////FORIN//// 
////Sirve para recorrer un solo objeto. Algo más complejo, como un array de objetos, no funciona////

const character = {
  name: "Paco",
  age: 87,
  city: "Madrid",
}


for (let key in character) {
  console.log("La clave " + key + " tiene como valor " + character[key])
}

const paladinALaTaza = {
  nombre: 'Sir Lance-a-Lot',
  edad: 33,
  ataque: 90,
  magia: 70,
  defensa: 70,
  class: 'Paladin',

}

for (let key in paladinALaTaza){
  console.log('El atributo ' + key + ' tiene como valor ' +paladinALaTaza[key])
}

const falloutCharacter = {
  name: 'The Courier',
  strength: 7,
  perception: 6,
  endurance: 5,
  charisma: 8,
  intelligence: 6,
  agility: 5,
  luck: 7
}

for (let key in falloutCharacter){
  console.log(`El atributo ${key} tiene un valor de: ${falloutCharacter[key]}`)
}

////WHILE////
let num = 0

while (num < 5) {
  num++
  console.log(num)
}

