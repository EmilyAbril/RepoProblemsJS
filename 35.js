const matriz = Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1));
matriz.forEach(fila => console.log(fila.join(' ')));

