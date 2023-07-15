//Actividad

// a) Acceso por etiqueta:
// Utiliza JavaScript para acceder a todos los elementos <p> en la página y muestra la colección de elementos en la consola del navegador.

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

// b) Acceso por clase:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y muestra la colección de elementos en la consola del navegador.
const clase1 = document.querySelectorAll("clase1");
console.log(clase1);

// c) Acceso por id:
// Utiliza JavaScript para acceder al elemento con el id "id2" y muestra el elemento en la consola del navegador.
const id2 = document.getElementById("id2");
console.log(id2);

// d) Acceso por selector de CSS:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y al elemento con el id "id2" utilizando un selector de CSS combinado. Muestra la colección de elementos en la consola del navegador.

const lista = document.querySelectorAll(".clase1, #id2");
console.log(lista);

// Recuerda utilizar la consola del navegador para ver los resultados de cada tarea. ¡Diviértete explorando el acceso al DOM!
