const matriz = Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1));
const transpuesta = matriz[0].map((col, i) => matriz.map(row => row[i]));
console.log('Matriz original:');
matriz.forEach(fila => console.log(fila.join(' ')));
console.log('Matriz transpuesta:');
transpuesta.forEach(fila => console.log(fila.join(' ')));

