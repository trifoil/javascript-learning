// const MIN = 50;
// const MAX = 100;
// const myButton = document.getElementById("a");
// const myText = document.getElementById("b");
// let randomN = "click on the button to start"

// myText.textContent = randomN
// myButton.onclick = function(){
//     randomN = Math.ceil(Math.random()*(MAX-MIN))+MIN;
//     document.getElementById("b").textContent = randomN
// }


// let today = new Date();
// let hour = today.getHours();

// let day;
// if (8 < hour && hour < 20){
//     day = "jour";
// }
// else {
//     day = "nuit";
// }
// console.log(hour)
// console.log(day)


// //checked property

// const mycheckbox = document.getElementById("mycheckbox");
// const myvisabtn = document.getElementById("visabtn");
// const mymastercardbtn = document.getElementById("mastercard");
// const mypaypalbtn = document.getElementById("paypal");
// const submitbtn = document.getElementById("submit");
// const subresult = document.getElementById("subresult");
// const paymentresult = document.getElementById("paymentresult");

// mycheckbox.onclick = function seecheck(){
//     if(mycheckbox.checked){
//         subresult.textContent = 'subscribed';
//     }
//     else {
//         subresult.textContent = 'unsubscribed';
//     }
// }


// submitbtn.onclick = function() {
//     if (myvisabtn.checked){
//         paymentresult.textContent = 'Visa';
//     }
//     else if (mymastercardbtn.checked){
//         paymentresult.textContent = 'Mastercard';
//     }
//     else if (mypaypalbtn.checked){
//         paymentresult.textContent = 'Paypal';
//     }
//     else {
//         paymentresult.textContent = 'nuts';
//     }
// }


//ternary

// let age =21;
// let message = age >= 18 ? "your are an adult" : "you are not an adult";
// console.log(message);

// let time = 6;
// let greeting = time <= 12 ? "good morning" : "good afternoon";
// console.log(greeting);

// let cat = true;
// sound = cat ? "meow" : "woof";
// console.log(sound);

// let i = 7;
// let j = '';
// switch (true){
//     case i > 4:
//         j = 'B';
//         break;
//     case i > 6:
//         j = 'A';
//         break;
// }
// console.log(j);


// let monStringEnCriss = '   coCa cola  ';
// console.log(monStringEnCriss);
// console.log(monStringEnCriss.charAt(4));
// console.log(monStringEnCriss.indexOf('a'));
// console.log(monStringEnCriss.lastIndexOf('a')); 
// console.log(monStringEnCriss.length);
// console.log(monStringEnCriss.trim());
// console.log(monStringEnCriss.length);
// console.log(monStringEnCriss.toUpperCase());
// console.log(monStringEnCriss.toLowerCase());
// console.log(monStringEnCriss.repeat(3));
// let condition = monStringEnCriss.startsWith(" ");
// console.log(condition);
// condition = monStringEnCriss.includes("c");
// console.log(condition);
// console.log(monStringEnCriss.replaceAll("c", "b"));
// console.log(monStringEnCriss.padStart(20, "x"));
// console.log(monStringEnCriss.padEnd(20, "x"));


// let myString = "abcdefghij";
// console.log(myString.slice(2,4));   //returns "cd"
// console.log(myString.slice(4));     //returns what is after the n char
// console.log(myString.slice(-2));    //negative takes the n char from the end

let username = window.prompt("Enter your username");
console.log(username);