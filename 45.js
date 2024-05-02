const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const consultarRegistro = () => {
    rl.question('Introduce el ID del registro a consultar: ', id => {
        const datos = JSON.parse(fs.readFileSync('DATOS.DAT'));
        const registro = datos.find(registro => registro.id === id);
        if (registro) {
            console.log('Registro encontrado:');
            console.log(registro);
        } else {
            console.log('No se encontró el registro con el ID proporcionado.');
        }
        rl.close();
    });
};

consultarRegistro();
