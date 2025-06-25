document.addEventListener('DOMContentLoaded', function () {
  const rings = [
    // Primer anillo: ahora con 2 items
    { radius: 125, items: 2, speed: 0.005, angle: 0 },
    // Segundo anillo: ahora con 2 items
    { radius: 175, items: 2, speed: -0.003, angle: 0 },
    // Tercer anillo: ahora con 2 items
    { radius: 225, items: 2, speed: 0.002, angle: 0 }
  ];

  const centerX = 250;
  const centerY = 250;

  function animate() {
    rings.forEach((ring, ringIndex) => {
      ring.angle += ring.speed;

      for (let i = 0; i < ring.items; i++) {
        const itemAngle = ring.angle + (i * (2 * Math.PI / ring.items));
        // El cálculo del índice del item sigue siendo el mismo,
        // pero ahora solo generará hasta item-2, item-4, item-6
        const item = document.querySelector(`.item-${ringIndex * rings[0].items + i + 1}`);

        const x = centerX + ring.radius * Math.cos(itemAngle) - 30;
        const y = centerY + ring.radius * Math.sin(itemAngle) - 30;

        if (item) {
          item.style.left = `${x}px`;
          item.style.top = `${y}px`;
        }
      }
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("unhandledrejection", event => {
    console.warn("⚠️ Promesa sin .catch() o await con error:", event.reason);
  });
  
  animate();
});