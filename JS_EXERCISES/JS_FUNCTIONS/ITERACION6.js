/***Iteración #6: Valores únicos**
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/
const duplicates = [                  
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
      
function removeDuplicates(list) {
  let array = [];
  list.forEach((food) => {
    if (!array.includes(food)){
      array.push(food);
    }
  });
  console.log(array);
}

removeDuplicates(duplicates);

//Version 2//

const eliminarDuplicados = (list) => {
  let array = []
  list.forEach((food) => {
    !array.includes(food) ? array.push(food) : null
  }); 
  console.log(array)
}

eliminarDuplicados(duplicates);


  //   const removeDuplicates = (list) => {
  //     let array = [];
  //     list.forEach((food) => {
  //         if(!array.includes(food)){
  //             array.push(food);}
  //     });
  // return array;
  //   }
  //   console.log(removeDuplicates(duplicates));