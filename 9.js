const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (input) => {
    const numero = parseInt(input);
    if (isNaN(numero)) {
        console.log('Por favor, introduce un número válido.');
    } else {
        if (numero < 0) {
            console.log('El número es negativo');
        } else {
            console.log('El número es positivo');
        }
    }
    rl.close();
});
