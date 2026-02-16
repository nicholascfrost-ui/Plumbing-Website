const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((node) => observer.observe(node));

const stickyCallId = 'stickyMobileCallCta';
if (!document.getElementById(stickyCallId)) {
  const stickyCall = document.createElement('a');
  stickyCall.id = stickyCallId;
  stickyCall.href = 'tel:3347056465';
  stickyCall.textContent = 'Tap to Call: 334-705-6465';
  stickyCall.className =
    'mobile-call-cta md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-xl bg-blue-600 px-6 py-4 text-center text-base font-extrabold text-white';
  document.body.appendChild(stickyCall);
  document.body.classList.add('pb-24', 'md:pb-0');
}

const carousel = document.getElementById('testimonialCarousel');
if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = track ? Array.from(track.querySelectorAll('.carousel-item')) : [];
  const next = document.getElementById('carouselNext');
  const prev = document.getElementById('carouselPrev');
  let index = 0;

  const show = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;
    if (track) {
      track.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  if (slides.length > 0) {
    if (next) next.addEventListener('click', () => show(index + 1));
    if (prev) prev.addEventListener('click', () => show(index - 1));
    setInterval(() => show(index + 1), 5000);
  }
}
