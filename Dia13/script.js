// Função para formatar o tempo
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Função para atualizar o temporizador
function updateTime() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    // Exibir a hora formatada na tela
    document.getElementById('timer-display').textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateTime, 1000);


updateTime();
