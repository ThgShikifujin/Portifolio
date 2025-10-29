document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona os dois elementos que vamos manipular
    const btnHamburger = document.querySelector('.menu-hamburger');
    const menuPrincipal = document.querySelector('.menu-principal');

    // 2. Adiciona um "ouvidor de clique" no botão
    btnHamburger.addEventListener('click', () => {
        
        // 3. A mágica: Adiciona ou remove a classe 'ativo'
        // tanto no botão (para virar um 'X')
        // quanto no menu (para ele aparecer)
        btnHamburger.classList.toggle('ativo');
        menuPrincipal.classList.toggle('ativo');

        // 4. Bônus de Acessibilidade: Avisa se o menu está aberto ou fechado
        const estaAtivo = menuPrincipal.classList.contains('ativo');
        btnHamburger.setAttribute('aria-expanded', estaAtivo);
    });

});