// Función para calcular el promedio de cuatro notas
function calcularPromedio(nota1, nota2, nota3, nota4) {
    let suma = nota1 + nota2 + nota3 + nota4;
    let promedio = suma / 4;
    return promedio;
}

// Función para verificar la aprobación del estudiante
function verificarAprobacion(promedio) {
    if (promedio >= 5) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

// Función para calcular el promedio y verificar la aprobación
function calcularYVerificar() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        document.getElementById('result').innerText = "Por favor, introduce todas las notas.";
        return;
    }

    let promedio = calcularPromedio(nota1, nota2, nota3, nota4);
    let resultado = verificarAprobacion(promedio);

    document.getElementById('result').innerText = "Promedio: " + promedio.toFixed(2) + " - " + resultado;
}
