function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap][0] > temp[0]; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}

let matriz = Array.from({ length: 5 }, () => Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)));
console.log("Matriz original:");
console.log(matriz);
let sortedMatriz = shellSort(matriz);
console.log("Matriz ordenada por la primera columna:");
console.log(sortedMatriz);

