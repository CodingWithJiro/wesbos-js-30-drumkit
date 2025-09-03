//* DRUM.JS SCRIPT
const buttons = document.querySelectorAll(".drum__button");
const sounds = document.querySelectorAll(".drum__audio");

function initDrumButtons() {
  buttons.forEach((button) => {
    button.addEventListener("click", handleClickDrumButtons);
  });
}

export function initDrum() {}
