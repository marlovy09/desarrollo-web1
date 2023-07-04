const numeros = [1, 2, 3, 4, 5, 6];
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log("cantidad de numeros pares" + pares);
console.log("cantidad de numeros impares" + impares);
