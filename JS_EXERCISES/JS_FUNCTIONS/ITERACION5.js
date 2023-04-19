/**Iteración #5: Calcular promedio de strings**
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function contadorPalabras(param) {
  let acc = 0;
param.forEach(element => {
  if (typeof element == 'number') {
    acc += element;
  } else {
    acc += element.length;
  }
})
console.log(acc)
}
contadorPalabras(mixedElements)

//Version 2//

const wordCounter = (param) => {
  let acc = 0;
  param.forEach(element => {
    typeof element == 'number' ? acc += element : acc += element.length;

  })
  console.log(`Este es el resultado: ${acc}`) 
}

wordCounter(mixedElements)