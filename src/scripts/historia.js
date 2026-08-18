document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openVideoModal');
    const closeBtn = document.getElementById('closeVideoModal');
    const backdrop = document.getElementById('modalBackdrop');
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoModalPlayer');

    if (!openBtn || !modal || !player) return;

    const videoId = 'hFV4AbnKdzU';

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
        player.innerHTML = ''; // detiene el video al remover el iframe
        document.body.style.overflow = '';
    };

    openBtn.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});