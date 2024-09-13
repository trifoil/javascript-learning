const MIN = 50;
const MAX = 100;
const myButton = document.getElementById("a");
const myText = document.getElementById("b");
let randomN = "click on the button to start"

myText.textContent = randomN
myButton.onclick = function(){
    randomN = Math.ceil(Math.random()*(MAX-MIN))+MIN;
    document.getElementById("b").textContent = randomN
}