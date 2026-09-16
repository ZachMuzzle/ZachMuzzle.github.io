"use strict";
/**
 * Mobile menu toggle and navbar scroll behavior
 */
// Mobile menu toggle
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
function toggleMobileMenu() {
    if (!burger || !mobileMenu)
        return;
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    mobileMenu.classList.toggle('closed');
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}
function closeMobileMenu() {
    if (!burger || !mobileMenu)
        return;
    burger.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add('closed');
    document.body.style.overflow = '';
}
if (burger && mobileMenu) {
    burger.addEventListener('click', toggleMobileMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMobileMenu();
        }
    });
}
// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;
function handleNavbarScroll() {
    if (!navbar)
        return;
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
}
window.addEventListener('scroll', handleNavbarScroll, { passive: true });
// Handle resize - close mobile menu if switching to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});
