
function analizarPromedio (nota1 , nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio >= 3.0 ? ('El promedio es ' + promedio  + ' ¡Felicidades, has aprobado!') : ('El promedio es ' + promedio +  ', lo siento, no has aprobado.');
}

const calificacion1aux = prompt("Ingresa la primera calificación");
const calificacion2aux = prompt("Ingresa la segunda calificación");
const calificacion3aux = prompt("Ingresa la tercera calificación");

const primeraCalificacion = parseFloat(calificacion1aux);
const segundaCalificacion = parseFloat(calificacion2aux);
const terceraCalificacion = parseFloat(calificacion3aux);


const analisisDelPromedio= analizarPromedio(primeraCalificacion , segundaCalificacion , terceraCalificacion);
console.log(analisisDelPromedio);

//Obtengo la etiqueta P que esta en el html por medio del id 'resultadoComparacion'
const p = document.getElementById('resultadoComparacion');

// Asignamos al atributo textContent de la etiqueta P, el resultado de la comparacion
p.textContent = analisisDelPromedio;   


  

    
