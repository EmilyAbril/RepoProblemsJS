const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce un número: ', num => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
    readline.close();
});