// Módulo de cálculo do Discounted Cash Flow (DCF).

/**
 * Traz a valor presente os fluxos de caixa projetados.
 */
export function discountCashFlow(cashFlows, discountRate) {
  let pv = 0;
  cashFlows.forEach((cf, index) => {
    // index + 1 pois o primeiro ano projetado é o ano 1
    pv += cf / Math.pow(1 + discountRate, index + 1);
  });
  return pv;
}

/**
 * Calcula o Valor Terminal pelo método de perpetuidade com crescimento.
 */
export function terminalValue(lastFCF, growth, discountRate) {
  // Fórmula de Gordon Growth Model
  if (discountRate <= growth) return 0; // Evita valor infinito ou negativo se g >= r
  return (lastFCF * (1 + growth)) / (discountRate - growth);
}

/**
 * Calcula o Enterprise Value (ou Equity Value se FCFE) somando PV dos FCFs e o PV do Valor Terminal.
 */
export function calculateDCF(cashFlows, discountRate, terminalGrowth) {
  const pv = discountCashFlow(cashFlows, discountRate);
  
  const tv = terminalValue(
    cashFlows[cashFlows.length - 1], // Último FCF projetado
    terminalGrowth,
    discountRate
  );

  const pvTV = tv / Math.pow(1 + discountRate, cashFlows.length);

  return {
    pv: pv,
    tv: tv,
    pvTV: pvTV,
    enterpriseValue: pv + pvTV
  };
}

/**
 * Calcula o valor por ação (Equity Value Per Share).
 */
export function calculateValuePerShare(enterpriseValue, debt, sharesOutstanding) {
  // Assumindo que enterpriseValue já representa bem a firma, deduzimos dívida para achar o Equity (simplificado)
  const equityValue = enterpriseValue - debt;
  if (equityValue <= 0) return 0;
  return equityValue / sharesOutstanding;
}
