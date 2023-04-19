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