document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const viewport = document.getElementById('sliderViewport');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');

    if (!track) return;

    const slides = Array.from(track.children);
    let currentIndex = 0;
    let autoplayTimer = null;

    // Crear dots dinámicamente
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    const updateSlider = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    };

    const goToSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        updateSlider();
        resetAutoplay();
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);

    // Autoplay
    const startAutoplay = () => {
        autoplayTimer = setInterval(nextSlide, 6000);
    };
    const resetAutoplay = () => {
        clearInterval(autoplayTimer);
        startAutoplay();
    };

    startAutoplay();
    viewport?.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    viewport?.addEventListener('mouseleave', startAutoplay);

    // Swipe táctil
    let startX = 0;
    viewport?.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    viewport?.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 40) {
            diff > 0 ? nextSlide() : prevSlide();
        }
    }, { passive: true });
});