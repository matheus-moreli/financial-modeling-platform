export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL', maximumFractionDigits: 1
    }).format(value);
};

export const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2
    }).format(value);
};

export function renderCompanies(companies, selectedId, onSelectCallback) {
    const container = document.getElementById('companies-container');
    if(!container) return; // Se nao estiver no dom

    container.innerHTML = '';

    Object.values(companies).forEach(company => {
        const div = document.createElement('div');
        div.className = `company-card ${company.id === selectedId ? 'active' : ''}`;
        
        // Logotipo da Empresa Inserido Aqui!
        div.innerHTML = `
            ${company.logoUrl ? `<img src="${company.logoUrl}" alt="Logo ${company.name}" class="company-logo">` : ''}
            <h3>${company.name}</h3>
            <p>${company.sector}</p>
        `;
        div.addEventListener('click', () => onSelectCallback(company.id));
        container.appendChild(div);
    });

    if (selectedId && companies[selectedId]) {
        const thesisPanel = document.getElementById('author-thesis-panel');
        if (thesisPanel) {
            thesisPanel.style.display = 'block';
            thesisPanel.innerHTML = companies[selectedId].authorEvaluation;
            if (window.MathJax) {
                window.MathJax.typesetPromise();
            }
        }
    }

    // Injeção da Data em Tempo Real do Sistema
    const dateBadge = document.getElementById('live-date-badge');
    if (dateBadge) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        dateBadge.innerText = new Date().toLocaleDateString('pt-BR', options);
    }
}

export function renderHistoricalData(company) {
    const tbody = document.getElementById('historical-data-body');
    if(!tbody) return;
    tbody.innerHTML = '';

    const createRow = (label, dataArray, isHighlight = false) => {
        const tr = document.createElement('tr');
        if(isHighlight) {
            tr.style.fontWeight = 'bold';
            tr.style.color = 'var(--accent-blue)';
            tr.style.background = 'var(--accent-light)';
        }
        tr.innerHTML = `<td>${label}</td>` + dataArray.map(v => `<td>${v}</td>`).join('');
        return tr;
    };

    tbody.appendChild(createRow('Receita Líquida', company.revenue));
    tbody.appendChild(createRow('Lucro Líquido Contábil', company.profit));
    tbody.appendChild(createRow('Dívida Total Histórica', company.debt));
    tbody.appendChild(createRow('Free Cash Flow (FCF)', company.fcf, true)); // Highlight
}

export function renderProjectionsChart(projections) {
    const chartContainer = document.getElementById('fcf-chart');
    if(!chartContainer) return;
    chartContainer.innerHTML = '';
    
    const maxVal = Math.max(...projections) || 1;
    
    projections.forEach((val, index) => {
        const heightPercent = Math.max(10, (val / maxVal) * 100); 
        
        const barContainer = document.createElement('div');
        barContainer.className = 'fcf-bar-container';

        const bar = document.createElement('div');
        bar.className = 'fcf-bar';
        bar.style.height = `${heightPercent}%`;
        bar.setAttribute('data-value', val.toFixed(1));

        const label = document.createElement('div');
        label.className = 'fcf-label';
        label.innerText = `Ano ${index + 1}`;

        barContainer.appendChild(bar);
        barContainer.appendChild(label);
        chartContainer.appendChild(barContainer);
    });
}

export function renderValuationResult(results, company) {
    const { pv, pvTV, enterpriseValue } = results;
    
    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if(!el) return;
        el.innerText = val;
    };

    setVal('res-pv', formatCurrency(pv));
    setVal('res-tv', formatCurrency(pvTV));
    setVal('res-ev', formatCurrency(enterpriseValue));

    // Deduzindo a Dívida na Vida Real
    const currentDebt = company.debt[company.debt.length - 1];
    const equityVal = enterpriseValue - currentDebt;
    
    let fairPrice = 0;
    if (equityVal > 0) {
        fairPrice = equityVal / company.sharesOutstanding;
    }

    setVal('res-fair-price', formatPrice(fairPrice));

    // Comparáveis Visuais
    const concl = document.getElementById('valuation-conclusion');
    if(!concl) return;
    concl.innerHTML = '';
    
    // Label
    const curP = document.createElement('div');
    curP.style.fontSize = '0.8rem';
    curP.style.color = 'var(--text-muted)';
    curP.innerText = `Cotação de Fechamento Histórica B3: ${formatPrice(company.currentPrice)}`;
    concl.appendChild(curP);

    if (fairPrice > company.currentPrice) {
        const upside = ((fairPrice - company.currentPrice) / company.currentPrice) * 100;
        concl.className = 'comparable-conclusion undervalued';
        concl.innerHTML += `Ação Subavaliada. Desconto / Margem de Segurança: ${upside.toFixed(1)}%`;
    } else {
        const downside = ((company.currentPrice - fairPrice) / company.currentPrice) * 100;
        concl.className = 'comparable-conclusion overvalued';
        concl.innerHTML += `Ação Superavaliada ou Risco Totalmente Precificado. Downside Estimado: ${downside.toFixed(1)}%`;
    }
}
