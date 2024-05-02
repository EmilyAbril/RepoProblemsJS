const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const eliminarRegistro = () => {
    rl.question('Introduce el ID del registro a eliminar: ', id => {
        let datos = JSON.parse(fs.readFileSync('DATOS.DAT'));
        const index = datos.findIndex(registro => registro.id === id);
        if (index !== -1) {
            datos.splice(index, 1);
            fs.writeFileSync('DATOS.DAT', JSON.stringify(datos, null, 2));
            console.log('Registro eliminado.');
        } else {
            console.log('No se encontró el registro con el ID proporcionado.');
        }
        rl.close();
    });
};

eliminarRegistro();
