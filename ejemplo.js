// anatomia de una variable

/* 
    let -> Se utiliza para declarar una variable que puede ser reasignada
    const -> Se utiliza para declarar una variable que no puede ser reasignada
    var -> Se utiliza para declarar una variable que puede ser reasignada NUNCA USAR VAR XD
*/

let nombre = "Pablo"; 
let apellido = "Castillo";
const edad = 23;

console.log(nombre, apellido, edad);

// Tipos de datos primitivos

// Number: Numeros enteros o decimales

const num = 10;
const numero = Infinity;
const numero2 = -Infinity;
const numero3 = NaN;

console.log(num);
console.log(numero);
console.log(numero2);
console.log(numero3);

// String: Cadena de texto

let saludo = "Hola";
let despedida = "Adios";
let cadena = `Hola, soy ${nombre} ${apellido} y tengo ${edad} años`;

console.log(cadena);

// Boolean: Verdadero o Falso

let verdadero = true;
let falso = false;

console.log(verdadero);
console.log(falso);

// Null: Valor nulo

let nulo = null;

console.log(nulo);

let nombreCliente;

// Tipo de dato no primitivo

// Object: Son colecciones de datos

let estudiante = {
    nombreCompleto: "Pablo Castillo",
    edad: 23,
    carrera: "IECI",
    universidad: "UBB"
}

console.log(estudiante);
console.log(estudiante.nombreCompleto);
console.log(estudiante.edad);
console.log(estudiante.carrera);
console.log(estudiante.universidad);

// Array: Son bloues de codigo que pueden ser de cualquier tipo

let frutas = ["manzana", "pera", "platano", "naranja"];

console.log(frutas[2]);
console.log(typeof frutas); //object
console.log (frutas instanceof Array); //true

// Fuction: Son bloques de codigo que se pueden reutilizar

function suma(a, b){
    return a + b;
}
console.log(suma(5, 5)); // 10
console.log(typeof suma); //function

// Date: Son objetos que representan fechas

let fecha = new Date();
console.log(fecha);

// Estructuras de control

// if - else

let edad1 = 20;
let edad2 = "20";

if (edad1 >= 18){
    console.log("Eres mayor de edad");
}else {
    console.log("Eres menor de edad");
}

if (edad1 === edad2) {
    console.log("Son iguales");
}else {
    console.log("No son iguales");
}

// Creación Strings y Concatenación

let nombre1 = "Pablo";
let apellido1 = "Castillo";
let apellido2 = "Fernandez";

// Concatenación con concat()

const hobbie1 = "Programar";
const hobbie2 = "Dormir";
const hobbie3 = "Comer";
const hobbies = "Mis hobbies son: ".concat(hobbie1, ", ", hobbie2, " y ", hobbie3);
console.log(hobbies);

// Metodo length

console.log(hobbie2.length);
console.log(hobbies.length);

// StartsWith() y endsWith()

let saludito = "Hola, soy Pablo";
console.log(saludito.startsWith("Hola"));
console.log(saludito.startsWith("hola"));
console.log(saludito.endsWith("Pablo"));
console.log(saludito.endsWith("pablo"));

// toUpperCase() y toLowerCase()

console.log(saludito.toUpperCase()); // Se transforma a mayusculas

console.log(saludito.toLowerCase()); // Se transforma a minusculas

// Metodos de los arrays
// push() y pop()

let arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);
arreglo.push(6); // para añadir ese valor 6

console.log(arreglo);

arreglo.pop ();
console.log(arreglo);