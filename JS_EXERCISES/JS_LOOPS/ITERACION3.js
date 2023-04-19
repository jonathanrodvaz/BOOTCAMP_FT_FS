////**Iteración #3: Proba**Iteración #3: Probando For...of**////
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
// Puedes usar este array:
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (paises of placesToTravel) {
    console.log(paises)
}

//Version 2, usando solo el for//
for (i=0; i<placesToTravel.length; i++){
    console.log(placesToTravel[i])
}