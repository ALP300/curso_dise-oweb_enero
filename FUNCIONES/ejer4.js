//Ejercicio 4: Palíndromo
//Crea una función llamada esPalindromo que reciba 
// una palabra y devuelva true si es un palíndromo 
// (se lee igual al revés) o false en caso contrario.
function esPalindromo(palabra){
    const palabraLimpia= palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palabraInvertida= palabraLimpia.split('').reverse().join('');
    return palabraLimpia===palabraInvertida;
} 
console.log(esPalindromo('Jose'));

//anita lava la tina
//anitalavalatina
//['a','n","i","t","a","l","a","v"...]
//["v","a","l","a"...]
// valatina



//odranoeL