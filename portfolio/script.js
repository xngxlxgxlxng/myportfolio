let lastScroll = 0; // tracks last scroll position
const navbar = document.querySelector('.navbar');

// Auto-hide navbar on scroll
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // Auto-hide when scrolling down, show when scrolling up
  if (currentScroll <= 0) {
    navbar.style.top = '0'; // always visible at very top
  } else if (currentScroll > lastScroll) {
    navbar.style.top = '-100px'; // hide on scroll down
  } else {
    navbar.style.top = '0'; // show on scroll up
  }

  lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
