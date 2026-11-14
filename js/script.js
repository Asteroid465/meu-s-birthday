const music = document.querySelector("#backgroundMusic");
const musicButton = document.querySelector("#musicButton");
const musicLabel = document.querySelector("#musicLabel");
const letterButton = document.querySelector("#letterButton");
const letterContent = document.querySelector("#letterContent");

function setMusicState(isPlaying) {
    musicButton.classList.toggle("is-playing", isPlaying);
    musicButton.setAttribute("aria-pressed", String(isPlaying));
    musicButton.setAttribute(
        "aria-label",
        isPlaying ? "Pause background music" : "Play background music"
    );
    musicLabel.textContent = isPlaying ? "Pause music" : "Play our song";
}

musicButton.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            setMusicState(true);
        } catch (error) {
            musicLabel.textContent = "Music unavailable";
            console.error("Background music could not be played:", error);
        }
        return;
    }

    music.pause();
    setMusicState(false);
});

music.addEventListener("ended", () => setMusicState(false));

letterButton.addEventListener("click", () => {
    const isOpening = letterContent.hidden;

    letterContent.hidden = !isOpening;
    letterButton.textContent = isOpening ? "Close my letter" : "Read my letter";
    letterButton.setAttribute("aria-expanded", String(isOpening));
});
