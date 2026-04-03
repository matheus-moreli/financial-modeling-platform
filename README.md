# 📈 Valuation Masterclass - Financial Modeling & DCF Sandbox

<div align="center">
  <p><strong>Uma plataforma educacional em Single Page Application (SPA) para capacitação e simulação de Valuation de Equities via Fluxo de Caixa Descontado (DCF), com relatórios avançados de cobertura analítica.</strong></p>
</div>

## 📌 Escopo do Projeto

Este projeto foi desenhado sob o rigor analítico do mercado financeiro autêntico (Investment Banking & Asset Management). Ele transpõe conhecimentos teóricos de avaliação de empresas em uma aplicação interativa que permite:

- Uma jornada educacional profunda por **5 Discliplinas Analíticas** (Moat, FCF, Cost of Equity/WACC, CAPM e Terminal Value).
- Renderização visual das fórnulas ativas (via LaTeX) simulando documentos reais de modelagem preditiva e Sell-Side math.
- Um **Laboratório Interativo Sandbox** com cruzamentos empíricos utilizando dados oficiais históricos extraídos de empresas da B3.

## 📊 Features e Mecânica Financeira (Sandbox)

O módulo Sandbox atua como hub principal de simulação:
- **Teses do Autor (My Evaluation):** Documentos de cobertura (Equity Research) gerados sob premissas rigorosas em tempo real (data referenciada via Javascript Engine) sobre teses base, bear e bull.
- **Micro-Dashboards:** Tabelas estressadas projetando margens EBITDA, FCFs Normalizados e regressões da Selic ao longo de cenários (A+1 a A+5).
- **Controladores Interativos:** Sliders controlando premissas como WACC (%), Terminal Growth (g) e CAGR FCF (%) para observar elásticos instantâneos atuar sobre Enterprise Value e a Cotação-Alvo.

## 🛠️ Tecnologias Utilizadas

Este projeto foi intencionalmente construído com zero frameworks de ponta, baseando-se estritamente sobre a "Vanilla Web" para demonstrar arquitetura fundamental pura:

- **HTML5 & CSS3:** Arquitetura corporativa em Premium Light Mode com painéis *Glassmorphism*. 
- **ES6 JavaScript Modules:** Controle completo de Rotas SPA, engine de navegação matemática e injeção do DOM.
- **Integração de Third-Parties:** 
  - **MathJax:** Tipografia hiper-realística para LaTeX Matemático das equações algorítmicas de Valuation.
  - **Clearbit Logo API:** Resolução perfeita dos identitários de companhias da B3 (Petrobras, Vale, Itaú).

---
> Elaborado, Modelado Analiticamente e Codificado sob Alto Rigor por **Matheus Moreli Durão Silva**
