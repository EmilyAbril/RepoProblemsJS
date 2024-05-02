const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
    const limit = parseInt(num);
    let count = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0) {
            console.log(i);
            count++;
        }
    }
    console.log(`Cantidad de múltiplos de 3: ${count}`);
    rl.close();
});
