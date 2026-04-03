import { courseModules } from '../core/content.js';

let currentModuleIndex = 0;
let onSandboxRenderCallback = null;

export function initCourseUI(onRenderSandbox) {
    onSandboxRenderCallback = onRenderSandbox;
    renderSidebarNav();
    navigateToModule(0);

    document.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouseX', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouseY', `${e.clientY}px`);
    });
}

function renderSidebarNav() {
    const navContainer = document.getElementById('course-sidebar-nav');
    navContainer.innerHTML = '';

    courseModules.forEach((mod, index) => {
        const item = document.createElement('div');
        item.className = `nav-item ${index === currentModuleIndex ? 'active' : ''}`;
        
        if (index < currentModuleIndex) {
            item.classList.add('completed');
        }

        item.innerHTML = `
            <div class="nav-index">${index + 1}</div>
            <div class="nav-title">${mod.label}</div>
        `;

        item.addEventListener('click', () => navigateToModule(index));
        navContainer.appendChild(item);
    });

    const progressPercent = Math.round((currentModuleIndex / (courseModules.length - 1)) * 100);
    document.getElementById('global-progress-value').innerText = `${progressPercent}%`;
    document.getElementById('global-progress-fill').style.width = `${progressPercent}%`;
}

function navigateToModule(index) {
    currentModuleIndex = index;
    const mod = courseModules[index];
    renderSidebarNav(); 

    const mainArea = document.getElementById('main-view');
    mainArea.innerHTML = ''; 

    mainArea.scrollTo({ top: 0, behavior: 'smooth' });

    if (mod.id === 'sandbox') {
        renderSandboxNode(mod.content, mainArea);
    } else if (mod.id === 'custom-calculator') {
        renderCalculatorNode(mod.content, mainArea);
    } else {
        renderTheoryNode(mod.content, mainArea);
    }

    // Aciona o Render LaTeX se MathJax estiver carregado
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
}

function renderTheoryNode(htmlContent, container) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlContent;

    const btnContainer = document.createElement('div');
    btnContainer.className = 'lesson-nav-buttons';
    
    if (currentModuleIndex > 0) {
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-secondary';
        backBtn.innerText = '← Lição Anterior';
        backBtn.onclick = () => navigateToModule(currentModuleIndex - 1);
        btnContainer.appendChild(backBtn);
    } else {
        btnContainer.appendChild(document.createElement('div'));
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.innerText = 'Continuar Aprendendo →';
    nextBtn.onclick = () => navigateToModule(currentModuleIndex + 1);
    btnContainer.appendChild(nextBtn);

    const lessonBox = wrapper.querySelector('.lesson-container');
    if(lessonBox) lessonBox.appendChild(btnContainer);

    container.appendChild(wrapper);
}

function renderSandboxNode(htmlContent, container) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlContent;
    container.appendChild(wrapper);

    if (onSandboxRenderCallback) {
        onSandboxRenderCallback();
    }
}

function renderCalculatorNode(htmlContent, container) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlContent;
    container.appendChild(wrapper);

    // Call dynamic import to interactions for isolated logic
    import('./interactions.js').then(module => {
        module.initCalculatorInteractions();
    });
}
