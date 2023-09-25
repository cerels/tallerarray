function generarTablas() {
    var numeroLimite = parseInt(document.getElementById("tablas").value);
    var resultado = "<h4>Tablas de Multiplicar hasta " + numeroLimite + "</h4>";

    // Validar si el número ingresado es 10 o menos
    if (numeroLimite <= 10) {
        // Crear una matriz para las tablas de multiplicar hasta n*10
        for (var i = 1; i <= numeroLimite; i++) {
            resultado += "<h5>Tabla del " + i + "</h5>";
            resultado += "<table border='1'>";

            for (var j = 1; j <= 10; j++) {
                resultado += "<tr>";
                resultado += "<td>" + i + " x " + j + "</td>";
                resultado += "<td>" + (i * j) + "</td>";
                resultado += "</tr>";
            }

            resultado += "</table>";
        }
    } else {
        // Crear una matriz para las tablas de multiplicar hasta n*n
        for (var i = 1; i <= numeroLimite; i++) {
            resultado += "<h5>Tabla del " + i + "</h5>";
            resultado += "<table border='1'>";

            for (var j = 1; j <= i; j++) {
                resultado += "<tr>";
                resultado += "<td>" + i + " x " + j + "</td>";
                resultado += "<td>" + (i * j) + "</td>";
                resultado += "</tr>";
            }

            resultado += "</table>";
        }
    }

    document.getElementById("eje7").innerHTML = resultado;
}
