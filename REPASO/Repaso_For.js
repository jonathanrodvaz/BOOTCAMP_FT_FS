////FOR////
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
// const members = ['Miercoles', 'Fetido', 'Morticia', 'Gomez']
// const familyMembers = []

// for (let i=0; i < members.length; i++) {
//     console.log(members[i], ' Addams')
// }

//Version apuntes
// const members = ["Miercoles", "Fetido", "Morticia", "Gomez", "Cosa"]
// const addamsFamily = []

// for (let i = 0; i < members.length; i++) {
//   const member = members[i]
//   const fullName = member + " Addams"
//   addamsFamily.push(fullName)
// }

// console.log(addamsFamily)

const numbers = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < numbers.length; i++) {   //Aqui inicializas el bucle
//   const number = numbers[i]                  //Aqui creas la variable donde se guardara cada iteracion dentro del array numbers
//   const result = number * 2                  //Aqui creas la variable result, que guardará la operación number (cada numero del array, durante la iteracion) multiplicado por dos
//   console.log(result)                        //Aqui muestras por consola el resultado. 
// }

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