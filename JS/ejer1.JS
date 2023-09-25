function mostrarArreglo() {
    // Obtener los valores ingresados por el usuario
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);
    var valor4 = parseInt(document.getElementById("valor4").value);
    var valor5 = parseInt(document.getElementById("valor5").value);

    // Crear un arreglo con los valores ingresados
    var miArreglo = [valor1, valor2, valor3, valor4, valor5];

    // Obtener el elemento HTML donde queremos mostrar los valores
    var resultadoDiv = document.getElementById("eje1");

    // Construir una cadena de texto con los valores del arreglo
    var resultadoTexto = "Valores en el arreglo: ";

    for (var i = 0; i < miArreglo.length; i++) {
        resultadoTexto += miArreglo[i];

        // Agregar una coma y espacio después de cada valor, excepto el último
        if (i < miArreglo.length - 1) {
            resultadoTexto += ", ";
        }
    }

    // Mostrar la cadena de texto en la página HTML
    resultadoDiv.textContent = resultadoTexto;
}
