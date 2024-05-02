const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    const screenWidth = process.stdout.columns;
    const start = Math.floor((screenWidth - frase.length) / 2);
    console.log(' '.repeat(start > 0 ? start : 0) + frase);
    rl.close();
});
