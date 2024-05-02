const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showTime = () => {
    const now = new Date();
    console.log(now.toTimeString().split(' ')[0]);
};

rl.question('Pulsa ENTER para ver la hora o escribe "salir" para terminar: ', (answer) => {
    if (answer.toLowerCase() === 'salir') {
        rl.close();
    } else {
        setInterval(showTime, 1000);
    }
});
