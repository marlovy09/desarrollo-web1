//indices 0 1 2 3
//const numeros = [10, 20, 30, 40];

//for (let index = 0; index < numeros.length; index++) {
//console.log(numeros[1]);
//}
// indices       0  1   2  3  4  5  6
//const numeros = [5, 7, 10, 4, 8, 9, 10];

//for (let index = 0; index < numeros.length; index++) {

// console.log();
//}

//let resultado = 0;
// indice        0  1   2  3  4  5   6
const numeros = [5, 7, 10, 4, 8, 9, 10];
for (let index = 0; index < numeros.length; index++)
  resultado += numeros[index];
console.log(resultado);

// for-in = accede a la propiedad/key
const carro = {
  // key: llave
  //value:valor
  llantas: 4,
  marca: "Renault",
  modelo: 2004,
};
// acceder a los valores  de un objeto
// carro["marca"]
// carro.marca
for (const propiedad in carro) {
  console.log(carro[propiedad]);
}
// for-of = accede al valor de la propiedad/value
//for (const iterator of object) {
}
