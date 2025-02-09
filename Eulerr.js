function eulerMethod(g, c, m, v0, tmax, h, exactValues) {
  let t = 0;
  let v = v0;
  let results = [];
  let i = 1;

  while (t <= tmax && i <= exactValues.length) {
    // Calcular la velocidad aproximada utilizando Euler
    let vApprox = v + h * (g - (c/m) * v);

    // Calcular el error porcentual
    let vExact = exactValues[i - 1];
    let error = ((vApprox - vExact) / vExact) * 100;

    // Almacenar los resultados
    results.push({ t, vApprox, vExact, error });

    // Imprimir los resultados (ajusta el formato según tus necesidades)
    console.log(i + ". t = " + t.toFixed(2) + " s, v_approx = " + vApprox.toFixed(4) + " m/s, v_exact = " + vExact.toFixed(4) + " m/s, error = " + error.toFixed(2) + "%");

    // Actualizar el tiempo y el índice
    t += h;
    i++;
  }

  return results;
}

// Ejemplo de uso (ajusta los valores según tu problema)
const g = 9.81; // m/s^2
const c = 0.2; // kg/s
const m = 1; // kg
const v0 = 0; // m/s
const tmax = 1; // s
const h = 0.1; // s
const exactValues = [0, 17.89, 30.85, 51.37, 69.56, 78.4]; // Lista de velocidades exactas

const results = eulerMethod(g, c, m, v0, tmax, h, exactValues);