const PIX_CODE = '00020101021126330014br.gov.bcb.pix0111126445857675204000053039865802BR5919Vanise Pinto Telles6014Rio De Janeiro62070503***630431D6';
const LIGHTNING_CODE = 'lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkwct40fukgmm4vfkx2wps564ys2';

// Traduções
const translations = {
    pt: {
        profileTitle: 'Sacerdotisa Vani D\'Oyá',
        profileSubtitle: 'Guia Espiritual',
        spiritualEmergencyButton: 'Pronto Socorro Espiritual',
        emergencyTitle: 'Pronto Socorro Espiritual',
        emergencySubtitle: 'Como está?',
        sliderDesequilibrio: 'Desequilíbrio',
        sliderPaz: 'Paz',
        moodVeryUnbalanced: 'Muito instável',
        moodUnbalanced: 'Instável',
        moodNeutral: 'Neutro',
        moodBalanced: 'Equilibrado',
        moodPeaceful: 'Em paz',
        messagePlaceholder: 'Compartilhe seus sentimentos',
        whatsappButton: 'Enviar a Vani',
        modalTitle: 'Contribua',
        pixInstruction: 'Clique para copiar o código PIX',
        lightningInstruction: 'Clique para copiar o código Lightning',
        forestMedicineLink: 'As medicinas da floresta são para você? Descubra!'
    },
    en: {
        profileTitle: 'Sacerdotisa Vani D\'Oyá',
        profileSubtitle: 'Spiritual Guide',
        spiritualEmergencyButton: 'Spiritual Emergency Aid',
        emergencyTitle: 'Spiritual Emergency Aid',
        emergencySubtitle: 'How do you feel?',
        sliderDesequilibrio: 'Imbalance',
        sliderPaz: 'Peace',
        moodVeryUnbalanced: 'Very Unstable',
        moodUnbalanced: 'Unstable',
        moodNeutral: 'Neutral',
        moodBalanced: 'Balanced',
        moodPeaceful: 'Peaceful',
        messagePlaceholder: 'Share your feelings',
        whatsappButton: 'Send to Vani',
        modalTitle: 'Contribute',
        pixInstruction: 'Click to copy the PIX code',
        lightningInstruction: 'Click to copy the Lightning code',
        forestMedicineLink: 'Are forest medicines right for you? Find out!'
    },
    es: {
        profileTitle: 'Sacerdotisa Vani D\'Oyá',
        profileSubtitle: 'Guía Espiritual',
        spiritualEmergencyButton: 'Ayuda de Emergencia Espiritual',
        emergencyTitle: 'Ayuda de Emergencia Espiritual',
        emergencySubtitle: '¿Cómo te sientes?',
        sliderDesequilibrio: 'Desequilibrio',
        sliderPaz: 'Paz',
        moodVeryUnbalanced: 'Muy inestable',
        moodUnbalanced: 'Inestable',
        moodNeutral: 'Neutral',
        moodBalanced: 'Equilibrado',
        moodPeaceful: 'En paz',
        messagePlaceholder: 'Comparte tus sentimientos',
        whatsappButton: 'Enviar a Vani',
        modalTitle: 'Contribuir',
        pixInstruction: 'Toca para copiar el código PIX',
        lightningInstruction: 'Toca para copiar el código Lightning',
        forestMedicineLink: '¿Son las medicinas de la selva para ti? ¡Descúbrelo!'
    }
};

let currentLanguage = 'pt'; // Idioma padrão

// Função para determinar o estado de humor com base no valor do slider
function getMoodState(value) {
    const langData = translations[currentLanguage] || translations['pt'];
    if (value <= 20) return langData.moodVeryUnbalanced;
    if (value <= 40) return langData.moodUnbalanced;
    if (value <= 60) return langData.moodNeutral;
    if (value <= 80) return langData.moodBalanced;
    return langData.moodPeaceful;
}

// Função para obter o estado de humor em português (para envio à Vani)
function getMoodStateInPortuguese(value) {
    const langData = translations['pt'];
    if (value <= 20) return langData.moodVeryUnbalanced;
    if (value <= 40) return langData.moodUnbalanced;
    if (value <= 60) return langData.moodNeutral;
    if (value <= 80) return langData.moodBalanced;
    return langData.moodPeaceful;
}

// Atualiza o texto do estado de humor dinamicamente
function updateMoodState() {
    const slider = document.getElementById('mood-slider');
    const moodState = document.getElementById('mood-state');
    if (slider && moodState) {
        const value = parseInt(slider.value);
        moodState.textContent = getMoodState(value);
    }
}

// Função para definir o idioma
function setLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    updateMoodState(); // Atualiza o estado de humor ao mudar o idioma
    localStorage.setItem('language', lang); // Salva a preferência do usuário
}

// Detecção automática do idioma do dispositivo
function detectLanguage() {
    const userLanguage = navigator.language.split('-')[0]; // Ex.: "pt-BR" -> "pt"
    if (translations[userLanguage]) {
        currentLanguage = userLanguage;
    } else {
        currentLanguage = 'pt'; // Fallback para português se o idioma não for suportado
    }
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage; // Prioriza a escolha manual do usuário
    }
    updateContent();
    updateMoodState();
}

// Atualiza o conteúdo com base no idioma
function updateContent() {
    const langData = translations[currentLanguage] || translations['pt'];
    document.getElementById('profile-title').textContent = langData.profileTitle;
    document.getElementById('profile-subtitle').textContent = langData.profileSubtitle;
    document.getElementById('spiritual-emergency-button').textContent = langData.spiritualEmergencyButton;
    document.getElementById('emergency-title').textContent = langData.emergencyTitle;
    document.getElementById('emergency-subtitle').textContent = langData.emergencySubtitle;
    document.getElementById('slider-desequilibrio').textContent = langData.sliderDesequilibrio;
    document.getElementById('slider-paz').textContent = langData.sliderPaz;
    document.getElementById('message-input').placeholder = langData.messagePlaceholder;
    document.getElementById('whatsapp-button').textContent = langData.whatsappButton;
    document.getElementById('modal-title').textContent = langData.modalTitle;
    document.getElementById('pix-instruction').textContent = langData.pixInstruction;
    document.getElementById('lightning-instruction').textContent = langData.lightningInstruction;
    document.getElementById('forest-medicine-link').title = langData.forestMedicineLink;
    document.getElementById('forest-medicine-link').setAttribute('data-bs-toggle', 'tooltip');
    document.getElementById('forest-medicine-link').setAttribute('data-bs-placement', 'bottom');
    document.getElementById('forest-medicine-link').setAttribute('data-bs-custom-class', 'custom-tooltip');
    document.getElementById('forest-medicine-link').setAttribute('data-bs-html', 'true');
}

// Função de cópia para a área de transferência
function copyToClipboard(text) {
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

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showFeedback('Código copiado!');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }

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
                showFeedback('Código copiado!');
            } else {
                showFeedback('Erro ao copiar.');
            }
        } catch (err) {
            console.error('Erro no fallback:', err);
            showFeedback('Erro ao copiar.');
        }

        document.body.removeChild(textArea);
    }
}

function showSpiritualEmergency() {
    const emergencyDiv = document.getElementById('spiritual-emergency');
    if (emergencyDiv) {
        emergencyDiv.classList.toggle('d-none');
        updateMoodState();
    }
}

function sendToWhatsApp() {
    const moodValue = document.getElementById('mood-slider')?.value || 50;
    const moodState = getMoodStateInPortuguese(parseInt(moodValue));
    const message = document.getElementById('message-input')?.value || '';
    const text = `Olá, Vani! Estou me sentindo ${moodState.toLowerCase()}. ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5521972280397?text=${encodedText}`, '_blank');
}

function shareSite() {
    if (navigator.share) {
        navigator.share({
            title: (translations[currentLanguage] || translations['pt']).profileTitle,
            text: 'Explore Vani D\'Oyá\'s spiritual work!',
            url: window.location.href
        }).catch(err => console.error('Erro ao compartilhar:', err));
    } else {
        alert('Compartilhamento indisponível.');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    detectLanguage();
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});