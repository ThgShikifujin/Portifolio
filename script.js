const openButton = document.getElementById('openModal');
        const modal = document.getElementById('myModal');

        openButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        // Fechar o modal quando clicar fora dele
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        const opencertificados = document.getElementById('certificadoModal');
        const txtm = document.getElementById('certificado');

        opencertificados.addEventListener('click', () => {
            txtm.style.display = 'block';
        });

        // Fechar o modal quando clicar fora dele
        window.addEventListener('click', (event) => {
            if (event.target === txtm) {
                txtm.style.display = 'none';
            }
        });