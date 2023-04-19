//**Iteration #8: Contador de repeticiones**

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function contadorRepeat (array) {
  let arrayVuelta = [];
  let arrayNoRepetidos = [];
  for (palabra of array){
    if (!arrayNoRepetidos.includes(palabra)) {
      arrayNoRepetidos.push(palabra)
    }
  }
  arrayNoRepetidos.forEach((nombre, index) => {
    let acc = 0;
    for (i = 0; i < counterWords.length; i++) {
      if( nombre == counterWords[i]) {
        acc++
      }
    }
    arrayVuelta.push({
      trueName: nombre,
      puesto: acc,
    })
  }) 
  console.log(arrayVuelta)
}

let resultado = contadorRepeat(counterWords)
console.log(resultado)

