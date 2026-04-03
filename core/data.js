export const companies = {
  petrobras: {
    id: "petrobras",
    name: "Petrobras",
    logoUrl: "https://logo.clearbit.com/petrobras.com.br",
    sector: "Oil & Gas / Energy",
    description: "Tese Básica: Empresa ex-growth, operando como 'Cash Cow'.",
    revenue: [302, 392, 450, 641, 511],
    profit: [40, 71, 106, 188, 124],
    debt: [350, 320, 270, 250, 270],
    fcf: [60, 95, 140, 210, 155], 
    currentPrice: 38.50,
    sharesOutstanding: 13.04,
    authorEvaluation: `
        <div class="eval-report">
            <h3 class="eval-title">The Bear vs Bull Paradox: Analítica Estrutural Petrobras</h3>
            <p>O mercado precifica a <strong>Petrobras (PETR4)</strong> não pela sua alocação de capital ótima, mas pela volatilidade no risco-Cauda (Tail Risk) atrelado à governança. Com um <em>Lifting Cost</em> do Pré-Sal orbitando US$ 5,50/boe, a margem FCF da companhia atua de forma inelástica contra quedas do Brent até o patamar de US$ 40/bbl.</p>
            
            <div class="math-box" style="margin: 1.5rem 0; padding: 1.5rem; border-left: 3px solid #2563EB;">
                <span class="math-title" style="text-align: left; margin-bottom: 0.5rem; font-size: 0.8rem;">Função de Dividend Yield Preditivo (Modelo de H-Model Simplificado)</span>
                <div class="math-formula" style="font-size: 1.1rem; color: #0F172A;">
                    \\[ P_0 = \\frac{D_0 (1+g)}{K_e - g} \\implies Yield = \\frac{FCF_{estimado} \\times Payout}{MarketCap} \\]
                </div>
            </div>

            <p><strong>Previsões Base-Case:</strong> Ao rodar meu algoritmo preditivo travando o Brent a US$ 75 e Capex de regeneração em US$ 12Bi/ano, obtenho os seguintes outputs para os próximos 3 anos fiscais (A+1 ao A+3):</p>
            
            <table class="data-table" style="margin-top: 1rem; margin-bottom: 2rem;">
                <thead style="background: var(--surface-hover);">
                    <tr>
                        <th style="text-align:left;">Premissa Estressada</th>
                        <th style="text-align:right;">A+1 (Previsão)</th>
                        <th style="text-align:right;">A+2 (Previsão)</th>
                        <th style="text-align:right;">A+3 (Terminal Proxy)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">EBITDA Margin</td><td>45.2%</td><td>43.8%</td><td>42.0%</td></tr>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">Dividend Yield Projetado</td><td style="color:#059669; font-weight:bold;">18.5%</td><td style="color:#059669; font-weight:bold;">16.1%</td><td style="color:#059669; font-weight:bold;">14.0%</td></tr>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">CAGR Caixa Livre (\( g \))</td><td>-1.2%</td><td>-2.5%</td><td>0.0%</td></tr>
                </tbody>
            </table>

            <div class="eval-strategy" style="background:#EFF6FF; border-left:4px solid #2563EB;">
                <strong>Minha Diretriz no Laboratório:</strong> Calibre o crescimento (CAGR) negativo mas sinta o poder massivo do Yield Inicial. Exija um WACC massivo (14%+) na barra lateral para absorver Risco-País com maestria.
            </div>
        </div>
    `
  },
  vale: {
    id: "vale",
    name: "Vale S.A.",
    logoUrl: "https://logo.clearbit.com/vale.com",
    sector: "Mining",
    description: "Tese Básica: Sensibilidade extrema ao ciclo de crédito.",
    revenue: [205, 260, 310, 220, 210],
    profit: [25, 90, 125, 95, 39],
    debt: [85, 75, 60, 65, 70],
    fcf: [55, 115, 145, 65, 52],
    currentPrice: 62.10,
    sharesOutstanding: 4.54,
    authorEvaluation: `
        <div class="eval-report">
            <h3 class="eval-title">Cativeiro Asiático e Prêmio de Qualidade Norte</h3>
            <p>Minha premissa sobre <strong>Vale (VALE3)</strong> foca na inelasticidade da oferta de minério premium (acima de 65% Fe). Enquanto a demanda siderúrgica chinesa demonstra desaceleração no setor civil, a regulação de descarbonização em Pequim força siderúrgicas a pagar um super-prêmio por Carajás para emitir menos CO2.</p>
            
            <div class="math-box" style="margin: 1.5rem 0; padding: 1.5rem; border-left: 3px solid #2563EB;">
                <span class="math-title" style="text-align: left; margin-bottom: 0.5rem; font-size: 0.8rem;">Correlação Vetorial Ebitda vs Iron Ore (62% Fe CFR China)</span>
                <div class="math-formula" style="font-size: 1.1rem; color: #0F172A;">
                    \\[ Ebitda_{Estimado} = f(P_{Fe}, \\ Volume) = [Volume_{vendas} \\times (P_{Fe} + P_{premio})] - C_{frotas} \\]
                </div>
            </div>

            <p><strong>Cadeia de Previsão Normalized (Regressão Linear Múltipla):</strong> Para desviar do erro crasso de projetar uma commodity no pico, trago os caixas ao que chamo de *Normalized FCF*, assumindo o minério ancorado na média global de reposição de capacidade:</p>

            <table class="data-table" style="margin-top: 1rem; margin-bottom: 2rem;">
                <thead style="background: var(--surface-hover);">
                    <tr>
                        <th style="text-align:left;">Curva de Previsão</th>
                        <th style="text-align:right;">Iron Ore (USD/t)</th>
                        <th style="text-align:right;">FCF Previsto (BRL Bi)</th>
                        <th style="text-align:right;">Fair Price Target (\( P_0 \))</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">Cenário Recessivo (Bear)</td><td style="color:#DC2626;">US$ 70</td><td>15.2</td><td>R$ 48.50</td></tr>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">Cenário Base (Base-case)</td><td style="color:#2563EB;">US$ 95</td><td>42.5</td><td style="font-weight:bold;">R$ 75.30</td></tr>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">Cenário Aquecido (Bull)</td><td style="color:#059669;">US$ 130</td><td>85.0</td><td>R$ 115.00</td></tr>
                </tbody>
            </table>

            <div class="eval-strategy" style="background:#EFF6FF; border-left:4px solid #2563EB;">
                <strong>Minha Diretriz no Laboratório:</strong> O modelo DCF de companhias cíclicas pune fluxos escalares. Configure a Taxa de Desconto (WACC) em 11%-12% e assuma \( g=0 \) para visualizar a blindagem.
            </div>
        </div>
    `
  },
  itau: {
    id: "itau",
    name: "Itaú Unibanco",
    logoUrl: "https://logo.clearbit.com/itau.com.br",
    sector: "Banking / Financials",
    description: "Tese Básica: Banco premium da América Latina, ROE colossal.",
    revenue: [115, 120, 137, 145, 160],
    profit: [18, 27, 31, 35, 39],
    debt: [0, 0, 0, 0, 0],
    fcf: [22, 29, 34, 38, 42],
    currentPrice: 34.20,
    sharesOutstanding: 9.80,
    authorEvaluation: `
        <div class="eval-report">
            <h3 class="eval-title">Spread Inabalável e a Arquitetura do ROE</h3>
            <p>A fortaleza do <strong>Itaú (ITUB4)</strong> foge à teoria industrial tradicional. Seu fosso econômico emana de captação de passivos a custo irrisório. Quando o CDI avança, a tesouraria rentabiliza capital instantaneamente, muito mais rápido que a velocidade que a inadimplência corrói as provisões PDD.</p>
            
            <div class="math-box" style="margin: 1.5rem 0; padding: 1.5rem; border-left: 3px solid #2563EB;">
                <span class="math-title" style="text-align: left; margin-bottom: 0.5rem; font-size: 0.8rem;">Just-In-Time Cost of Risk & FCFE (Free Cash Flow to Equity)</span>
                <div class="math-formula" style="font-size: 1.1rem; color: #0F172A;">
                    \\[ FCFE = Lucro\\ L\\acute{i}quido - (\\Delta \\ Ativos\\ de\\ Risco \\times Basel\\ \\%) \\]
                </div>
            </div>

            <p><strong>Mapeamento Preditivo de Múltiplos Implícitos:</strong> Se fixarmos o custo de Retorno sobre Equity (\( K_e \)) pela fórmula iterativa de convergência, chegamos exatamente às métricas intrínsecas a seguir sobre a ação preferencial:</p>

            <table class="data-table" style="margin-top: 1rem; margin-bottom: 2rem;">
                <thead style="background: var(--surface-hover);">
                    <tr>
                        <th style="text-align:left;">Parâmetro Fundamentalista</th>
                        <th style="text-align:right;">Consenso de Mercado</th>
                        <th style="text-align:right;">Minha Projeção Proprietary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">ROE (Retorno s/ PL) sustentável</td><td>19.5%</td><td style="color:#059669; font-weight:bold;">21.6%</td></tr>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">Custo de Equity Ajustado (\( K_e \))</td><td>14.0%</td><td style="color:#2563EB; font-weight:bold;">12.5%</td></tr>
                    <tr><td style="text-align:left; color:#1F2937; font-weight:600;">Multiplicador Price-to-Book (P/VPA)</td><td>1.7x</td><td style="color:#059669; font-weight:bold;">2.2x</td></tr>
                </tbody>
            </table>

            <div class="eval-strategy" style="background:#EFF6FF; border-left:4px solid #2563EB;">
                <strong>Minha Diretriz no Laboratório:</strong> Configure o WACC (funcionando perfeitamente como \( K_e \)) em ~ 12%. Insira a raridade da perpetuidade bancária \( g \) = 3.5%, superando os pares do ciclo tradicional.
            </div>
        </div>
    `
  }
};
