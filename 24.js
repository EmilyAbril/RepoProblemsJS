const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const esPrimo = (numero) => {
    if (numero < 2) return false;
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
};

rl.question('Introduce un número para comprobar si es primo: ', (num) => {
    const numero = parseInt(num);
    console.log(`${numero} ${esPrimo(numero) ? 'es' : 'no es'} primo`);
    rl.close();
});
