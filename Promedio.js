
  let analisisDelPromedio;
  const calificacion1aux = prompt("Ingresa la primera calificación");
    const calificacion2aux = prompt("Ingresa la segunda calificación");
    const calificacion3aux = prompt("Ingresa la tercera calificación");
    
    const primeraCalificacion = parseFloat(calificacion1aux);
    const segundaCalificacion = parseFloat(calificacion2aux);
    const terceraCalificacion = parseFloat(calificacion3aux);


function analizarPromedio () {

  promedio = (primeraCalificacion + segundaCalificacion + terceraCalificacion) / 3;

  if (promedio >= 3.0) {
    
    analisisDelPromedio= 'El promedio es ' + promedio  + ' ¡Felicidades, has aprobado!' 
  } else {
    
    analisisDelPromedio= 'El promedio es ' + promedio +  ' Lo siento, no has aprobado.'
  } 
  console.log(analisisDelPromedio);
}

analizarPromedio();

//Obtengo la etiqueta P que esta en el html por medio del id 'resultadoComparacion'
const p = document.getElementById('resultadoComparacion');

// Asignamos al atributo textContent de la etiqueta P, el resultado de la comparacion
p.textContent = analisisDelPromedio;


  

    
