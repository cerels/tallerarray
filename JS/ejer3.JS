function mostrarFuncion() {
  var valor1 = parseInt(document.getElementById("tam").value);
  var valor2 = parseInt(document.getElementById("fun").value);
  var resultadoDiv = document.getElementById("eje3");
  var resultadoTexto = "Arreglo: ";
  
  var miArreglo = [];
  
  for (var i = 0; i < valor1; i++) {
    miArreglo[i] = valor2 * (i + 1);

  }
  
  // Crear una cadena que contenga los elementos del arreglo
  var arregloString = miArreglo.join(", "); // Convierte el arreglo en una cadena separada por comas
  
  resultadoDiv.textContent = resultadoTexto +  arregloString;
  
}
