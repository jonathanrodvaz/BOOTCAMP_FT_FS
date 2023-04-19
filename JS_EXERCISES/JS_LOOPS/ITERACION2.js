////Iteración #2: Condicionales avanzados////
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved 
//a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
//Para poder recorrer un array con objetos deberás, recorrerlo con un array y por cada posición añadir una nueva propiedad a cada objeto.
// Pista: ( para añadir la propiedad dentro del objeto )
//A la hora de recorrer un array y poder meter en el objeto una nueva propiedad
//deberás asignar a ese array por indice una propiedad tal que así
//nombreLista[indice].nombrePropiedad = valor;

// objeto.isApproved =true


// //donde objeto es el objeto que recorremos (cada alumno en nuestro caso)

// //isApproved --- es la propiedad queremos definir o modificar 

// // true ---- es el valor que le asignamos a la propiedad 


// /////---------Ejemplo-----------

// colegios = [
//     {name: 'Pilarica', Clase1: 100, Clase1: 80, Clase1: 10}, 
// 		{name: 'Lorica', Clase1: 89, Clase1: 50, Clase1: 40},	
// ]

// /* recorremos el array de objetos con un forEach para quedarnos en cada uno
// de los elementos*/

// colegios.forEach((colegios)=>{
// 	//le añadimos la propiedad nueva llamada "pintada" y el valor = true
// 	colegios.pintada = true;
// })

// console.log(colegios);

// // -------- CONSOLE--------------

// { name: 'Pilarica', Clase1: 10, pintada: true },
// { name: 'Lorica', Clase1: 40, pintada: true }



const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

function checkAprobado () {
    for (let i = 0; i < alumns.length; i++) {
           const estudiante = alumns[i]
           if (estudiante.T1 == true || estudiante.T2 == true && estudiante.T3 == true) {
             console.log(estudiante.name + " esta aprobado")
           } else {
            console.log(estudiante.name + " esta suspendido")
           }
         }     
        }

checkAprobado() 

//Version 2//

function comprobarAprobado () {
    for (let i = 0; i < alumns.length; i++) {
        const estudiante = alumns[i]
        estudiante.T1 == true || estudiante.T2 == true && estudiante.T3 == true ? console.log(estudiante.name + ' ha aprobado') : console.log(estudiante.name + ' ha suspendido')
    }
}
comprobarAprobado() 