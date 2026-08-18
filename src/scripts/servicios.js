document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.serv1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.25 });

    cards.forEach(card => observer.observe(card));
});