let ventas = Array.from({ length: 3 }, () => Array.from({ length: 12 }, () => Array.from({ length: 4 }, () => Math.floor(Math.random() * 1000 + 100))));

let totalVentas = Array.from({ length: 12 }, () => Array.from({ length: 4 }, () => 0));

ventas.forEach(representante => {
    representante.forEach((mes, indexMes) => {
        mes.forEach((producto, indexProducto) => {
            totalVentas[indexMes][indexProducto] += producto;
        });
    });
});

console.log("Total de ventas (mes, producto):");
console.log(totalVentas);


