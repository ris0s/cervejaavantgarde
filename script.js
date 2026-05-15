document.addEventListener('DOMContentLoaded', () => {
    const cartToggle = document.querySelector('.cart-toggle');
    const closeCart = document.querySelector('.close-cart');
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');

    const toggle = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    cartToggle.addEventListener('click', toggle);
    closeCart.addEventListener('click', toggle);
    overlay.addEventListener('click', toggle);
});
