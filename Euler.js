function euler(f, y0, x0, h, n) {
    const y = [y0];
    const x = [x0];
  
    for (let i = 1; i <= n; i++) {
      const xn = x[i - 1] + h;
      const yn = y[i - 1] + h * f(x[i - 1], y[i - 1]);
      x.push(xn);
      y.push(yn);
    }
  
    return { x, y }; // Return the object here
  }
  
  // Definición de la función f(x, y)
  function f(x, y) {
    return 4 * x - 2 * y;
  }
  
  // Función para calcular la solución exacta
  function exactSolution(x) {
    return 2 * Math.exp(-2 * x) + 2 * x - 1;
  }
  
  // Parámetros
  const y0 = 2;
  const x0 = 0;
  const h = 0.05;
  const n = 100; // Número de iteraciones
  
  // Aplicar el método de Euler
  const result = euler(f, y0, x0, h, n);
  
  // Crear un array de objetos para cada par (x, y) entre 0 y 10, limitando a los primeros 10 valores
  const data = result.x.slice(0, 12).map((x, index) => ({
    x,
    y_aproximado: result.y[index],
    y_exacto: exactSolution(x),
    error_verdadero: Math.abs(result.y[index] - exactSolution(x)),
    error_relativo: Math.abs((result.y[index] - exactSolution(x)) / exactSolution(x))
  }));
  
  
  // Imprimir los resultados en formato de tabla
  console.table(data);