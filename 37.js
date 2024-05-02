const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cursos = [];

const leerNotasAlumnos = (cursoIndex, alumnoIndex, alumnosPorCurso) => {
    if (cursoIndex >= cursos.length) {
        console.log("Notas de todos los cursos y alumnos:");
        console.log(cursos);
        rl.close();
    } else if (alumnoIndex >= alumnosPorCurso) {
        leerNotasAlumnos(cursoIndex + 1, 0, cursos[cursoIndex].alumnos.length);
    } else {
        rl.question(`Curso ${cursoIndex + 1}, nota del alumno ${alumnoIndex + 1}: `, (nota) => {
            cursos[cursoIndex].alumnos.push(parseFloat(nota));
            leerNotasAlumnos(cursoIndex, alumnoIndex + 1, alumnosPorCurso);
        });
    }
};

rl.question('Número de cursos: ', numCursos => {
    const totalCursos = parseInt(numCursos);
    for (let i = 0; i < totalCursos; i++) {
        cursos.push({ curso: i + 1, alumnos: [] });
    }
    cursos.forEach((curso, index) => {
        rl.question(`Número de alumnos en el curso ${index + 1}: `, numAlumnos => {
            const alumnos = parseInt(numAlumnos);
            leerNotasAlumnos(index, 0, alumnos);
        });
    });
});
