export const courseModules = [
    {
        id: 'module-1',
        title: 'Módulo 1: O Mito do Preço',
        label: 'Introdução ao Valuation',
        content: `
            <div class="lesson-container">
                <span class="lesson-label">Fundamentos</span>
                <h1 class="lesson-title">Valor vs. Preço</h1>
                <div class="lesson-content">
                    <p>No mercado financeiro, as telas piscam verde e vermelho a cada segundo, criando uma ilusão óptica: a de que o valor de um negócio muda de acordo com o humor dos investidores. Esta é a principal armadilha para o leigo.</p>
                    <p>Segundo Warren Buffett, <strong>"Preço é o que você paga. Valor é o que você leva."</strong></p>
                    
                    <div class="callout">
                        O Preço da ação é definido no curto prazo pelas emoções (medo e ganância). O Valor da ação é guiado puramente pela capacidade da empresa de gerar dinheiro vivo (caixa) no longo prazo.
                    </div>

                    <h3>Valor Verdadeiro (Intrínseco)</h3>
                    <p>A formulação matemática para definir o valor de qualquer ativo na face da terra (uma fazenda, um título de dívida, uma ação) obedece à mesma e imutável gravidade financeira: <strong>O Valor Presente dos Fluxos de Caixa Futuros</strong>.</p>
                </div>
            </div>
        `
    },
    {
        id: 'module-2',
        title: 'Módulo 2: O Motor do Caixa Livre',
        label: 'Demonstrações Financeiras',
        content: `
            <div class="lesson-container">
                <span class="lesson-label">O Coração da Matemática</span>
                <h1 class="lesson-title">Do Faturamento ao FCF</h1>
                <div class="lesson-content">
                    <p>Lucro contábil não é dinheiro no bolso. A DRE (Demonstração do Resultado do Exercício) é governada pelo regime de competência. Para valuation rigoroso, usamos apenas o <strong>Free Cash Flow (FCF)</strong>.</p>

                    <div class="math-box">
                        <span class="math-title">A Equação do Fluxo de Caixa Livre (FCF)</span>
                        <div class="math-formula">
                            \\[ FCF = NOPAT + D - CAPEX - \\Delta WC \\]
                        </div>
                    </div>

                    <p>A tradução dos termos rigorosos:</p>
                    <ul>
                        <li><strong>NOPAT:</strong> Net Operating Profit After Taxes. \\[ EBIT \\times (1 - T) \\]</li>
                        <li><strong>D (Depreciação):</strong> Como deduz caixa contábil mas não efetivo, é adicionada de volta.</li>
                        <li><strong>CAPEX:</strong> (Capital Expenditure) Saídas colossais de caixa para investir no futuro da operação.</li>
                        <li><strong>\\(\\Delta WC\\):</strong> Variação de Capital de Giro. Se inventário sobe, caixa diminui.</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'module-3',
        title: 'Módulo 3: Capital Asset Pricing Model e o Risco',
        label: 'A Matemática do WACC',
        content: `
            <div class="lesson-container">
                <span class="lesson-label">A Gravidade do Dinheiro</span>
                <h1 class="lesson-title">O Teto de Vidro do WACC</h1>
                <div class="lesson-content">
                    <p>Para trazer fluxos absurdos do futuro para moedas no seu bolso hoje, aplicamos uma taxa de desconto refletindo uma perda ao longo do tempo (risco + inflação). Chamamos de <strong>WACC</strong>.</p>

                    <p>O coração do WACC é o Custo de Capital Próprio (\\( K_e \\)), extraído pelo infame Asset Pricing Model <strong>(CAPM)</strong>.</p>

                    <div class="math-box">
                        <span class="math-title">Capital Asset Pricing Model (CAPM)</span>
                        <div class="math-formula">
                            \\[ K_e = R_f + \\beta \\times (R_m - R_f) \\]
                        </div>
                    </div>

                    <p>Na equação acima:</p>
                    <ul>
                        <li><strong>\\( R_f \\):</strong> Taxa Livre de Risco (Rendimento de Títulos Soberanos dos EUA).</li>
                        <li><strong>\\( \\beta \\):</strong> Coeficiente de Volatilidade Sistêmica. Se \\( \\beta > 1 \\), seu fluxo exige descontos violentos.</li>
                        <li><strong>\\( (R_m - R_f) \\):</strong> Prêmio de Risco do Mercado (Demandado pelo Risco Global).</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'module-4',
        title: 'Módulo 4: Gordon Growth',
        label: 'O Fenômeno da Perpetuidade',
        content: `
            <div class="lesson-container">
                <span class="lesson-label">O Infinito Modelado</span>
                <h1 class="lesson-title">Terminal Value Convergente</h1>
                <div class="lesson-content">
                    <p>Sabemos projetar 5 anos confiantemente. Mas o que ocorre do Ano 6 à Eternidade? A engenharia financeira colapsa isso numa única soma terminal pelo <strong>Gordon Growth Model</strong>.</p>

                    <div class="math-box">
                        <span class="math-title">Modelo de Gordon (Perpetuidade)</span>
                        <div class="math-formula">
                            \\[ TV = \\frac{FCF_n \\times (1 + g)}{WACC - g} \\]
                        </div>
                    </div>

                    <p>O rigor manda: a taxa de crescimento a longo prazo (\\( g \\)) <strong>NUNCA</strong> pode ultrapassar o \\( WACC \\) (se não, a divisão converge para o infinito) e habitualmente se estanca na taxa de crescimento do PIB local e Inflação. (\\( g \\approx 2\\% - 3\\% \\)).</p>
                </div>
            </div>
        `
    },
    {
        id: 'module-5',
        title: 'Módulo 5: Enterprise Value to Equity',
        label: 'A Ponte Final',
        content: `
            <div class="lesson-container">
                <span class="lesson-label">Resíduo Precioso</span>
                <h1 class="lesson-title">Resgate aos Acionistas</h1>
                <div class="lesson-content">
                    <p>Após trazer todos os fluxos ao valor presente (PV) e adicionar o valor presente do Terminal Value (PV of TV), formamos a grandeza atômica da firma: O <strong>Enterprise Value</strong>.</p>

                    <div class="math-box">
                        <span class="math-title">A Ponte Fundamental</span>
                        <div class="math-formula">
                            \\[ E = EV - Debt + Cash \\]
                        </div>
                    </div>

                    <p>O <strong>E (Equity)</strong> é exatamente a fatia dos donos (Sócios Acionistas). Divida esse valor puro perfeitamente pelo número de papéis emitidos pela companhia, o resultado lhe dará o que <strong>realmente</strong> a cotação no seu Home Broker deve buscar.</p>
                </div>
            </div>
        `
    },
    {
        id: 'eval-petrobras',
        title: 'Evaluation Profundo: Petrobras (PETR4)',
        label: 'Case 1: Petrobras',
        content: `
            <div class="lesson-container">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    <img src="https://logo.clearbit.com/petrobras.com.br" alt="Logo Petrobras" style="height: 60px;">
                    <span class="lesson-label" style="margin: 0;">Relatório de Análise (Sell-Side)</span>
                </div>
                <h1 class="lesson-title" style="font-size: 2.5rem;">A Resiliência do Pré-Sal e o Risco Sistêmico da Petrobras</h1>
                <div class="lesson-content">
                    <h2>Tese de Investimento (The Bull Case)</h2>
                    <p>A Petrobras transacionou historicamente como uma <em>proxy</em> estrutural do barril de petróleo Brent e do risco-soberano brasileiro. O seu maior <em>Moat</em> (fosso competitivo) reside na <strong>excepcional qualidade de extração no offshore líquido (Pré-Sal)</strong>, que confere à estatal um dos menores <em>Lifting Costs</em> (custo de extração) do globo, em torno de <strong>US$ 5 a 6 por barril equivalente (boe)</strong>.</p>

                    <p>Numa banda estrutural de Brent acima de US$ 70, a empresa passa de uma exploradora intensiva de <em>Capex</em> para uma <strong>massiva geradora de Fluxo de Caixa Livre (Cash Cow)</strong>, traduzindo-se em Dividend Yields frequentemente avassaladores (por vezes, superando os 20% a.a.).</p>
                    
                    <h2>Riscos Assimétricos e o Beta (\(\\beta\))</h2>
                    <p>Por que um ativo que precifica múltiplos na casa de um "P/L de 3x" não salta brutalmente na tela? Porque o mercado incorpora um pesadíssimo prêmio de risco no seu <strong>Custo de Capital Próprio (\\( K_e \\))</strong>. O desconto engloba o risco da política de paridade internacional de preços (PPI).</p>
                    
                    <div class="callout">
                        <strong>Diretriz de Valuation:</strong> Em um DCF rigoroso, deve-se punir o fluxo de longo prazo da PETR4 elevando o WACC para valores entre <strong>13% e 15%</strong> (refletindo o Risco País + Interferência) e modelar uma taxa de crescimento do terminal (\\( g \\)) nula ou ligeiramente negativa na perpetuidade (para precificar a exaustão da commodity e transição energética).
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'eval-vale',
        title: 'Evaluation Profundo: Vale (VALE3)',
        label: 'Case 2: Vale',
        content: `
            <div class="lesson-container">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    <img src="https://logo.clearbit.com/vale.com" alt="Logo Vale" style="height: 60px;">
                    <span class="lesson-label" style="margin: 0;">Relatório de Análise (Sell-Side)</span>
                </div>
                <h1 class="lesson-title" style="font-size: 2.5rem;">Prêmio de Alta Qualidade e Cordão Umbilical Chinês</h1>
                <div class="lesson-content">
                    <h2>Tese de Investimento (The Bull Case)</h2>
                    <p>A Vale é uma das mineradoras globais dominantes e possui em seu portfólio de <strong>Minério de Ferro no Norte do país (Carajás)</strong> um produto com pureza natural superando os <strong>65% de Fe</strong>. Numa era ondem as siderúrgicas asiáticas enfrentam legislações agressivas de descarbonização, um minério mais puro demanda menos queima de coque, pagando um prêmio robusto frente à curva referencial do minério a 62%.</p>

                    <p>Diferente de negócios com receitas lineares (como utilities), a modelagem de uma commodity exige que encontremos fluxos de caixa altamente heterogêneos. Nas fases de expansão de crédito global, a Vale age como uma turbina de Dividendos.</p>
                    
                    <h2>Vulnerabilidades Inerentes (\(\\Delta\))</h2>
                    <p>Metade do destino físico escoado pelas embarcações Valemax ancora no mercado da <strong>Muralha de Aço Chinesa</strong>. A relação de correlação do preço ação com os dados do setor imobiliário asiático (incorporadoras) beira o absoluto.</p>
                    
                    <div class="callout">
                        <strong>Diretriz de Valuation:</strong> Não projete um crescimento perpétuo (Gordon) baseado num pico de platô do minério. Projete uma regressão à média (Normalized Cash Flow). O mercado aplica um desconto em torno de <strong>WACC de 10-12%</strong> e margens Ebitda contracionistas na meia década projetada, estabilizando entre as margem consolidadas do ciclo.
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'eval-itau',
        title: 'Evaluation Profundo: Itaú (ITUB4)',
        label: 'Case 3: Itaú',
        content: `
            <div class="lesson-container">
                 <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    <img src="https://logo.clearbit.com/itau.com.br" alt="Logo Itaú" style="height: 60px;">
                    <span class="lesson-label" style="margin: 0;">Relatório de Análise (Sell-Side)</span>
                </div>
                <h1 class="lesson-title" style="font-size: 2.5rem;">O Colosso Bancário e o ROE de Cristal</h1>
                <div class="lesson-content">
                    <h2>Tese de Investimento (The Bull Case)</h2>
                    <p>O maior banco privado da América Latina desponta como um estudo de caso global incontestável em "Vantagem Competitiva" e resiliência financeira. Enquanto o mundo enxerga incertezas macroeconômicas, o Itaú ostenta historicamente um Retorno Sobre Patrimônio Líquido (<strong>ROE</strong>) cravado na majestosa casa dos <strong>20% (e muitas vezes superior)</strong>.</p>

                    <p>Seus lucros se blindam fortemente através de um <em>mix</em> primoroso: um spread bancário defendido por depósitos ávidos e baratos, e uma esteira poderosa de <strong>receitas recorrentes de serviços/seguros</strong> que aliviam a pressão do índice de inadimplência (<strong>NPLs</strong> - <em>Non-Performing Loans</em>).</p>
                    
                    <h2>Limitações de Modelagem via DDM vs DCF</h2>
                    <p>O DCF convencional não se aplica bem a Bancos comerciais, visto que "Bancos usam Dívida como Matéria-Prima", diferente de corporações industriais. Analistas utilizam uma proxy como o FCFE (Free Cash Flow to Equity) ou Dividend Discount Model (<strong>DDM</strong>).</p>
                    
                    <div class="callout">
                        <strong>Diretriz de Valuation:</strong> Para Itaú, utilize um custo de equity (\\( K_e \\)) de <strong>11.5% a 12.5%</strong>. Sua capacidade de aumentar lucratividade no decorrer de ciclos de juros da Selic faz do Itaú o portador legítimo da virtude "Crescimento Constante". Use uma taxa terminal (\\( g \\)) de aproximadamente <strong>2.5% a 3.5%</strong>, espelhando puramente a perpetuidade do Produto Interno Bruto.
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'sandbox',
        title: 'Laboratório: O DCF Interativo',
        label: 'A Prática Profissional',
        content: `
        <div class="sandbox-container">
            <header class="sandbox-header">
                <h2>O Laboratório de Valuation</h2>
                <div class="author-manifesto">
                    <p class="manifesto-credit">Modelagem Algorítmica e Avaliação Intrínseca conduzida por <strong>Matheus Moreli Durão Silva</strong></p>
                    <p class="manifesto-live">Documento validado em tempo real na data base: <span id="live-date-badge" class="pulse-date">--/--/----</span></p>
                </div>
            </header>

            <section id="company-selection" class="glass-panel selection-panel">
                <div class="companies-grid" id="companies-container">
                    <!-- Gerado via JS no render.js -->
                </div>
            </section>

            <!-- Tese Dinâmica do Autor -->
            <section id="author-thesis-panel" class="glass-panel author-thesis" style="display: none; margin-top: 2rem; border-left: 4px solid var(--accent-blue);">
                <!-- Conteúdo Preenchido via Render -->
            </section>

            <div class="dashboard" id="main-dashboard">
                <div class="dashboard-grid">
                    
                    <div class="dashboard-left">
                        <section id="financials" class="glass-panel">
                            <h3>A Anatomia Financeira Histórica</h3>
                            <div class="table-wrapper">
                                <table class="data-table">
                                    <thead>
                                        <tr>
                                            <th>Série Histórica</th>
                                            <th>A-4</th>
                                            <th>A-3</th>
                                            <th>A-2</th>
                                            <th>A-1</th>
                                            <th>Hoje</th>
                                        </tr>
                                    </thead>
                                    <tbody id="historical-data-body"></tbody>
                                </table>
                            </div>
                        </section>

                        <section id="projections" class="glass-panel">
                            <h3>Projeção Empírica FCF</h3>
                            <div class="fcf-bars" id="fcf-chart"></div>
                        </section>
                    </div>

                    <aside class="dashboard-right">
                        <section class="glass-panel parameters-panel">
                            <h3>Parametrização Analítica</h3>
                            
                            <div class="control-group">
                                <div class="control-header">
                                    <span class="control-label">CAGR FCF (\(\%\))</span>
                                    <span class="control-value" id="growthVal">5%</span>
                                </div>
                                <input type="range" id="growthRate" min="-5" max="25" step="0.5" value="5">
                            </div>

                            <div class="control-group">
                                <div class="control-header">
                                    <span class="control-label">WACC (\(\%\))</span>
                                    <span class="control-value" id="discountVal">10%</span>
                                </div>
                                <input type="range" id="discountRate" min="5" max="25" step="0.5" value="10">
                            </div>

                            <div class="control-group">
                                <div class="control-header">
                                    <span class="control-label">Gordon \( g \) (\(\%\))</span>
                                    <span class="control-value" id="terminalVal">3%</span>
                                </div>
                                <input type="range" id="terminalGrowth" min="0" max="6" step="0.5" value="3">
                            </div>
                        </section>

                        <section id="valuation" class="glass-panel results-card">
                            <h3>Valor Apurado</h3>
                            
                            <div class="result-details">
                                <div class="result-item">
                                    <span class="rtitle">VP Direto (FCF)</span>
                                    <span class="rval" id="res-pv">-</span>
                                </div>
                                <div class="result-item">
                                    <span class="rtitle">VP Terminal</span>
                                    <span class="rval" id="res-tv">-</span>
                                </div>
                                <div class="result-item ev-bridge">
                                    <span class="rtitle">Enterprise Value</span>
                                    <span class="rval" id="res-ev">-</span>
                                </div>
                            </div>

                            <div class="fair-price-container">
                                <span>Target Price Formulado</span>
                                <div class="fair-price" id="res-fair-price">-</div>
                            </div>

                            <div id="valuation-conclusion" class="comparable-conclusion"></div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 'custom-calculator',
        title: 'Bônus: Calculadora Valuation Express',
        label: 'Calculadora Express',
        content: `
        <div class="sandbox-container calc-express">
            <header class="sandbox-header" style="margin-bottom: 2rem;">
                <h2>Calculadora Universal</h2>
                <div class="author-manifesto" style="padding: 1rem;">
                    <p class="manifesto-credit">Ferramenta Exclusiva idealizada por <strong>Matheus Moreli Durão Silva</strong></p>
                    <p class="manifesto-live" style="margin-top:0.3rem;">Simulador matemático assinado e destravado.</p>
                </div>
            </header>

            <div class="dashboard-grid visible" style="transform:none; margin-top:0;">
                <div class="dashboard-left">
                    <section class="glass-panel parameters-panel">
                        <h3 style="color:var(--text-primary); border-bottom:1px solid var(--border); padding-bottom:1rem; margin-bottom:1.5rem;">Entrada de Balanço Contábil</h3>
                        <div class="form-grid">
                            <div class="input-block">
                                <label>Free Cash Flow Atual (Ano 0)</label>
                                <div class="input-prefix">
                                    <span>R$</span>
                                    <input type="number" id="calc-fcf" value="500" step="10">
                                </div>
                            </div>
                            <div class="input-block">
                                <label>Dívida Total Bruta</label>
                                <div class="input-prefix">
                                    <span>R$</span>
                                    <input type="number" id="calc-debt" value="120" step="10">
                                </div>
                            </div>
                            <div class="input-block">
                                <label>Caixa Equivalente</label>
                                <div class="input-prefix">
                                    <span>R$</span>
                                    <input type="number" id="calc-cash" value="300" step="10">
                                </div>
                            </div>
                            <div class="input-block">
                                <label>Ações em Circulação</label>
                                <div class="input-prefix" style="background:#f1f5f9;">
                                    <input type="number" id="calc-shares" value="10" step="1">
                                    <span style="border-left:1px solid var(--border); font-size:0.8rem; padding-left:0.5rem;">Milhões de Papéis</span>
                                </div>
                            </div>
                        </div>

                        <h3 style="color:var(--text-primary); border-bottom:1px solid var(--border); padding-bottom:1rem; margin:2rem 0 1.5rem;">Custo de Capital Constante</h3>
                        
                        <div class="control-group">
                            <div class="control-header">
                                <span class="control-label">CAGR de Crescimento Projetado (% a.a.)</span>
                                <span class="control-value" id="calc-growthVal">12%</span>
                            </div>
                            <input type="range" id="calc-growthRate" min="-10" max="35" step="0.5" value="12">
                        </div>

                        <div class="control-group">
                            <div class="control-header">
                                <span class="control-label">Taxa Mínima de Atratividade (WACC) (%)</span>
                                <span class="control-value" id="calc-discountVal">14%</span>
                            </div>
                            <input type="range" id="calc-discountRate" min="5" max="30" step="0.5" value="14">
                        </div>

                        <div class="control-group">
                            <div class="control-header">
                                <span class="control-label">Taxa de Perpetuidade (g) (%)</span>
                                <span class="control-value" id="calc-terminalVal">3%</span>
                            </div>
                            <input type="range" id="calc-terminalGrowth" min="0" max="8" step="0.5" value="3">
                        </div>
                    </section>
                </div>

                <aside class="dashboard-right">
                    <section class="glass-panel results-card">
                        <h3>Veredito Matemático (Valuation)</h3>
                        
                        <div class="result-details" style="margin-top: 1.5rem;">
                            <div class="result-item">
                                <span class="rtitle">Valor Global da Empresa (EV)</span>
                                <span class="rval" id="calc-res-ev">Calculando...</span>
                            </div>
                            <div class="result-item">
                                <span class="rtitle">Patrimônio Líquido Residual</span>
                                <span class="rval" id="calc-res-equity">Calculando...</span>
                            </div>
                        </div>

                        <div class="fair-price-container" style="margin-top: 2rem;">
                            <span>Target Price Final por Ação</span>
                            <div class="fair-price" id="calc-res-fair-price" style="font-size:2.2rem;">R$ 0,00</div>
                        </div>

                         <div class="math-box" style="margin-top: 2rem; padding: 1rem; border-left: 3px solid var(--success);">
                            <span class="math-title" style="font-size: 0.7rem; margin-bottom: 0.5rem; text-align:center;">Fórmula do Desconto Residual Aplicada</span>
                            <div class="math-formula" style="font-size: 0.95rem; color: var(--text-primary);">
                                \\[ Target = \\frac{EV - Di \\! vi \\! da + Caixa}{A \\! \\! coes} \\]
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
        `
    }
];
