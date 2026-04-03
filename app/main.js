import { initCourseUI } from '../ui/courseRender.js';
import { companies } from '../core/data.js';
import { renderCompanies, renderHistoricalData } from '../ui/render.js';
import { initSandboxInteractions, setCurrentCompany, executeValuationPipeline } from '../ui/interactions.js';

let activeCompanyId = null;

// The main loop that wires the sandbox UI when the user navigates to it
function mountSandboxScope() {
    initSandboxInteractions(() => {
        if (activeCompanyId) {
            executeValuationPipeline(companies[activeCompanyId]);
        }
    });

    // Auto-Seleciona a primeira empresa (Petrobras) ao inves de deixar nulo
    // Pra garantir que os graficos sempre apareçam de cara
    activeCompanyId = 'petrobras';
    handleCompanySelection(activeCompanyId);
}

function handleCompanySelection(companyId) {
    activeCompanyId = companyId;
    const company = companies[companyId];
    
    setCurrentCompany(company);
    renderCompanies(companies, activeCompanyId, handleCompanySelection);
    renderHistoricalData(company);

    const dash = document.getElementById('main-dashboard');
    if (dash) {
        dash.classList.add('visible');
    }

    executeValuationPipeline(company);
}

document.addEventListener('DOMContentLoaded', () => {
    // Liga a plataforma de curso, e avisa o App quando o template do sandbox surgir no DOM
    initCourseUI(mountSandboxScope);
});
