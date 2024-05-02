let tabla = [];
let valor = 1;
for (let p = 0; p < 3; p++) {
    let pagina = [];
    for (let f = 0; f < 4; f++) {
        let fila = [];
        for (let c = 0; c < 5; c++) {
            fila.push(valor++);
        }
        pagina.push(fila);
    }
    tabla.push(pagina);
}

console.log("Tabla de 3 páginas, 4 filas y 5 columnas:");
console.log(tabla);

