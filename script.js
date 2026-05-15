document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica da Intro (Scroll para Entrar) ---
    const introScreen = document.getElementById('introScreen');
    const body = document.body;

    // Função que faz a transição (Fade Out Intro / Fade In Site)
    const enterSite = () => {
        // Se a intro já foi escondida, não faz nada
        if (introScreen.classList.contains('hide')) return;

        introScreen.classList.add('hide'); // Inicia Fade Out
        body.classList.add('site-active'); // Ativa cores do site e libera scroll
        
        // Remove o elemento da intro do DOM após a animação para performance
        setTimeout(() => {
            introScreen.remove();
        }, 1000); // Tempo igual ao 'transition' do CSS (1s)
    };

    // Ouvintes de evento para detectar intenção de entrada
    introScreen.addEventListener('click', enterSite); // Clicar entra
    window.addEventListener('wheel', enterSite); // Scroll do mouse entra
    window.addEventListener('touchmove', enterSite); // Scroll no celular entra
    window.addEventListener('keydown', (e) => { // Qualquer tecla entra
        if (e.key === 'Enter' || e.key === ' ') enterSite();
    });


    // --- Lógica do Carrinho Lateral (Do site anterior) ---
    const cartToggleBtn = document.querySelector('.cart-toggle');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    const toggleCart = () => {
        // Só permite abrir se a intro já passou
        if (!body.classList.contains('site-active')) return;
        
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('active');
    };

    cartToggleBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
});
