let peso = prompt("escribe tu peso en kilogramos, solo el numero");
let altura = prompt("escribe tu altura");
let imc = peso / (altura * altura);
let resultadoFinal = parseFloat(imc.toFixed(2));

if (resultadoFinal < 18.5) {
  document.write("tu imc es" + resultadoFinal + " , tienes bajo peso .");
} else if (18.5 <= resultadoFinal >= 18.5 && resultadoFinal < 25) {
  document.write("tu imc es " + resultadoFinal + " , tienes peso normal .");
} else if (resultadoFinal >= 25 && resultadoFinal < 30) {
  document.write("tu imc es " + resultadoFinal + " , tienes sobre peso .");
} else {
  document.write("tu imc es " + resultadoFinal + " , tienes obesidad .");
}
