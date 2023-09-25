function mostrarMedia() {
  // Obtener los valores ingresados por el usuario
  var valor1 = parseInt(document.getElementById("valor2_1").value);
  var valor2 = parseInt(document.getElementById("valor2_2").value);
  var valor3 = parseInt(document.getElementById("valor2_3").value);
  var valor4 = parseInt(document.getElementById("valor2_4").value);
  var valor5 = parseInt(document.getElementById("valor2_5").value);
  var valor6 = parseInt(document.getElementById("valor2_6").value);
  var valor7 = parseInt(document.getElementById("valor2_7").value);
  var valor8 = parseInt(document.getElementById("valor2_8").value);
  var valor9 = parseInt(document.getElementById("valor2_9").value);
  var valor10 = parseInt(document.getElementById("valor2_10").value);
  var suma = 0;

  // Crear un arreglo con los valores ingresados
  var miArreglo = [
    valor1,
    valor2,
    valor3,
    valor4,
    valor5,
    valor6,
    valor7,
    valor8,
    valor9,
    valor10,
  ];
  
  // Obtener el elemento HTML donde queremos mostrar los valores
  var resultadoDiv = document.getElementById("eje2");

  // Construir una cadena de texto con los valores del arreglo
  var resultadoTexto = "media de el arreglo: ";

  for (var i = 0; i < miArreglo.length; i++) {
    suma += miArreglo[i];

  }

  // Mostrar la cadena de texto en la página HTML
  resultadoDiv.textContent = resultadoTexto + suma/miArreglo.length;
}
