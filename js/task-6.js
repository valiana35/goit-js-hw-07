function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const result = [];
let selectedAmount = 0;
function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const box = `<div style = "background-color: ${getRandomHexColor()}; width: ${20 + i * 10 + selectedAmount}px; height: ${20 + i * 10 + selectedAmount}px"></div>`;
    result.push(box);
  }
  selectedAmount = 10 * amount + selectedAmount;
  return result.join("");
}
function createBoxesBtn() {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = createBoxes(amount);
    input.value = "";
  }
}
function destroyBoxes() {
  input.value = "";
  boxes.innerHTML = "";
}
boxes.insertAdjacentHTML("beforeend", result);
createBtn.addEventListener("click", createBoxesBtn);
destroyBtn.addEventListener("click", destroyBoxes);