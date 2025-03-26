function gaussSeidel(a11, a12, b1, a21, a22, b2) {
    let x1 = math.fraction(0), x2 = math.fraction(0);
    let iteraciones = [];
    let error_x1 = 100, error_x2 = 100;
    let iter = 0;

    while ((error_x1 > 0.05 || error_x2 > 0.05) && iter < 20) {
        iter++;
        const x1_prev = math.clone(x1);
        const x2_prev = math.clone(x2);

        // Fórmulas de actualización (ajustadas para coeficientes positivos)
        x1 = math.divide(math.subtract(b1, math.multiply(a12, x2)), a11);
        x2 = math.divide(math.subtract(b2, math.multiply(a21, x1)), a22);

        // Calcular errores relativos porcentuales
        error_x1 = math.number(math.multiply(math.divide(
            math.abs(math.subtract(x1, x1_prev)), 
            math.max(math.abs(x1), 1e-6) // Evitar división por cero
        ), 100));

        error_x2 = math.number(math.multiply(math.divide(
            math.abs(math.subtract(x2, x2_prev)), 
            math.max(math.abs(x2), 1e-6)
        ), 100));

        iteraciones.push({ iter, x1, x2, error_x1, error_x2 });
    }
    return iteraciones;
}

function resolverSistema() {
    // Analizar coeficientes como fracciones
    const parseInput = (id) => math.fraction(document.getElementById(id).value);

    const a11 = parseInput("a11");
    const a12 = parseInput("a12");
    const b1 = parseInput("b1");
    const a21 = parseInput("a21");
    const a22 = parseInput("a22");
    const b2 = parseInput("b2");

    const resultados = gaussSeidel(a11, a12, b1, a21, a22, b2);
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    resultados.forEach(({ iter, x1, x2, error_x1, error_x2 }) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${iter}</td>
            <td>${x1.n}${x1.d !== 1 ? `/${x1.d}` : ''}</td>
            <td>${x2.n}${x2.d !== 1 ? `/${x2.d}` : ''}</td>
            <td>${error_x1.toFixed(2)}%</td>
            <td>${error_x2.toFixed(2)}%</td>
        `;
        tabla.appendChild(fila);
    });
}