function posicionArr() {
  var ArrString = document.getElementById("arr4").value;
  var Elemento = document.getElementById("elemento4").value;
  var resultadoArr = document.getElementById("eje4");
  var resultadoArr_1 = document.getElementById("eje4_1");

  var Arr = ArrString.split(",");
  var index = [];

  resultadoArr.innerHTML =
    "El arreglo es: [" + Arr + "]" + "<br>El elemento a buscar es: " + Elemento;

  if (Arr.includes(Elemento)) {
    for (var i = 0; i < Arr.length; i++) {
      if (Arr[i] === Elemento) {
        index.push(i);
      }
    }

    resultadoArr_1.innerHTML =
      "El elemento esta en la(s) Posicion(es): " + index;
  } else {
    resultadoArr_1.innerHTML =
      Elemento + " no es un elemento que se encuentre en el arreglo";
  }
}
