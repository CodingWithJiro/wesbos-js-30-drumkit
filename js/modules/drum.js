//* DRUM.JS SCRIPT
const buttons = document.querySelectorAll(".drum__button");
const sounds = document.querySelectorAll(".drum__audio");

function playSound(buttonElement) {
  const currentSound = [...sounds].find(
    (sound) => sound.dataset.key === buttonElement.dataset.key
  );
  currentSound.currentTime = 0;
  currentSound.play();
}

function initDrumButtons() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playSound(button);
    });
  });
}

export function initDrum() {}
