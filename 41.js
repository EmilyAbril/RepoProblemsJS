const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const agregarRegistro = () => {
    rl.question('ID: ', id => {
        rl.question('Nombre: ', nombre => {
            rl.question('Apellidos: ', apellidos => {
                rl.question('Dirección: ', direccion => {
                    rl.question('Estado: ', estado => {
                        const nuevoRegistro = { id, nombre, apellidos, direccion, estado };
                        let datos = [];
                        if (fs.existsSync('DATOS.DAT')) {
                            datos = JSON.parse(fs.readFileSync('DATOS.DAT'));
                        }
                        datos.push(nuevoRegistro);
                        fs.writeFileSync('DATOS.DAT', JSON.stringify(datos, null, 2));
                        console.log('Registro agregado.');
                        rl.close();
                    });
                });
            });
        });
    });
};

agregarRegistro();
