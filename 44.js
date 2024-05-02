const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listarPorEstado = () => {
    rl.question('Introduce el Estado para filtrar registros: ', estadoFiltro => {
        const datos = JSON.parse(fs.readFileSync('DATOS.DAT'));
        const filtrados = datos.filter(registro => registro.estado === estadoFiltro);
        console.log(`Registros en el estado ${estadoFiltro}:`);
        console.log(filtrados);
        rl.close();
    });
};

listarPorEstado();
