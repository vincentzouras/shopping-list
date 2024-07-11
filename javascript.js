const list = document.querySelector("ul");
let input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let currentValue = input.value;
    input.value = '';
    let item = document.createElement("li");
    let span = document.createElement("span");
    let btn = document.createElement("button");
    item.appendChild(span);
    item.appendChild(btn);
    span.textContent = currentValue;
    btn.textContent = 'Delete';
    list.appendChild(item);
    btn.addEventListener("click", () => {
        item.remove();
    })
    input.focus();
})