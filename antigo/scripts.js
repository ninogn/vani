function checkStatus() {
    let response = prompt("Como você está se sentindo hoje? (ex.: bem, ansioso, em dúvida)");
    if (response) {
        alert("Obrigada por compartilhar! A Sacerdotisa Vanidoya está analisando sua energia. Entre em contato via WhatsApp para mais apoio.");
    } else {
        alert("Que tal refletir um pouco? Fale comigo no WhatsApp!");
    }
}
