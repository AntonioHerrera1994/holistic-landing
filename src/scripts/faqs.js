document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionContents = document.querySelectorAll('.accordion-content');

    if (!accordionButtons.length) return;

    // Activar el primer elemento al cargar la página
    accordionContents[0].style.maxHeight = accordionContents[0].scrollHeight + 'px';

    accordionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentNode;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const isActive = accordionItem.classList.contains('active');

            // Cierra todos
            accordionButtons.forEach(otherButton => {
                otherButton.setAttribute('aria-expanded', 'false');
                otherButton.parentNode.classList.remove('active');
                otherButton.parentNode.querySelector('.accordion-content').style.maxHeight = '0';
            });

            // Abre el actual si no estaba activo
            if (!isActive) {
                accordionItem.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });

    // Teclado: navegar con flechas entre preguntas
    accordionButtons.forEach((button, index) => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                accordionButtons[(index + 1) % accordionButtons.length].focus();
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                accordionButtons[(index - 1 + accordionButtons.length) % accordionButtons.length].focus();
            }
        });
    });
});