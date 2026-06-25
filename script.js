document.addEventListener("DOMContentLoaded", function () {
    
    // FILTRO DINÂMICO COM ANIMAÇÃO DE ESCALA
    const filterButtons = document.querySelectorAll(".btn-custom-filter");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const currentFilter = this.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                const category = item.getAttribute("data-category");
                
                if (currentFilter === "todos" || category === currentFilter) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 10);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.95)";
                    item.style.display = "none";
                }
            });
        });
    });

    // VALIDAÇÃO AVANÇADA COM FOCO SEMÂNTICO
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const mensagemInput = document.getElementById("mensagem");

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        formFeedback.className = "alert d-none custom-alert";
        [nomeInput, emailInput, mensagemInput].forEach(input => input.classList.remove("is-invalid"));

        let hasErrors = false;

        if (nome === "") {
            nomeInput.classList.add("is-invalid");
            hasErrors = true;
        }
        
        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            emailInput.classList.add("is-invalid");
            hasErrors = true;
        }

        if (mensagem === "") {
            mensagemInput.classList.add("is-invalid");
            hasErrors = true;
        }

        if (hasErrors) {
            formFeedback.classList.remove("d-none");
            formFeedback.classList.add("alert-danger");
            formFeedback.textContent = "Preencha os campos destacados corretamente para enviar.";
            return;
        }

        formFeedback.classList.remove("d-none");
        formFeedback.classList.add("alert-success");
        formFeedback.innerHTML = `<strong>Sucesso!</strong> Proposta simulada para o e-mail <em>${email}</em>. Elena Moura entrará em contato em breve.`;
        
        contactForm.reset();
    });
});
