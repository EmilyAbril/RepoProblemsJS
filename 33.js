const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];
let i = 0;

const leerNota = () => {
    if (i < 10) {
        rl.question(`Introduce la calificación de la asignatura ${i + 1}: `, (nota) => {
            notas.push(parseFloat(nota));
            i++;
            leerNota();
        });
    } else {
        const media = notas.reduce((acc, cur) => acc + cur, 0) / notas.length;
        console.log(`La media de las calificaciones es: ${media.toFixed(2)}`);
        rl.close();
    }
};

leerNota();
