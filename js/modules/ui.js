//* UI.JS SCRIPT
function removeActiveClassAfterTransition(buttonElement) {
  buttonElement.addEventListener("transitionend", () => {
    buttonElement.classList.remove("active");
  });
}

export function addActiveClass(buttonElement) {
  buttonElement.classList.add("active");
  removeActiveClassAfterTransition(buttonElement);
}

export function addActiveClassThruKey(keyString) {
  const button = document.querySelector(
    `.drum__button[data-key="${keyString}"]`
  );
  button.classList.add("active");
  removeActiveClassAfterTransition(button);
}
