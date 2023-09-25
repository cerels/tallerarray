function matrix() {
  var Num = parseInt(document.getElementById("matrix").value);

  Arr = [];

  for (var i = 0; i < Num; i++) {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    var num3 = num1 + num2;
    var array = [num1, num2, num3];
    Arr.push(array);
  }

  // Display the arrays in HTML
  var matrixDisplay = document.getElementById("eje6");
  matrixDisplay.innerHTML = ""; // Clear previous content

  for (var i = 0; i < Arr.length; i++) {
    var array = Arr[i];
    var num1 = array[0];
    var num2 = array[1];
    var num3 = array[2];

    var equation = num1 + " + " + num2 + " = " + num3;
    var equationElement = document.createElement("p");
    equationElement.textContent = equation;

    matrixDisplay.appendChild(equationElement);
  }
}
