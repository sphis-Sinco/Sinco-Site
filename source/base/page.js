import { fullVersion } from "../data/Version.js";

console.log(fullVersion());

function createText(text = "") {
    var textEl = document.createElement('p');

    textEl.innerHTML = text;
    textEl.innerText = text;

    return textEl;
}

function addElement(element) {
    document.body.appendChild(element);
}

addElement(createText("my text"));