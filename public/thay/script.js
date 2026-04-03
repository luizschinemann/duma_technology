// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL ANIMATIONS =====
const fadeUpElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeUpElements.forEach(el => observer.observe(el));

// ===== ACCORDION =====
document.querySelectorAll('.module-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.module-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.module-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
// Open first module by default
const firstModule = document.querySelector('.module-item');
if (firstModule) firstModule.classList.add('open');

// ===== TESTIMONIALS CAROUSEL =====
const track = document.getElementById('testimonialTrack');
const cards = track ? track.querySelectorAll('.testimonial-card') : [];
const dotsContainer = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (track && cards.length > 0) {
  let currentIndex = 0;
  const visibleCount = () => window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

  // Create dots
  function buildDots() {
    dotsContainer.innerHTML = '';
    const count = Math.ceil(cards.length / visibleCount());
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function goTo(index) {
    const vc = visibleCount();
    const max = Math.ceil(cards.length / vc) - 1;
    currentIndex = Math.max(0, Math.min(index, max));
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${currentIndex * vc * cardWidth}px)`;
    updateDots();
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  buildDots();
  window.addEventListener('resize', () => {
    currentIndex = 0;
    buildDots();
    goTo(0);
  });

  // Auto-play
  let autoplay = setInterval(() => {
    const max = Math.ceil(cards.length / visibleCount()) - 1;
    goTo(currentIndex >= max ? 0 : currentIndex + 1);
  }, 5000);

  track.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => {
      const max = Math.ceil(cards.length / visibleCount()) - 1;
      goTo(currentIndex >= max ? 0 : currentIndex + 1);
    }, 5000);
  });
}

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
