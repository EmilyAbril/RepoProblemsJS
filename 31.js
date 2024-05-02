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

const factorial = (numero) => {
    return numero < 2 ? 1 : numero * factorial(numero - 1);
};

const tablaMultiplicar = (numero) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
};

rl.question('Introduce un número: ', (input) => {
    const numero = parseInt(input);
    console.log(`El número ${numero} ${esPrimo(numero) ? 'es' : 'no es'} primo.`);
    console.log(`Factorial de ${numero}: ${factorial(numero)}`);
    console.log(`Tabla de multiplicar del ${numero}:`);
    tablaMultiplicar(numero);
    rl.close();
});
