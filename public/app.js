let chapters = [];

async function startStructure() {
    const idea = document.getElementById('idea-input').value;
    const response = await fetch('/api/generate-structure', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ idea })
    });
    chapters = await response.json();
    renderChapters();
    showStep(2);
}

function renderChapters() {
    const container = document.getElementById('chapters-container');
    container.innerHTML = '';
    chapters.forEach((ch, index) => {
        container.innerHTML += `
            <div class="chapter-card">
                <input value="${ch.title}" onchange="chapters[${index}].title = this.value">
                <textarea onchange="chapters[${index}].description = this.value">${ch.description}</textarea>
                <button onclick="moveUp(${index})">⬆️</button>
                <button onclick="removeChapter(${index})">🗑️</button>
            </div>
        `;
    });
}

function showStep(stepNum) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`step-${stepNum}`).classList.remove('hidden');
}

function pay(format) {
    alert(`Redirigiendo a PayPal (ballstefanie7@gmail.com) para pago de exportación en ${format}...`);
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=ballstefanie7@gmail.com&item_name=Exportacion_${format}&amount=5.00&currency_code=USD`;
}

// Aquí añadirías funciones de mover, borrar y el fetch de write-book similar al de estructura.
