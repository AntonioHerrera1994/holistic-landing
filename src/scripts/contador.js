document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100; // Ajusta la velocidad
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20); // Ajusta el tiempo para más suavidad
            } else {
                counter.textContent = target;
                counter.classList.add('final');
            }
        };
        
        updateCounter();
    });
});