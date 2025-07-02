// scripts.js

const PIX_CODE = "00020101021126330014br.gov.bcb.pix0111126445857675204000053039865802BR5919Vanise Pinto Telles6014Rio De Janeiro62070503***630431D6";
const LIGHTNING_CODE = "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkwct40fukgmm4vfkx2wps564ys2";
const WHATSAPP = "5521972280397";
const SITE_URL = "https://seusite.com";

const translations = {
  pt: {
    profileTitle: "Sacerdotisa Vani D'Oyá",
    profileSubtitle: "Guia Espiritual | Conexão e Transformação",
    spiritualEmergencyButton: "Pronto Socorro Espiritual",
    emergencyTitle: "Como você está agora?",
    moodVeryUnbalanced: "Muito instável",
    moodUnbalanced: "Instável",
    moodNeutral: "Neutro",
    moodBalanced: "Equilibrado",
    moodPeaceful: "Em paz",
    messagePlaceholder: "Compartilhe seus sentimentos",
    whatsappButton: "Enviar para Vani",
    modalTitle: "Contribua com a missão",
    pixInstruction: "Clique para copiar o código PIX",
    lightningInstruction: "Clique para copiar o código Lightning",
    shareTitle: "Compartilhar",
    shareText: "Explore o trabalho espiritual da Sacerdotisa Vani D'Oyá!",
    shareUnavailable: "Compartilhamento indisponível.",
    forestMedicineLink: "Medicinas da Floresta",
    forestMedicineModalLabel: "Medicinas da Floresta",
    forestMedicineText: "Essas medicinas são um presente para todos, mas nem todos estão prontos para elas. Descubra se é seu momento!",
    forestMedicineButton: "Descubra Agora"
  },
  en: {
    profileTitle: "Priestess Vani D'Oyá",
    profileSubtitle: "Spiritual Guide | Connection and Transformation",
    spiritualEmergencyButton: "Spiritual Emergency Aid",
    emergencyTitle: "How are you feeling now?",
    moodVeryUnbalanced: "Very Unstable",
    moodUnbalanced: "Unstable",
    moodNeutral: "Neutral",
    moodBalanced: "Balanced",
    moodPeaceful: "At Peace",
    messagePlaceholder: "Share your feelings",
    whatsappButton: "Send to Vani",
    modalTitle: "Support the mission",
    pixInstruction: "Click to copy PIX code",
    lightningInstruction: "Click to copy Lightning code",
    shareTitle: "Share",
    shareText: "Explore the spiritual work of Priestess Vani D'Oyá!",
    shareUnavailable: "Sharing unavailable.",
    forestMedicineLink: "Forest Medicines",
    forestMedicineModalLabel: "Forest Medicines",
    forestMedicineText: "These medicines are a gift for all, but not everyone is ready for them. Discover if it's your moment!",
    forestMedicineButton: "Discover Now"
  },
  es: {
    profileTitle: "Sacerdotisa Vani D'Oyá",
    profileSubtitle: "Guía Espiritual | Conexión y Transformación",
    spiritualEmergencyButton: "Socorro Espiritual",
    emergencyTitle: "¿Cómo te sientes ahora?",
    moodVeryUnbalanced: "Muy inestable",
    moodUnbalanced: "Inestable",
    moodNeutral: "Neutral",
    moodBalanced: "Equilibrado",
    moodPeaceful: "En paz",
    messagePlaceholder: "Comparte tus sentimientos",
    whatsappButton: "Enviar a Vani",
    modalTitle: "Contribuye a la misión",
    pixInstruction: "Haz clic para copiar el código PIX",
    lightningInstruction: "Haz clic para copiar el código Lightning",
    shareTitle: "Compartir",
    shareText: "¡Explora el trabajo espiritual de la Sacerdotisa Vani D'Oyá!",
    shareUnavailable: "Compartir no disponible.",
    forestMedicineLink: "Medicinas de la Selva",
    forestMedicineModalLabel: "Medicinas de la Selva",
    forestMedicineText: "Estas medicinas son un regalo para todos, pero no todos están listos. ¡Descubre si es tu momento!",
    forestMedicineButton: "Descúbrelo Ahora"
  }
};

let currentLanguage = "pt";

function atualizarEstadoHumor(valor) {
  const moodText = document.getElementById("mood-state");
  const lang = translations[currentLanguage] || translations.pt;
  const v = parseInt(valor);
  if (v <= 20) moodText.textContent = lang.moodVeryUnbalanced;
  else if (v <= 40) moodText.textContent = lang.moodUnbalanced;
  else if (v <= 60) moodText.textContent = lang.moodNeutral;
  else if (v <= 80) moodText.textContent = lang.moodBalanced;
  else moodText.textContent = lang.moodPeaceful;
}

function enviarWhatsApp() {
  const mood = document.getElementById("mood").value;
  const estado = document.getElementById("mood-state").textContent;
  const texto = document.getElementById("feeling").value;
  const mensagem = encodeURIComponent(`Olá Vani! Estou me sentindo ${estado}. ${texto}`);
  window.open(`https://wa.me/${WHATSAPP}?text=${mensagem}`, "_blank");
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    alert("Copiado para a área de transferência.");
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  const t = translations[lang] || translations.pt;
  document.getElementById("profile-title").textContent = t.profileTitle;
  document.getElementById("profile-subtitle").textContent = t.profileSubtitle;
  document.getElementById("spiritual-emergency-button").textContent = t.spiritualEmergencyButton;
  document.getElementById("emergency-title").textContent = t.emergencyTitle;
  document.getElementById("feeling").placeholder = t.messagePlaceholder;
  document.getElementById("whatsapp-button").textContent = t.whatsappButton;
  document.getElementById("modal-title").textContent = t.modalTitle;
  document.getElementById("pix-instruction").textContent = t.pixInstruction;
  document.getElementById("lightning-instruction").textContent = t.lightningInstruction;
  document.getElementById("forestMedicineModalLabel").textContent = t.forestMedicineModalLabel;
  document.getElementById("forest-medicine-text").textContent = t.forestMedicineText;
  document.getElementById("forest-medicine-button").textContent = t.forestMedicineButton;
  atualizarEstadoHumor(document.getElementById("mood").value);
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("mood");
  if (slider) {
    slider.addEventListener("input", (e) => atualizarEstadoHumor(e.target.value));
    atualizarEstadoHumor(slider.value);
  }

  document.getElementById("pix-copy")?.addEventListener("click", () => copiarTexto(PIX_CODE));
  document.getElementById("lightning-copy")?.addEventListener("click", () => copiarTexto(LIGHTNING_CODE));
  document.getElementById("link-copy")?.addEventListener("click", () => copiarTexto(SITE_URL));

  setLanguage(currentLanguage);
});

const PAGSEGURO = {
  feitio : "https://pag.ae/7_PwaScM3",         // Feitio –  ex.: R$ 150
  tarot  : "https://pag.ae/7_Pwp1DCQ"          // Tarot –  ex.: R$ 297
};

document.getElementById("btn-feitio")
        .addEventListener("click", () => window.open(PAGSEGURO.feitio, "_blank"));

document.getElementById("btn-tarot")
        .addEventListener("click", () => window.open(PAGSEGURO.tarot, "_blank"));