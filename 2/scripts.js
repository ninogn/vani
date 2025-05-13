function showSpiritualEmergency() {
    const section = document.getElementById('spiritual-emergency');
    section.classList.remove('d-none');
}

function sendToWhatsApp() {
    const mood = document.getElementById('mood-slider').value;
    const message = document.getElementById('message-input').value;
    const moodText = mood < 20 ? 'Extrema Angústia' :
                     mood < 40 ? 'Muito Desconforto' :
                     mood < 60 ? 'Equilíbrio' :
                     mood < 80 ? 'Bem-Estar' : 'Euforia';
    const whatsappMessage = encodeURIComponent(
        `Pronto Socorro Espiritual\nEstado: ${moodText}\nMensagem: ${message || 'Nenhuma mensagem fornecida'}`
    );
    const whatsappLink = `https://wa.me/21972280397?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Código PIX copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        alert('Falha ao copiar o código PIX.');
    });
}