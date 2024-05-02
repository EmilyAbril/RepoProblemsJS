const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (phrase) => {
    rl.question('¿Qué letra deseas contar en la frase?: ', (letter) => {
        const count = phrase.split('').filter(char => char === letter).length;
        console.log(`La letra '${letter}' aparece ${count} veces.`);
        rl.close();
    });
});