const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let contador = 0;

const obtenerFrase = () => {
    rl.question('Introduce una frase (escribe "salir" para finalizar): ', (frase) => {
        if (frase.toLowerCase() === 'salir') {
            console.log(`Número total de frases introducidas: ${contador}`);
            rl.close();
        } else {
            contador++;
            obtenerFrase();
        }
    });
};
obtenerFrase();