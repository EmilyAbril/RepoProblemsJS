const notas = [8, 7.5, 9, 6, 7, 8.5, 5, 9.5, 7, 8];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qué nota deseas buscar en la lista? ', (input) => {
    const nota = parseFloat(input);
    const encontrada = notas.includes(nota);
    console.log(encontrada ? `La nota ${nota} está en la lista.` : `La nota ${nota} no se encontró en la lista.`);
    rl.close();
});

