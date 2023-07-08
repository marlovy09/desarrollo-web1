const numeros = [5, 2, 1, 9, 8, 4, 7];
let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  }
}

console.log("El número más grande es:", maximo);