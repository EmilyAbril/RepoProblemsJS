const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número entre 0 y 10: ', (num) => {
    const numero = parseInt(num);
    if (numero >= 0 && numero <= 10) {
        for (let i = 0; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    } else {
        console.log('El número debe estar entre 0 y 10.');
    }
    rl.close();
});
