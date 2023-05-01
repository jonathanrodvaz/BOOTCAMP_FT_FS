//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div")
console.log(nuevoDiv)
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const template = `
<div>
    <p>
</div>
`
document.body.innerHTML = template;

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const dynamicDiv = () => {
    const divscontainer = document.querySelector(".div");
    for (let i = 1; i <= 6; i++) {
        divscontainer.innerHTML += `<p class="parrafo">${i}</>`
    }
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const soyDinamico = () => {
    return`
    <p>Soy dinámico!.</p>
    `
}

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const wubLubDub = () => {
    const wubwub = document.querySelector("#.fn-insert-here");
    wubwub.innerHTML = `Wubba Lubba dub dub`
}

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listaApps = () => {
    for (const app of apps) {
       listaApps.innerHTML += `
       <ul>
        <li>${app}</li>
       </ul>`
    }
}



//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here