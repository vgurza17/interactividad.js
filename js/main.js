let nombre = "Valeria" ;
let edad = 23;
let esMayorDeEdad = edad >= 18;
const TAU = Math.PI * 2;

console.log("Hola " + nombre + " tienes " + edad + " años y " + esMayorDeEdad );

function saludar(nombre="Mundo") {
    alert ("Hola " + nombre);
}

saludar();
saludar("°-°");
saludar(nombre);