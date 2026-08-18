document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });

    // Botón de compartir
    document.querySelectorAll(".share-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const title = btn.getAttribute("data-share-title");
            const shareData = {
                title: `${title} — Holistic Cancer Treatments Coach`,
                text: `Learn more about ${title} at Holistic Cancer Treatments Coach.`,
                url: window.location.href
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    // usuario canceló, no hacer nada
                }
            } else {
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    const originalText = btn.innerHTML;
                    btn.classList.add("copied");
                    btn.innerHTML = "Link copied!";
                    setTimeout(() => {
                        btn.classList.remove("copied");
                        btn.innerHTML = originalText;
                    }, 2000);
                } catch (err) {
                    console.warn("No se pudo copiar el link:", err);
                }
            }
        });
    });
});