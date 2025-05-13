function showSpiritualEmergency() {
    const section = document.getElementById('spiritual-emergency');
    section.classList.remove('d-none');
}

function sendToWhatsApp() {
    const mood = document.getElementById('mood-slider').value;
    const message = document.getElementById('message-input').value;
    const moodText = mood < 20 ? 'Desequilíbrio' :
                     mood < 40 ? 'Inquietação' :
                     mood < 60 ? 'Equilíbrio' :
                     mood < 80 ? 'Harmonia' :
                     'Paz';
    const whatsappMessage = encodeURIComponent(
        `Pronto Socorro Espiritual\nEstado: ${moodText}\nMensagem: ${message || 'Nenhuma mensagem fornecida'}`
    );
    const whatsappLink = `https://wa.me/5521972280397?text=${whatsappMessage}`;
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

function shareSite() {
    const shareData = {
        title: 'Sacerdotisa Vanidoya',
        text: 'Conheça o trabalho espiritual da Sacerdotisa Vanidoya!',
        url: window.location.href
    };
    if (navigator.share) {
        navigator.share(shareData).catch(err => {
            console.error('Erro ao compartilhar: ', err);
        });
    } else {
        navigator.clipboard.writeText(shareData.url).then(() => {
            alert('Link do site copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar: ', err);
            alert('Falha ao copiar o link do site.');
        });
    }
}