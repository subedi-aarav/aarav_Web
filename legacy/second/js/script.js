// Set active navigation based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Handle different page matches
        if (currentPage === 'index.html' && linkHref === 'index.html') {
            link.classList.add('active');
        } else if (linkHref.includes(currentPage)) {
            link.classList.add('active');
        }
    });
});

// Handle contact form submission (if it exists on the page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}