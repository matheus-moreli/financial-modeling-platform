import { projectFCF } from '../core/projections.js';
import { calculateDCF } from '../core/dcf.js';
import { renderProjectionsChart, renderValuationResult } from './render.js';

let currentState = {
    company: null,
    growthRate: 0.05,
    discountRate: 0.10,
    terminalRate: 0.03
};

// Re-liga Eventos do Sandbox APÓS ele ser montado pelo CourseRender
export function initSandboxInteractions(onUpdateCallback) {
    const bindSlider = (id, valId, isPercentage = true) => {
        const slider = document.getElementById(id);
        const valDisplay = document.getElementById(valId);
        if(!slider) return;

        // Sync visual UI state na inicialização da troca de abas caso persista
        let currentV = 0;
        if (id === 'growthRate') currentV = currentState.growthRate * 100;
        if (id === 'discountRate') currentV = currentState.discountRate * 100;
        if (id === 'terminalGrowth') currentV = currentState.terminalRate * 100;
        slider.value = currentV;
        valDisplay.innerText = `${currentV}${isPercentage ? '%' : ''}`;
        
        slider.addEventListener('input', (e) => {
            const v = parseFloat(e.target.value);
            valDisplay.innerText = `${v}${isPercentage ? '%' : ''}`;
            
            if (id === 'growthRate') currentState.growthRate = v / 100;
            if (id === 'discountRate') currentState.discountRate = v / 100;
            if (id === 'terminalGrowth') currentState.terminalRate = v / 100;
            
            // Segurança Matemática: Desconto > Crescimento Terminal
            if (currentState.discountRate <= currentState.terminalRate) {
                currentState.terminalRate = currentState.discountRate - 0.01;
                document.getElementById('terminalGrowth').value = (currentState.terminalRate * 100).toFixed(1);
                document.getElementById('terminalVal').innerText = `${(currentState.terminalRate * 100).toFixed(1)}%`;
            }

            if (currentState.company) {
                onUpdateCallback(); // Refaz os graficos/preços vivos
            }
        });
    };

    bindSlider('growthRate', 'growthVal');
    bindSlider('discountRate', 'discountVal');
    bindSlider('terminalGrowth', 'terminalVal');
}

export function executeValuationPipeline(companyData) {
    if (!companyData) return;

    // Pega ultimo histórico
    const lastFCF = companyData.fcf[companyData.fcf.length - 1];
    
    // Projeta
    const projectedFCF = projectFCF(lastFCF, currentState.growthRate, 5);

    // Valua
    const valuationResults = calculateDCF(projectedFCF, currentState.discountRate, currentState.terminalRate);

    // Re-Pinta Tela
    renderProjectionsChart(projectedFCF);
    renderValuationResult(valuationResults, companyData);
}

export function setCurrentCompany(company) {
    currentState.company = company;
}

export function initCalculatorInteractions() {
    const bindInput = (id, callback) => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('input', callback);
    };
    
    // Bind all inputs
    const ids = ['calc-fcf', 'calc-debt', 'calc-cash', 'calc-shares', 'calc-growthRate', 'calc-discountRate', 'calc-terminalGrowth'];
    
    const formatCurr = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 1 }).format(val);
    const formatPri = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);

    const updateUiAndRecalc = () => {
        // Sync values
        const gLabel = document.getElementById('calc-growthVal');
        if(gLabel) gLabel.innerText = document.getElementById('calc-growthRate').value + '%';
        const dLabel = document.getElementById('calc-discountVal');
        if(dLabel) dLabel.innerText = document.getElementById('calc-discountRate').value + '%';
        const tLabel = document.getElementById('calc-terminalVal');
        if(tLabel) tLabel.innerText = document.getElementById('calc-terminalGrowth').value + '%';
        
        // Fetch values
        const fcf0 = parseFloat(document.getElementById('calc-fcf').value) || 0;
        const debt = parseFloat(document.getElementById('calc-debt').value) || 0;
        const cash = parseFloat(document.getElementById('calc-cash').value) || 0;
        const shares = parseFloat(document.getElementById('calc-shares').value) || 1;
        
        const g = parseFloat(document.getElementById('calc-growthRate').value) / 100;
        const wacc = parseFloat(document.getElementById('calc-discountRate').value) / 100;
        const terminalG = parseFloat(document.getElementById('calc-terminalGrowth').value) / 100;
        
        // Calculate
        const projected = [];
        let currentFcf = fcf0;
        for(let i=1; i<=5; i++) {
            currentFcf = currentFcf * (1 + g);
            projected.push(currentFcf);
        }
        
        const res = calculateDCF(projected, wacc, terminalG);
        
        const equity = res.enterpriseValue - debt + cash;
        const price = equity > 0 ? equity / shares : 0;
        
        const evEl = document.getElementById('calc-res-ev');
        if(evEl) evEl.innerText = formatCurr(res.enterpriseValue);
        
        const eqEl = document.getElementById('calc-res-equity');
        if(eqEl) eqEl.innerText = formatCurr(equity);
        
        const priceEl = document.getElementById('calc-res-fair-price');
        if(priceEl) priceEl.innerText = formatPri(price);
    };

    ids.forEach(id => bindInput(id, updateUiAndRecalc));
    updateUiAndRecalc(); // Initial call
}
