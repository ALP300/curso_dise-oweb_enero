//Ejercicio 4: Generar múltiplos de un número entre 1 y 100
//Descripción: Pide un número al usuario y 
//muestra todos sus múltiplos entre 1 y 100.

const num= parseInt(prompt("Ingresa un número: ")); //7
for (let i=1; i<=100;i++){
    if(i%num===0){
        console.log(i)
    }
}