const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [];
const getNumber = (index) => {
    if (index > 5) {
        console.log(`Mayor: ${Math.max(...numbers)}`);
        console.log(`Menor: ${Math.min(...numbers)}`);
        rl.close();
    } else {
        rl.question(`Introduce el número ${index}: `, (num) => {
            numbers.push(parseFloat(num));
            getNumber(index + 1);
        });
    }
};
getNumber(1);
