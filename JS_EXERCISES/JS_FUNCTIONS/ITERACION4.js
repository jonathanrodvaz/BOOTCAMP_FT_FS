/**Iteración #4: Calcular el promedio**
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let suma = 0;
  param.forEach(
    numero=>{
      suma += numero
    }
  )
  return suma /= param.length;
}

console.log(average(numbers))
