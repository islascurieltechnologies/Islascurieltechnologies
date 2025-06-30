function playIntroSound() {
    const audio = new Audio('media/intro.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log("Audio no se pudo reproducir automáticamente."));
}
