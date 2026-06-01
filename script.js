document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Since the "Add My Game" functionality has been removed, 
    // this script now handles any dynamic gallery features or future expansion.
    // For now, it simply ensures the icons are rendered correctly and handles simple interactions.

    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    console.log("Gamer Portfolio initialized.");
});
