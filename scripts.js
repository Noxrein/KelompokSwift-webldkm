const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.style.display =
      navLinks.style.display === 'flex' ? 'none' : 'flex';

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

// ===== ANIMATE ON SCROLL =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.animate-on-scroll')
  .forEach(el => observer.observe(el));


// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== TEAM CAROUSEL AUTO ANIMATION =====
const carousel = document.querySelector(".team-carousel");
const cards = document.querySelectorAll(".team-card");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

let activeIndex = 0;
let autoSlideTimer;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === activeIndex);
  });

  const activeCard = cards[activeIndex];
  const offset =
    activeCard.offsetLeft -
    carousel.offsetWidth / 2 +
    activeCard.offsetWidth / 2;

  carousel.scrollTo({
    left: offset,
    behavior: "smooth",
  });
}

function nextCard() {
  activeIndex = (activeIndex + 1) % cards.length;
  updateCarousel();
}

function prevCard() {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  updateCarousel();
}

function startAutoScroll() {
  autoSlideTimer = setInterval(nextCard, 2500);
}

function stopAutoScroll() {
  clearInterval(autoSlideTimer);
}

// Controls
nextBtn.addEventListener("click", () => {
  stopAutoScroll();
  nextCard();
  startAutoScroll();
});

prevBtn.addEventListener("click", () => {
  stopAutoScroll();
  prevCard();
  startAutoScroll();
});

// Pause on hover (important polish)
carousel.addEventListener("mouseenter", stopAutoScroll);
carousel.addEventListener("mouseleave", startAutoScroll);

// Init
updateCarousel();
startAutoScroll();
