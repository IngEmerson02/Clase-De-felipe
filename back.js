document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    

    const applyMode = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️ Modo Claro';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            toggleButton.textContent = '🌙 Modo Oscuro';
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        applyMode(true);
    } else {
        
        applyMode(false); 
    }

    
    toggleButton.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        applyMode(!isCurrentlyDark);
    });
});