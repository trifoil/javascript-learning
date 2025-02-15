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
    if (mycheckbox.checked) {
        subresult.textContent = 'subscribed';
    }
    else {
        subresult.textContent = 'unsubscribed';
    }
}
```

## Ternary operator

```js
let time = 6;
let greeting = time <= 12 ? "good morning" : "good afternoon";
console.log(greeting); // outputs "good morning"

let cat = true;
sound = cat ? "meow" : "woof";
console.log(sound); // outputs "meow"
```
## Switches

```js
let day = 1;
let result = '';
switch(day){
    case 1 : 
        result = 'lundi';
        break;

    case 2 : 
        result = 'mardi';
        break;
    default : 
        result = 'wrong input';
    }   
console.log(result)
```

Can also evaluate expressions :
```js
let i = 6;
let j = '';
switch (true){
    case i < 6:
        j = 'i is smaller than 6';
        break;
    case i > 6:
        j = 'i is bigger than 6';
        break;
    default : 
        j = 'i is 6';
        break;
}
console.log(j);
```

Also, the first condition checked breaks the switch :
```js
let i = 7;
let j = '';
switch (true){
    case i > 4:
        j = 'B';
        break;
    case i > 6:
        j = 'A';
        break;
}
console.log(j);
```
## String methods

```js

```

## String slicing

```js

```
## Method chaining
```js

```
## Logical operators
```js

```
## Strict equality

```js

```
## While loops
```js

```
## For loops
```js

```
## Number guessing game
```js

```
## Functions
```js

```
## Variable scope
```js

```
## Temperature conversion program
```js

```
## Arrays
```js

```
## Spread operator
```js

```
## Rest parameters
```js

```
## Dice Roller program
```js

```
## Random password generator
```js

```
## Callbacks
```js

```
## forEach()
```js

```
## map()
```js

```## filter()

```js

```
## vreduce()
```js

```
## Function expressions
```js

```
## Arrow functions
```js

```
## JavaScript Objects
```js

```
## What is THIS
```js

```
## Constructors
```js

```
## Classes
```js

```
## STATIC keyword
```js

```
## Inheritance

```js

```
## SUPER keyword 

```js

```
## Getters & Setters
```js

```
## Destructuring
```js

```
## Nested objects
```js

```
## Arrays of objects
```js

```
## Sorting
```js

```
## Shuffle an array
```js

```
## Dates
```js

```
## Closures
```js

```
## setTimeout()
```js

```
## Digital Clock program
```js

```
## Stopwatch program
```js

```
## ES6 Modules
```js

```
## Asynchronous code
```js

```
## Error handling
```js

```
## Calculator program
```js

```
## What is the DOM?
```js

```
## Element selectors
```js

```
## DOM navigation
```js

```
## Add & change HTML
```js

```
## Mouse events
```js

```
## Key events
```js

```
## Hide/show HTML
```js

```
## NodeLists
```js

```
## classList
```js

```
## Rock Paper Scissors
```js

```
## Image Slider
```js

```
## Callback Hell?
```js

```
## Promises
```js

```
## Async/Await
```js

```
## JSON files
```js

```
## Fetch data from an API
```js

```
## Weather App project