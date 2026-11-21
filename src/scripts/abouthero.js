document.addEventListener('DOMContentLoaded', () => {
    const isTouchDevice = window.matchMedia('(max-width: 800px)').matches;
    if (!isTouchDevice) return;

    const cards = document.querySelectorAll('.presentation-card');

    cards.forEach(card => {
        const hint = card.querySelector('.tap-hint');
        hint?.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = card.classList.contains('active');
            cards.forEach(c => c.classList.remove('active'));
            if (!isActive) card.classList.add('active');
        });
    });
});
