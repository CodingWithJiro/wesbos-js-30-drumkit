import { addActiveClass, addActiveClassThruKey } from "./ui.js";

//* DRUM.JS SCRIPT
const buttons = document.querySelectorAll(".drum__button");
const sounds = document.querySelectorAll(".drum__audio");
const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

function playSound(buttonElement) {
  const currentSound = [...sounds].find(
    (sound) => sound.dataset.key === buttonElement.dataset.key
  );
  currentSound.currentTime = 0;
  currentSound.play();
}

function playSoundThruKey(keyString) {
  const currentSound = [...sounds].find(
    (sound) => sound.dataset.key === keyString
  );
  currentSound.currentTime = 0;
  currentSound.play();
}

function initDrumButtons() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playSound(button);
      addActiveClass(button);
    });

    window.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();
      if (keys.includes(key)) {
        playSoundThruKey(key);
        addActiveClassThruKey(key);
      }
    });
  });
}

export function initDrum() {
  initDrumButtons();
}
