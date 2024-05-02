const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (first) => {
    rl.question('Introduce el segundo número: ', (second) => {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        rl.question('Elige una opción (1: suma, 2: resta, 3: multiplicación, 4: división): ', (option) => {
            switch (option) {
                case '1':
                    console.log(`Suma: ${num1 + num2}`);
                    break;
                case '2':
                    console.log(`Resta: ${num1 - num2}`);
                    break;
                case '3':
                    console.log(`Multiplicación: ${num1 * num2}`);
                    break;
                case '4':
                    if (num2 !== 0) {
                        console.log(`División: ${num1 / num2}`);
                    } else {
                        console.log('No se puede dividir por cero.');
                    }
                    break;
                default:
                    console.log('Opción no válida.');
            }
            rl.close();
        });
    });
});
