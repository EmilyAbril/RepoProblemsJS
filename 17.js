const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (first) => {
    rl.question('Introduce el segundo número: ', (second) => {
        const start = Math.min(first, second);
        const end = Math.max(first, second);
        let count = 0;
        let sum = 0;
        for (let i = start; i <= end; i++) {
            if (i % 2 === 0) {
                console.log(i);
                count++;
                sum += i;
            }
        }
        console.log(`Cantidad de múltiplos de 2: ${count}, Suma de los múltiplos: ${sum}`);
        rl.close();
    });
});