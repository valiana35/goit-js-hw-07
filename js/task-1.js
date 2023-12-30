'use strict';
const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);
for (const item of listItems) {
    const categoryName = item.querySelector("h2");
    const itemCount = item.querySelectorAll("li");
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${itemCount.length}`);
}
