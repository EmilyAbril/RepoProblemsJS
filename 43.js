const fs = require('fs');
const readline = require('readline');

const modificarRegistro = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Introduce el ID del registro a modificar: ', id => {
        let datos = JSON.parse(fs.readFileSync('DATOS.DAT'));
        const index = datos.findIndex(registro => registro.id === id);
        if (index !== -1) {
            console.log('Registro actual:', datos[index]);
            rl.question('Nuevo Nombre (deja en blanco para no modificar): ', nombre => {
                if (nombre) datos[index].nombre = nombre;
                rl.question('Nuevos Apellidos (deja en blanco para no modificar): ', apellidos => {
                    if (apellidos) datos[index].apellidos = apellidos;
                    rl.question('Nueva Dirección (deja en blanco para no modificar): ', direccion => {
                        if (direccion) datos[index].direccion = direccion;
                        rl.question('Nuevo Estado (deja en blanco para no modificar): ', estado => {
                            if (estado) datos[index].estado = estado;
                            fs.writeFileSync('DATOS.DAT', JSON.stringify(datos, null, 2));
                            console.log('Registro modificado.');
                            rl.close();
                        });
                    });
                });
            });
        } else {
            console.log('No se encontró el registro con el ID proporcionado.');
            rl.close();
        }
    });
};

modificarRegistro();
