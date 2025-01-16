let N = parseInt( prompt("Ingresa un numero N"));

for (let i=1; i<=N; i++){
    if (i % 2 !== 0 && i % 3 !== 0) {
        console.log(i);
    }
}