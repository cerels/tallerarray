function generarArray() {
  var Num = parseInt(document.getElementById("N").value);
  var resultado = document.getElementById("eje5");
  Arr = [];
  if (Num % 2 !== 0) {
    for (var i = 0; i < Num; i++) {
      Arr.push(Math.floor(Math.random() * 100));
    }
    
    resultado.innerHTML = "Para el array: "+ Arr + " el valor que ocupa el centro del array es: " + Arr[(Num-1)/2];
    
  } else {
    resultado.innerHTML = "No ingreso un numero impar, intente de nuevo";
  }
}
