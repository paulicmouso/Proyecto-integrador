function calcularTotal() {
  var cantEntradas,
      total,
      categoria,
      entradaEstudiante,
      entradaTrainee,
      entradaJr,
      general;

  console.log('entra a la funcion');
  cantEntradas = document.getElementById("inputCantidad").value;
  categoria = document.getElementById("inputCategoria").value;

  console.log('cant entradas ' + cantEntradas + 'categoria ' + categoria);

  entradaEstudiante = 200 - (200 * 80) / 100;
  entradaTrainee = 200 - (200 * 50) / 100;
  entradaJr = 200 - (200 * 15) / 100;
  general = 200;

  /* chek número ok*/
  if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) {
   
    if (categoria == "estudiante") {
      total = entradaEstudiante * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        'Total a Pagar: \u0024' + total;
    } else if (categoria == "trainee") {
      total = entradaTrainee * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        'Total a Pagar: \u0024' + total;
    } else if (categoria == "junior") {
      total = entradaJr * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        'Total a Pagar: \u0024' + total;
    } else if (categoria == "general") {
      total = general * cantEntradas;
      document.getElementById("importeTotal").innerHTML =
        'Total a Pagar: \u0024' + total;
    }
  } else {
    window.alert('Debe ingresar la cantidad de entradas en números enteros');
  }
}

function borrar() {
  document.getElementById('inputNombre').value = ' ';
  document.getElementById('inputApellido').value = ' ';
  document.getElementById('inputEmail').value = ' ';
  document.getElementById('inputCantidad').value = ' ';
  document.getElementById('inputCategoria').value = 'Estudiante';
  document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
}



