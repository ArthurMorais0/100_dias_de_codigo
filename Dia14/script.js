const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    
    body.classList.toggle('dark-theme');

    
    if (body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Alternar para Tema Light';
    } else {
        toggleButton.textContent = 'Alternar para Tema Dark';
    }
});
