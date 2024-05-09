// Capturando elementos HTML
const textInputForm = document.getElementById('textInputForm');
const usernameInput = document.getElementById('usernameInput');
const submitButton = document.getElementById('submitButton');
const displayText = document.getElementById('displayText');

// Adicionando evento de clique ao botão de enviar
submitButton.addEventListener('click', () => {
    // Obtendo o texto digitado
    const text = usernameInput.value;

    // Verificando se o campo está vazio
    if (text.trim() === '') {
        showError('Por favor, insira um texto.');
    } else {
        // Exibindo o texto digitado na tela
        displayText.textContent = text;
        alert('palavra enviada')
    }
});

// Função para exibir mensagem de erro
function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
}
