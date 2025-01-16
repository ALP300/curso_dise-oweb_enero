let n = parseInt(prompt("Ingrese un número para su asteroide"));

for (let i = 1; i <= n; i++) {
    let filas = ``;
    for (let j = 1; j <= i; j++) { 
        filas += `*`;
    }
    console.log(filas);
}