let numero = prompt("Ingresa un número:");
let suma = 0;
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]);
    }
console.log(suma);