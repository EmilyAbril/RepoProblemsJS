const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const aRomano = (numero) => {
    const valores = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    let romano = '';
    for (const [valor, simbolo] of valores) {
        while (numero >= valor) {
            romano += simbolo;
            numero -= valor;
        }
    }
    return romano;
};

rl.question('Introduce un número menor de 5000: ', (num) => {
    const numero = parseInt(num);
    if (numero >= 1 && numero < 5000) {
        console.log(`Número romano: ${aRomano(numero)}`);
    } else {
        console.log('El número debe ser menor de 5000 y mayor que 0.');
    }
    rl.close();
});
