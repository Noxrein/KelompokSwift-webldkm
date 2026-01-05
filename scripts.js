// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';

    if (navLinks.style.display === 'flex') {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'white';
      navLinks.style.padding = '20px';
      navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      navLinks.style.gap = '15px';
    }
  });
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.animate-on-scroll')
  .forEach(el => observer.observe(el));
