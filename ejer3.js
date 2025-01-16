//Ejercicio 3: Contar números pares e impares entre dos números
//Descripción: Pide al usuario dos números A y B (donde A < B)
//  y cuenta cuántos números son pares y cuántos impares en ese rango.

const A= 6
const B= 20
let pares=0
let impares=0
for(let i=A; i<=B;i++){
    if(i%2==0){
        pares++;
    }else{
        impares++
    }
}
console.log("Los pares son: "+pares)
console.log("Los impares son: "+impares)