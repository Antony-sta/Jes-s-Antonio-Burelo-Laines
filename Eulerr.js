function eulerMethod(f, x0, y0, h, n) {
  let results = [];
  let x = x0;
  let y = y0;

  for (let i = 0; i <= n; i++) {
    // Calcular el valor exacto
    let yExact = Math.exp(x * x - 1);

    // Calcular el error absoluto y relativo porcentual
    let errorAbs = Math.abs(yExact - y);
    let errorRel = (errorAbs / yExact) * 100;

    // Almacenar los resultados
    results.push({ i, x: x.toFixed(1), yApprox: y.toFixed(4), yExact: yExact.toFixed(4), errorAbs: errorAbs.toFixed(4), errorRel: errorRel.toFixed(2) });

    // Imprimir los resultados
    console.log(`${i}. x = ${x.toFixed(1)}, y_approx = ${y.toFixed(4)}, y_exact = ${yExact.toFixed(4)}, error_abs = ${errorAbs.toFixed(4)}, error_rel = ${errorRel.toFixed(2)}%`);

    // Actualizar x e y usando el método de Euler
    y = y + h * f(x, y);
    x = x + h;
  }

  return results;
}

// Definición de la función diferencial y' = 2xy
function f(x, y) {
  return 2 * x * y;
}

// Valores iniciales
const x0 = 1;
const y0 = 1;
const h = 0.1; // Paso
const n = 5;   // Número de pasos

// Ejecutar el método de Euler
eulerMethod(f, x0, y0, h, n);