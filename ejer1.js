//Ejercicio 1: Imprimir los números del N al 1
//Descripción: Pide al usuario un número N y 
// muestra en consola los números desde N 
// hasta 1 en orden descendente.

let n= parseInt(prompt("Ingresa un número N: "));
for(let i=n; i>=1; i--){
    console.log(i)
}