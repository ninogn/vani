const PIX_CODE = "00020101021126330014br.gov.bcb.pix0111126445857675204000053039865802BR5919Vanise Pinto Telles6014Rio De Janeiro62070503***630431D6";
const LIGHTNING_CODE = "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkwct40fukgmm4vfkx2wps564ys2";

// Traduções
const translations = {
    pt: {
        profileTitle: "Sacerdotisa Vani D'Oyá",
        profileSubtitle: "Guia Espiritual | Conexão e Transformação",
        spiritualEmergencyButton: "Pronto Socorro Espiritual",
        emergencyTitle: "Pronto Socorro Espiritual",
        emergencySubtitle: "Como você está agora?",
        sliderDesequilibrio: "Desequilíbrio",
        sliderPaz: "Paz",
        moodVeryUnbalanced: "Muito instável",
        moodUnbalanced: "Instável",
        moodNeutral: "Neutro",
        moodBalanced: "Equilibrado",
        moodPeaceful: "Em paz",
        messagePlaceholder: "Compartilhe seus sentimentos",
        whatsappButton: "Enviar a Vani",
        modalTitle: "Contribua",
        pixInstruction: "Clique para copiar o código PIX",
        lightningInstruction: "Clique para copiar o código Lightning",
        shareTitle: "Compartilhar",
        shareText: "Explore o trabalho espiritual da Sacerdotisa Vani D'Oyá!",
        shareUnavailable: "Compartilhamento indisponível.",
        forestMedicineLink: "As medicinas da floresta são para você? Descubra!",
        forestMedicineModalLabel: "Medicinas da Floresta",
        forestMedicineText: "As medicinas da floresta são um presente para todos, mas nem todos estão prontos para elas. Quer descobrir se esse é o seu momento?",
        forestMedicineButton: "Descubra Agora"
    },
    en: {
        profileTitle: "Sacerdotisa Vani D'Oyá",
        profileSubtitle: "Spiritual Guide | Connection and Transformation",
        spiritualEmergencyButton: "Spiritual Emergency Aid",
        emergencyTitle: "Spiritual Emergency Aid",
        emergencySubtitle: "How do you feel?",
        sliderDesequilibrio: "Imbalance",
        sliderPaz: "Peace",
        moodVeryUnbalanced: "Very Unstable",
        moodUnbalanced: "Unstable",
        moodNeutral: "Neutral",
        moodBalanced: "Balanced",
        moodPeaceful: "Peaceful",
        messagePlaceholder: "Share your feelings",
        whatsappButton: "Send to Vani",
        modalTitle: "Contribute",
        pixInstruction: "Click to copy the PIX code",
        lightningInstruction: "Click to copy the Lightning code",
        shareTitle: "Share",
        shareText: "Explore Vani D'Oyá's spiritual work!",
        shareUnavailable: "Sharing unavailable.",
        forestMedicineLink: "Are forest medicines right for you? Find out!",
        forestMedicineModalLabel: "Forest Medicines",
        forestMedicineText: "Forest medicines are a gift for everyone, but not everyone is ready for them. Want to find out if this is your time?",
        forestMedicineButton: "Find Out Now"
    },
    es: {
        profileTitle: "Sacerdotisa Vani D'Oyá",
        profileSubtitle: "Guía Espiritual | Conexión y Transformación",
        spiritualEmergencyButton: "Ayuda de Emergencia Espiritual",
        emergencyTitle: "Ayuda de Emergencia Espiritual",
        emergencySubtitle: "¿Cómo te sientes?",
        sliderDesequilibrio: "Desequilibrio",
        sliderPaz: "Paz",
        moodVeryUnbalanced: "Muy inestable",
        moodUnbalanced: "Inestable",
        moodNeutral: "Neutral",
        moodBalanced: "Equilibrado",
        moodPeaceful: "En paz",
        messagePlaceholder: "Comparte tus sentimientos",
        whatsappButton: "Enviar a Vani",
        modalTitle: "Contribuir",
        pixInstruction: "Toca para copiar el código PIX",
        lightningInstruction: "Toca para copiar el código Lightning",
        shareTitle: "Compartir",
        shareText: "¡Explora el trabajo espiritual de la Sacerdotisa Vani D'Oyá!",
        shareUnavailable: "Compartir no disponible.",
        forestMedicineLink: "¿Son las medicinas de la selva para ti? ¡Descúbrelo!",
        forestMedicineModalLabel: "Medicinas de la Selva",
        forestMedicineText: "Las medicinas de la selva son un regalo para todos, pero no todos están listos para ellas. ¿Quieres descubrir si es tu momento?",
        forestMedicineButton: "Descúbrelo Ahora"
    }
};

let currentLanguage = "pt"; // Idioma padrão

// Função para determinar o estado de humor com base no valor do slider
function getMoodState(value) {
    const langData = translations[currentLanguage] || translations["pt"];
    if (value <= 20) return langData.moodVeryUnbalanced;
    if (value <= 40) return langData.moodUnbalanced;
    if (value <= 60) return langData.moodNeutral;
    if (value <= 80) return langData.moodBalanced;
    return langData.moodPeaceful;
}

// Função para obter o estado de humor em português (para envio à Vani)
function getMoodStateInPortuguese(value) {
    const langData = translations["pt"];
    if (value <= 20) return langData.moodVeryUnbalanced;
    if (value <= 40) return langData.moodUnbalanced;
    if (value <= 60) return langData.moodNeutral;
    if (value <= 80) return langData.moodBalanced;
    return langData.moodPeaceful;
}

// Atualiza o texto do estado de humor dinamicamente
function updateMoodState() {
    const slider = document.getElementById("mood-slider");
    const moodState = document.getElementById("mood-state");
    if (slider && moodState) {
        const value = parseInt(slider.value);
        moodState.textContent = getMoodState(value);
    }
}

// Função para definir o idioma
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    currentLanguage = lang;
    updateContent();
    updateMoodState();
    localStorage.setItem("language", lang);
}

// Detecção automática do idioma do dispositivo
function detectLanguage() {
    console.log('Detecting language');
    const userLanguage = navigator.language.split("-")[0];
    if (translations[userLanguage]) {
        currentLanguage = userLanguage;
    } else {
        currentLanguage = "pt";
    }
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    updateContent();
    updateMoodState();
}

// Atualiza o conteúdo com base no idioma
function updateContent() {
    console.log('Updating content for language:', currentLanguage);
    const langData = translations[currentLanguage] || translations["pt"];
    const elements = [
        { id: "profile-title", text: langData.profileTitle },
        { id: "profile-subtitle", text: langData.profileSubtitle },
        { id: "spiritual-emergency-button", text: langData.spiritualEmergencyButton },
        { id: "emergency-title", text: langData.emergencyTitle },
        { id: "emergency-subtitle", text: langData.emergencySubtitle },
        { id: "slider-desequilibrio", text: langData.sliderDesequilibrio },
        { id: "slider-paz", text: langData.sliderPaz },
        { id: "message-input", placeholder: langData.messagePlaceholder },
        { id: "whatsapp-button", text: langData.whatsappButton },
        { id: "modal-title", text: langData.modalTitle },
        { id: "pix-instruction", text: langData.pixInstruction },
        { id: "lightning-instruction", text: langData.lightningInstruction },
        { id: "share-button", title: langData.shareTitle },
        { id: "forest-medicine-link", title: langData.forestMedicineLink },
        { id: "forestMedicineModalLabel", text: langData.forestMedicineModalLabel },
        { id: "forest-medicine-text", text: langData.forestMedicineText },
        { id: "forest-medicine-button", text: langData.forestMedicineButton }
    ];

    elements.forEach(({ id, text, placeholder, title }) => {
        const element = document.getElementById(id);
        if (element) {
            if (placeholder) {
                element.placeholder = text || "";
                element.value = "";
            } else if (title) {
                element.title = text || "";
                element.setAttribute("data-bs-toggle", "tooltip");
                element.setAttribute("data-bs-placement", "bottom");
                element.setAttribute("data-bs-custom-class", "custom-tooltip");
                element.setAttribute("data-bs-html", "true");
            } else {
                element.textContent = text || "";
            }
        } else {
            console.warn(`Elemento com id ${id} não encontrado`);
        }
    });
}

// Função de cópia para a área de transferência
function copyToClipboard(text) {
    function showFeedback(message) {
        const feedback = document.createElement("div");
        feedback.style.position = "fixed";
        feedback.style.bottom = "20px";
        feedback.style.left = "50%";
        feedback.style.transform = "translateX(-50%)";
        feedback.style.backgroundColor = "#87CEEB";
        feedback.style.color = "#fff";
        feedback.style.padding = "10px 20px";
        feedback.style.borderRadius = "5px";
        feedback.style.zIndex = "1000";
        feedback.textContent = message;
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 2000);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showFeedback("Código copiado!");
        }).catch(err => {
            console.error("Erro ao copiar:", err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }

    function fallbackCopy(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand("copy");
            if (successful) {
                showFeedback("Código copiado!");
            } else {
                showFeedback("Erro ao copiar.");
            }
        } catch (err) {
            console.error("Erro no fallback:", err);
            showFeedback("Erro ao copiar.");
        }

        document.body.removeChild(textArea);
    }
}

function showSpiritualEmergency() {
    const emergencyDiv = document.getElementById("spiritual-emergency");
    if (emergencyDiv) {
        emergencyDiv.classList.toggle("d-none");
        updateMoodState();
    }
}

function sendToWhatsApp() {
    const moodValue = document.getElementById("mood-slider")?.value || 50;
    const moodState = getMoodStateInPortuguese(parseInt(moodValue));
    const message = document.getElementById("message-input")?.value || "";
    const text = `Olá, Vani! Estou me sentindo ${moodState.toLowerCase()}. ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5521972280397?text=${encodedText}`, "_blank");
}

function shareSite() {
    const langData = translations[currentLanguage] || translations["pt"];
    if (navigator.share) {
        navigator.share({
            title: langData.profileTitle,
            text: langData.shareText,
            url: window.location.href
        }).catch(err => console.error("Erro ao compartilhar:", err));
    } else {
        alert(langData.shareUnavailable);
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    detectLanguage();
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});