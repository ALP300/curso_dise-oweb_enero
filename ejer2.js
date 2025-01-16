//Ejercicio 2: Calcular el producto de los números del 1 al N
//Descripción: Pide un número N y calcula
//  el producto de todos los números entre
//  1 y N (es decir, el factorial de N).
//3! = 3*2*1
//10!= 10*9*...*1
const n= 4;
let producto=1;
for(let i=1; i<=n; i++){
    producto*=i;
}
console.log("El factorial es: "+producto)
//1*1= 1
//1*2= 2
//2*3= 6
//6*4= 24