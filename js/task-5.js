function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector(".widget");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
btn.addEventListener("click", changeColor);
function changeColor() {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
}