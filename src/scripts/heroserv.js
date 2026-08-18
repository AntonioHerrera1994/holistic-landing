document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openServVideoModal');
    const openBtnSecondary = document.getElementById('openServVideoModalBtn');
    const closeBtn = document.getElementById('closeServVideoModal');
    const backdrop = document.getElementById('servModalBackdrop');
    const modal = document.getElementById('servVideoModal');
    const player = document.getElementById('servVideoModalPlayer');

    if (!modal || !player) return;

    const videoId = 'GjxPLiM5sL4';

    const openModal = () => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
        iframe.title = 'YouTube video player';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        player.appendChild(iframe);

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        player.innerHTML = '';
        document.body.style.overflow = '';
    };

    openBtn?.addEventListener('click', openModal);
    openBtnSecondary?.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});