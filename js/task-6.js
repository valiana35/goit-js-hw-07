function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
function createBoxes(amount) {
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    const str = `<div style="width: ${30}px;height=${30}px;"></div>`;
    arr.push(str);
  }
}