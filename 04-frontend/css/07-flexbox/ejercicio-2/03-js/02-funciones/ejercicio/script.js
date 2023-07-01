//+ sumar
//- restar
// / dividir
//* multiplicar

function sumar() {
  var numero1 = parseFloat(prompt("cual es tu numer?"));
  var numero2 = parseFloat(prompt("cual es tu numero?"));

  var resultado = numero1 + numero2;

  document.write("la suma es " + resultado);
  document.write("finalizo la aplicacion");
}

sumar();
