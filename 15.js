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
        let countPares = 0;
        let sumaImpares = 0;
        for (let i = start; i <= end; i++) {
            console.log(i);
            count++;
            if (i % 2 === 0) {
                countPares++;
            } else {
                sumaImpares += i;
            }
        }
        console.log(`Total números: ${count}, Pares: ${countPares}, Suma de impares: ${sumaImpares}`);
        rl.close();
    });
});
