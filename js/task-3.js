'use strict';
const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const showText = () => {
    textOutput.textContent = textInput.value.trim() || "Anonymous";                                          
}
textInput.addEventListener("input", showText);