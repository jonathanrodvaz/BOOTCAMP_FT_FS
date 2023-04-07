/*1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.*/
for ( i = 0; i <= 9; i++) {
    console.log(i);
  }

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/



/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/

let contandoOvejas = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < contandoOvejas.length; index++) {
  if(contandoOvejas[index] === 1) {
		console.log('Intentando dormir... 🐑 /  ')
	}
    if(contandoOvejas[index] === 2) {
        console.log('Intentando dormir...    / 🐑 ')

    }
    if(contandoOvejas[index] === 3) {
        console.log('Intentando dormir... 🐑 /  ')

    }
    if(contandoOvejas[index] === 4) {
        console.log('Intentando dormir...    / 🐑 ')

    }
    if(contandoOvejas[index] === 5) {
        console.log('Intentando dormir... 🐑 /  ')

    }
    if(contandoOvejas[index] === 6) {
        console.log('Intentando dormir...    / 🐑 ')

    }
    if(contandoOvejas[index] === 7) {
        console.log('Intentando dormir... 🐑 /  ')

    }
    if(contandoOvejas[index] === 8) {
        console.log('Intentando dormir...    / 🐑 ')

    }
    if(contandoOvejas[index] === 9) {
        console.log('Intentando dormir... 🐑 /  ')

    }
    if(contandoOvejas[index] === 10) {
        console.log('!! Dormido !!')

    }
}
console.log(contandoOvejas);