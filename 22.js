const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    for (let i = 0; i < 5; i++) {
        console.log(' '.repeat(i * 4) + frase);
    }
    rl.close();
});

