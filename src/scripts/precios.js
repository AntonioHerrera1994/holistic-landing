document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('procedureSearch');
    const filterPills = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('.pricing-card');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    const pricingGrid = document.getElementById('pricingGrid');

    let activeCategory = 'All';
    let searchTerm = '';

    function applyFilters() {
        let visibleCount = 0;

        cards.forEach(card => {
            const name = card.dataset.name;
            const category = card.dataset.category;

            const matchesCategory = activeCategory === 'All' || category === activeCategory;
            const matchesSearch = name.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        resultsCount.textContent = `Showing ${visibleCount} of ${cards.length} procedures`;

        if (visibleCount === 0) {
            noResults.style.display = 'block';
            pricingGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            pricingGrid.style.display = 'grid';
        }
    }

    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.trim().toLowerCase();
        applyFilters();
    });

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.dataset.category;
            applyFilters();
        });
    });
});