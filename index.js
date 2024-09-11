const DISPLAY = document.getElementById("display");
const RM = document.getElementById("removeButton");
const ADD = document.getElementById("addButton");
const RST = document.getElementById("resetButton");

let count = 0;

DISPLAY.textContent = count;

RM.onclick = function() {
    count--;
    DISPLAY.textContent = count;
}

ADD.onclick = function() {
    count++;
    DISPLAY.textContent = count;
}

RST.onclick = function() {
    count = 0;
    DISPLAY.textContent = count;
}
