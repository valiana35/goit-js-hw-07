function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
function createBoxes(amount) {
  boxes.innerHTML = "";
  const result = [];
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = `${20 + i * 10}px`;
    box.style.height = `${20 + i * 10}px`;
    boxes.append(box);
    result.push(box);
  }
  return result.join("");
}
function createBoxesBtn() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}
function destroyBoxes() {
  input.value = "";
  boxes.innerHTML = "";
}
createBtn.addEventListener("click", createBoxesBtn);
destroyBtn.addEventListener("click", destroyBoxes);
createBtn.classList.add("crBtn");
destroyBtn.classList.add("dsBtn");
input.classList.add("inputStyle");