function reproducirIntroSound() {
  setTimeout(() => {
    const audio = new Audio('js/medios de comunicación/resonancia-futurista-profunda-287349.mp3');
    audio.volume = 0.4; // volumen suave
    audio.play().catch((error) => {
      console.log("🔇 El audio no se pudo reproducir automáticamente.");
    });
  }, 2000); // espera de 2 segundos antes de reproducir
}
