// Cuales son las formas para acceder a los elementos del DOM
//document.querySelector("")
// 1. =getEledmentById -> devuelde un objeto del html que contiene un id//
// ejemplo 1
/*const lorena = document.getElementById("lorena");
// 2. getElementsByClassName = Obtener elementos html por su Class
// ejemplo 1
document.getElementsByClassName("nombre");
// ejemplo 2
//const dairon = document.getElementsByClassName("estudiante");
// 3. get.elementsByTageName -> Obtener lista de elementos html por el nombre de la etiqueta
// ejemplos
const listaestudiantes = document.getElementsByTagName("estudiante");
// ejemplo 2
const titulo = document.getElementsByTagName("h1");
// document.querySelector -> retornar el primer elemento que coincida con nuestra lista-busqueda
// ejemplos de uso
//document.querySelector("#firstName")
const lorenaquerySelector = document.querySelector("#lorena");
//document.getquerySelectorAll -> retornar todos los elementos que coincidan con nuestra lista
const dairon = document.querySelectorAll("");*/

// nodelist y array diferencias

// array.from() -> crea una nueva instancia  de un array a partir de un objeto literable

// parentElement.append()-> es la evolucion de de appendChild, permite agregar del contendor padre
// obtengo el elemnto padre
const animales = document.querySelector("#animales");
//crear un nuevo elemento
const perro = document.createElement("li");
// crear el texto que despues se agrega a perro

// para poder agregar un nuevo elemento con el metodo 3 tienen que ser hijos directos
