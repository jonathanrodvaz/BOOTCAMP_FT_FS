//**Iteración #1: Mix for e includes**
//Dado el siguiente javascript usa forof para recorrer el array de películas, 
//genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. 
//Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
{title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
{title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
{title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
{title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const generoComedia = []
const generoAventura = []
const generoAccion = []
const generoAnimacion = []
const generoThriller = []


 function movieSearcher(param) {
     for(i=0; i<param.length; i++){
         const pelicula = param[i]
         
         for (genero in pelicula){
            const genre = pelicula.categories
             
             if (genre.includes('comedia')) {
                 generoComedia.push(pelicula)
             } if (genre.includes('aventura')){
                generoAventura.push(pelicula)
                } if (genre.includes('acción')){
                    generoAccion.push(pelicula)
                } if (genre.includes('animación')){
                    generoAnimacion.push(pelicula)
                } if (genre.includes('thriller')) {
                    generoThriller.push(pelicula)
                }
         }
         console.log('Comedia: ', generoComedia);
         console.log('Aventura: ', generoAventura);
         console.log('Accion: ', generoAccion);
         console.log('Animacion: ', generoAnimacion);
         console.log('Thriller: ', generoThriller);
     }
 }

 movieSearcher(movies)

 