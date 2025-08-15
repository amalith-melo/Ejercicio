
let mensajeResultado = "defecto";
const edad1aux = prompt("Por favor, ingresa la edad de la primera persona:");
const edad1 = parseInt(edad1aux);


const edad2aux = prompt("Por favor, ingresa la edad de la segunda persona:");
const edad2 = parseInt(edad2aux);

compararEdades(edad1 , edad2)
 

//Obtengo la etiqueta P que esta en el html por medio del id 'resultadoComparacion'
const p = document.getElementById('resultadoComparacion');

// Asignamos al atributo textContent de la etiqueta P, el resultado de la comparacion
p.textContent = mensajeResultado; 

const compararEdades =( edadx , edady) => {
   
console.log(edadx , edady , edadx > edady)

    if (edadx > edady) {
        console.log("aqui1")
        mensajeResultado= "Persona 1 es mayor";
    } else if (edadx < edady) {
        console.log("aqui2")
        mensajeResultado= "Persona 2 es mayor";
    } else {
        mensajeResultado= "Ambas personas tienen la misma edad";
    }
    console.log(mensajeResultado);
    console.log("¡Comparación completada!");

}





