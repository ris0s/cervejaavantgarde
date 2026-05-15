document.addEventListener('DOMContentLoaded', () => {
    const cartToggleBtn = document.querySelector('.cart-toggle');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const newsletterForm = document.getElementById('newsletter-form');

    // Toggle Cart functionality
    const toggleCart = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
    };

    cartToggleBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // Simple newsletter submission mock
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        input.value = 'ADDED TO THE DATABASE.';
        setTimeout(() => {
            input.value = '';
        }, 2000);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});