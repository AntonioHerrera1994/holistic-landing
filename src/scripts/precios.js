
  // Configuración de paginación
  const ITEMS_PER_PAGE = 8;
  let currentPage = 1;
  let totalPages = 1;

  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pricing-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtnBottom = document.getElementById('prevBtnBottom');
    const nextBtnBottom = document.getElementById('nextBtnBottom');
    const currentPageSpan = document.querySelector('.current-page');
    const totalPagesSpan = document.querySelector('.total-pages');
    const pageDots = document.getElementById('pageDots');
    
    // Calcular total de páginas
    totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
    totalPagesSpan.textContent = totalPages;

    // Crear puntos de paginación
    createPageDots();

    // Mostrar primera página
    showPage(currentPage);

    // Event listeners para los botones
    prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
    nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
    prevBtnBottom.addEventListener('click', () => goToPage(currentPage - 1));
    nextBtnBottom.addEventListener('click', () => goToPage(currentPage + 1));

    // Interactividad de las cards
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        const glow = card.querySelector('.card-glow');
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (glow) {
          glow.style.left = `${x - glow.offsetWidth / 2}px`;
          glow.style.top = `${y - glow.offsetHeight / 2}px`;
        }
      });
    });

    // Observer para animaciones
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));

    // Función para mostrar una página específica
    function showPage(page) {
      const cards = document.querySelectorAll('.pricing-card');
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;

      // Ocultar todas las cards
      cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index >= startIndex && index < endIndex) {
          setTimeout(() => {
            card.classList.add('active');
          }, (index - startIndex) * 100);
        }
      });

      currentPage = page;
      updateControls();
    }

    // Función para ir a una página
    function goToPage(page) {
      if (page < 1 || page > totalPages) return;
      showPage(page);
      
      // Scroll removido para evitar saltos
    }

    // Actualizar controles de navegación
    function updateControls() {
      currentPageSpan.textContent = currentPage;
      
      // Deshabilitar/habilitar botones
      [prevBtn, prevBtnBottom].forEach(btn => {
        btn.disabled = currentPage === 1;
      });
      
      [nextBtn, nextBtnBottom].forEach(btn => {
        btn.disabled = currentPage === totalPages;
      });

      // Actualizar dots
      updatePageDots();
    }

    // Crear puntos de paginación
    function createPageDots() {
      pageDots.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'page-dot';
        if (i === currentPage) dot.classList.add('active');
        dot.addEventListener('click', () => goToPage(i));
        pageDots.appendChild(dot);
      }
    }

    // Actualizar puntos activos
    function updatePageDots() {
      const dots = pageDots.querySelectorAll('.page-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === currentPage);
      });
    }

    // Soporte para teclado (flechas)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToPage(currentPage - 1);
      } else if (e.key === 'ArrowRight') {
        goToPage(currentPage + 1);
      }
    });
  });
