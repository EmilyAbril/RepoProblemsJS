const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

rl.question('Introduce un número para calcular su factorial: ', (num) => {
    const result = factorial(parseInt(num));
    console.log(`El factorial de ${num} es ${result}`);
    rl.close();
});
