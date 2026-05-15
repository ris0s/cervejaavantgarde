document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('introScreen');
    const body = document.body;

    // Função de entrada com Fade suave e Delay de segurança
    const enterSite = () => {
        if (introScreen.classList.contains('hide')) return;

        // Inicia o sumiço da tela preta
        introScreen.classList.add('hide');

        // Pequeno atraso para o site real aparecer logo depois
        setTimeout(() => {
            body.classList.add('site-active');
        }, 300); 
    };

    // Detectores de interação
    window.addEventListener('wheel', enterSite);
    window.addEventListener('touchstart', enterSite);
    window.addEventListener('click', enterSite);
    window.addEventListener('keydown', enterSite);

    // Carrinho
    const cartToggle = document.querySelector('.cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const overlay = document.getElementById('cart-overlay');

    const toggle = () => {
        cartSidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    cartToggle.addEventListener('click', toggle);
    closeCart.addEventListener('click', toggle);
    overlay.addEventListener('click', toggle);
});
