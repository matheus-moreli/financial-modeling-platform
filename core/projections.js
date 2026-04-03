// Módulo responsável pelas projeções futuras.

/**
 * Projeta o Free Cash Flow (FCF) para os próximos 'years' anos.
 * @param {number} baseFCF - O Free Cash Flow mais recente (ano base).
 * @param {number} growthRate - A taxa de crescimento anual projetada (em decimal, ex: 0.05 para 5%).
 * @param {number} years - Quantidade de anos a projetar.
 * @returns {number[]} Array contendo os fluxos de caixa projetados.
 */
export function projectFCF(baseFCF, growthRate, years) {
  let projections = [];
  let current = baseFCF;

  for (let i = 1; i <= years; i++) {
    current *= (1 + growthRate);
    projections.push(current);
  }

  return projections;
}
