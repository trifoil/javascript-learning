# School-JS

https://youtu.be/lfmg-EJ8gm4

## Elementary commands

Declare variable and print into console

```
let y = 3.5;
let x;
x = 100;
console.log(x)
console.log("pizza")
window.alert(`alert!`);
```

Print into the element which id is "myH1" text content
```
document.getElementById("myH1").textContent = `Hi`
```

Print into the element which id is "myP" text content with the variable "age"
```
document.getElementById("myP").textContent = `you are ${age} years old`
```


## Arithmetic operands

```
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
```
let username = window.prompt("Enter name");
console.log(username);
```

Second option       
html : 
```
<h1 id="myH1">Welcome</h1>
<label>Username : </label><br>
<input id="myText"><br>
<button id="mySubmit">submit</button>
```
js : 
```
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Welcome ${username}`
}
```

## Type conversion

String to number, boolean, string
```
x=Number(x);
x=Boolean(x);
x=String(x);
```

## Const

Instead of 
```
let pi;
```

Write 
```
const PI;
```

## Count

```
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