const PIX_CODE = '00020101021126330014br.gov.bcb.pix0111126445857675204000053039865802BR5919Vanise Pinto Telles6014Rio De Janeiro62070503***630431D6';
const LIGHTNING_CODE = 'lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkwct40fukgmm4vfkx2wps564ys2';

function copyToClipboard(text) {
    // Função para mostrar feedback visual
    function showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.style.position = 'fixed';
        feedback.style.bottom = '20px';
        feedback.style.left = '50%';
        feedback.style.transform = 'translateX(-50%)';
        feedback.style.backgroundColor = '#4CAF50';
        feedback.style.color = 'white';
        feedback.style.padding = '10px 20px';
        feedback.style.borderRadius = '5px';
        feedback.style.zIndex = '1000';
        feedback.textContent = message;
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 2000);
    }

    // Tenta usar a API moderna de clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showFeedback('Código copiado com sucesso!');
            })
            .catch(err => {
                console.error('Erro ao copiar com navigator.clipboard:', err);
                // Fallback para método alternativo
                fallbackCopy(text);
            });
    } else {
        // Fallback imediato se navigator.clipboard não estiver disponível
        fallbackCopy(text);
    }

    // Método alternativo para copiar texto
    function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showFeedback('Código copiado com sucesso!');
            } else {
                showFeedback('Erro ao copiar o código.');
            }
        } catch (err) {
            console.error('Erro no fallback de cópia:', err);
            showFeedback('Erro ao copiar o código.');
        }

        document.body.removeChild(textArea);
    }
}

function showSpiritualEmergency() {
    const emergencyDiv = document.getElementById('spiritual-emergency');
    emergencyDiv.classList.toggle('d-none');
}

function sendToWhatsApp() {
    const mood = document.getElementById('mood-slider').value;
    const message = document.getElementById('message-input').value;
    const text = `Olá, Vani! Estou me sentindo em ${mood}% de paz. ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5521972280397?text=${encodedText}`, '_blank');
}

function shareSite() {
    if (navigator.share) {
        navigator.share({
            title: 'Sacerdotisa Vani D\'Oyá',
            text: 'Conheça o trabalho espiritual da Sacerdotisa Vani D\'Oyá!',
            url: window.location.href
        }).catch(err => console.error('Erro ao compartilhar:', err));
    } else {
        alert('Compartilhamento não suportado neste navegador.');
    }
}