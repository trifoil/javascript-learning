# JS

## Elementary commands

Declare variable and print into console

```js
let y = 3.5;
let x;
x = 100;
console.log(x)
console.log("pizza")
window.alert(`alert!`);
```

Print into the element which id is "myH1" text content
```js
document.getElementById("myH1").textContent = `Hi`
```

Print into the element which id is "myP" text content with the variable "age"
```js
document.getElementById("myP").textContent = `you are ${age} years old`
```


## Arithmetic operands

```js
students = students + 1;    // plus
students = students - 1;    // minus
students = students * 2;    // times
students = students / 2;    // entire division
students = students ** 2;   // squared
students = students % 3;    // modulus
students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;
students ++;                // +1
students --;                // -1
```

## User input

First option
```js
let username = window.prompt("Enter name");
console.log(username);
```

Second option       
html : 
```js
<h1 id="myH1">Welcome</h1>
<label>Username : </label><br>
<input id="myText"><br>
<button id="mySubmit">submit</button>
```
js : 
```js
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Welcome ${username}`
}
```

## Type conversion

String to number, boolean, string
```js
x=Number(x);
x=Boolean(x);
x=String(x);
```

## Const

Instead of 
```js
let pi;
```

Write 
```js
const PI;
```

## Count

```js
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
```

## Math objects

```js
console.log(Math.PI)        //pi
console.log(Math.E)         //euler
z = Math.round(x);          //round closest
z = Math.ceil(x);           //round up
z = Math.floor(x);          //round down
z = Math.trunc(x);          //truncate
z = Math.pow(x,y);          //x^y
z = Math.sqrt(x);           //square root
z = Math.log(y);            //natural logarithm
z = Math.sin(x);
z = Math.abs(x);            //absolute value
z = Math.sign(x);           //sign of x
let max = Math.max(x,y,z);
let min = Math.min(x,y,z);
```

## Random

Between 1 and 100 
```js
let randomN = Math.ceil(Math.random()*100);
```

Between MIN and MAX
```js
const MIN = 50;
const MAX = 100;
let randomN = Math.ceil(Math.random()*(MAX-MIN))+MIN;
```

Full code 
```js
const MIN = 50;
const MAX = 100;
const myButton = document.getElementById("b");
const myText = document.getElementById("a");
let randomN = "click on the button to start"

myText.textContent = randomN
myButton.onclick = function(){
    randomN = Math.ceil(Math.random()*(MAX-MIN))+MIN;
    document.getElementById("b").textContent = randomN
}
```

## Time

To get the now time
```js
let today = new Date();
let hour = today.getHours();
```

## if statements

```js
if (){
}
else if (){
}
else {
}
```

## Logical operators

```js
&&      //AND
||      //OR
!       //NOT
```

## Checked property

```js
mycheckbox.onclick = function seecheck(){
    if(mycheckbox.checked){
        subresult.textContent = 'subscribed';
    }
    else {
        subresult.textContent = 'unsubscribed';
    }
}
```

## Ternary operator

```

```
## Switches
## String methods
## String slicing
## Method chaining
## Logical operators
## Strict equality
## While loops
## For loops
## Number guessing game
## Functions
## Variable scope
## Temperature conversion program
## Arrays
## Spread operator
## Rest parameters
## Dice Roller program
## Random password generator
## Callbacks
## forEach()
## map()
## filter()
## vreduce()
## Function expressions
## Arrow functions
## JavaScript Objects
## What is THIS
## Constructors
## Classes
## STATIC keyword
## Inheritance
## SUPER keyword 
## Getters & Setters
## Destructuring
## Nested objects
## Arrays of objects
## Sorting
## Shuffle an array
## Dates
## Closures
## setTimeout()
## Digital Clock program
## Stopwatch program
## ES6 Modules
## Asynchronous code
## Error handling
## Calculator program
## What is the DOM?
## Element selectors
## DOM navigation
## Add & change HTML
## Mouse events
## Key events
## Hide/show HTML
## NodeLists
## classList
## Rock Paper Scissors
## Image Slider
## Callback Hell?
## Promises
## Async/Await
## JSON files
## Fetch data from an API
## Weather App project