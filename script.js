/**
 * PROJETO FRONT-END - ELENA MOURA FOTOGRAFIA
 * Scripts de Interatividade Básica (Filtros e Validação de Formulário)
 */
document.addEventListener("DOMContentLoaded", function () {
    
    // --- FUNCIONALIDADE 1: FILTRO DINÂMICO DO PORTFÓLIO ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Gerencia classes de estado ativo visual
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            // Manipulação dinâmica de visibilidade no DOM
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");
                if (filterValue === "todos" || itemCategory === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // --- FUNCIONALIDADE 2: VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const form = document.getElementById("contact-form");
    const feedbackContainer = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real / recarregamento da página (Restrição 5)
        
        // Coleta e higienização de strings contra campos vazios
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Limpa estados anteriores de feedback
        feedbackContainer.className = "alert d-none";

        // Lógica de validação client-side obrigatória
        if (nome === "" || email === "" || mensagem === "") {
            feedbackContainer.classList.remove("d-none");
            feedbackContainer.classList.add("alert-danger");
            feedbackContainer.textContent = "Por favor, preencha todos os campos obrigatórios (*).";
            return;
        }

        // Simulação de sucesso com confirmação visual dinâmica (Requisito 6.9)
        feedbackContainer.classList.remove("d-none");
        feedbackContainer.classList.add("alert-success");
        feedbackContainer.textContent = `Obrigado pelo contato, ${nome}! Sua solicitação de orçamento foi simulada e registrada com sucesso.`;
        
        // Reseta o formulário pós-envio
        form.reset();
    });
});
