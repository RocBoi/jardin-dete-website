// script.js for Jardin d'Été LLC Website

document.addEventListener('DOMContentLoaded', () => { const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); const section = document.querySelector(link.getAttribute('href')); if (section) { section.scrollIntoView({ behavior: 'smooth' }); } }); }); });
