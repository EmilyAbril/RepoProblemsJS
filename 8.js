const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptInput() {
    rl.question('Introduce S o N: ', (input) => {
        const upperInput = input.toUpperCase(); 
        if (upperInput === 'S' || upperInput === 'N') {
            console.log(`Entrada aceptada: ${upperInput}`);
            rl.close(); 
        } else {
            console.log('Error: Solo se permite introducir S o N.');
            promptInput(); 
        }
    });
}
promptInput();