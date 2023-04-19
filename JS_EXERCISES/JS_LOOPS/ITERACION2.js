////Iteración #2: Condicionales avanzados////


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