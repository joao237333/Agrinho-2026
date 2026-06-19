// Exemplo de manipulação do DOM e eventos
document.addEventListener("DOMContentLoaded", function () {
    console.log("Site do Agrinho 2026 carregado com sucesso!");

    // 1. Exemplo de animação simples (mudança de estilo ao passar o mouse)
    const cabecalho = document.querySelector("header");
    cabecalho.addEventListener("mouseover", () => {
        cabecalho.style.opacity = "0.95";
    });

    cabecalho.addEventListener("mouseout", () => {
        cabecalho.style.opacity = "1";
    });

    // 2. Validação básica de formulário
    const formInscricao = document.querySelector("#form-inscricao");
    
    if (formInscricao) {
        formInscricao.addEventListener("submit", function (evento) {
            evento.preventDefault(); // Evita o recarregamento da página

            const nomeInput = document.querySelector("#nome");
            const emailInput = document.querySelector("#email");

            if (nomeInput.value.trim() === "" || emailInput.value.trim() === "") {
                alert("Por favor, preencha todos os campos obrigatórios!");
            } else {
                alert("Formulário enviado com sucesso! Obrigado por participar do Agrinho.");
                formInscricao.reset(); // Limpa o formulário
            }
        });
    }
});
