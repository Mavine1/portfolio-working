// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
        
        // Update active nav link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

// Close menu on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

// Close menu on window resize (when switching to desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
            
            // Calculate scroll position with header offset
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements for animation
document.querySelectorAll('.hero-content, .hero-profile, .project-card, .skill-category, .contact-card').forEach(el => {
    observer.observe(el);
});