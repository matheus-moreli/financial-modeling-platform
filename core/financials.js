// Módulo responsável por métricas básicas de finanças.

/**
 * Calcula a margem dividindo o lucro pela receita.
 */
export function calculateMargin(profit, revenue) {
  return profit / revenue;
}

/**
 * Calcula a taxa de crescimento histórica ano a ano.
 */
export function calculateGrowth(series) {
  let growth = [];
  for (let i = 1; i < series.length; i++) {
    const prev = series[i - 1];
    const curr = series[i];
    // Evita divisões por zero
    if (prev === 0) {
      growth.push(0);
    } else {
      growth.push((curr - prev) / Math.abs(prev));
    }
  }
  return growth;
}

/**
 * Calcula a média simples de um array numérico.
 */
export function calculateAverage(arr) {
  if (!arr || arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
