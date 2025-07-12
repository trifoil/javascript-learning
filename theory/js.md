# JS

JavaScript is a programming language that makes websites interactive. Think of it as the "brain" that tells web pages what to do when users click buttons, fill forms, or interact with the page.

## Elementary commands

**Variables** are like labeled boxes where you store information. You can put different types of data in them: numbers, text, or true/false values.

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

**Arithmetic operators** let you do math with numbers, just like in school. You can add, subtract, multiply, divide, and more.

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

**User input** means getting information from people using your program. You can ask users to type something and then use that information in your code.

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

**Type conversion** is changing one type of data into another. For example, turning the text "42" into the number 42 so you can do math with it.

String to number, boolean, string
```js
x=Number(x);
x=Boolean(x);
x=String(x);
```

## Const

**Constants** are variables that never change their value. Once you set them, they stay the same throughout your program.

Instead of 
```js
let pi;
```

Write 
```js
const PI;
```

## Count

**Counting** is a common task in programming. This example shows how to create a simple counter that can go up, down, or reset to zero.

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

**Math objects** provide built-in mathematical functions. Instead of writing complex math formulas, you can use these ready-made functions for common calculations.

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

**Random numbers** are useful for games, simulations, and when you need unpredictable results. JavaScript can generate random numbers within any range you specify.

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

**Date and time** functions let you work with current time, create timestamps, and format dates for display.
```js
let today = new Date();
let hour = today.getHours();
```

## if statements

**If statements** let your program make decisions. Like in real life: "If it's raining, take an umbrella. Otherwise, don't." Your code can choose different paths based on conditions.

```js
if (){
}
else if (){
}
else {
}
```

## Logical operators

**Logical operators** combine conditions to make more complex decisions. They work like connectors in sentences: AND, OR, and NOT.

```js
&&      //AND
||      //OR
!       //NOT
```

## Checked property

**Checked property** refers to whether a checkbox is selected or not. This is useful for forms where users can select multiple options.

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

**Ternary operator** is a shorthand way to write simple if/else statements in one line. It's like a mini decision maker.

```js
let time = 6;
let greeting = time <= 12 ? "good morning" : "good afternoon";
console.log(greeting); // outputs "good morning"

let cat = true;
sound = cat ? "meow" : "woof";
console.log(sound); // outputs "meow"
```
## Switches

**Switch statements** are like multiple-choice questions. Instead of writing many if/else statements, you can choose from several options more cleanly.

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

**String methods** are built-in tools for working with text. They help you find, change, and manipulate strings without writing complex code.

```js
let myString = '   coca cola  ';                 
console.log(myString.charAt(0));            // display the char at index 0
console.log(myString.indexOf('a'));         // display the index of the first 'a' char
console.log(myString.lastIndexOf('a'));     // display the index of the last 'a' char 
console.log(myString.length);               // display the string length
myString = myString.trim();                 // trim both ends of the string
console.log(myString);                      // display the string 
console.log(myString.length);               // display the string length
console.log(myString.toUpperCase());        // set the whole string uppercase
console.log(myString.toLowerCase());
console.log(myString.repeat(3));
let condition = myString.startsWith(" ");
console.log(condition);
condition = myString.includes("c");
console.log(condition);
console.log(myString.replaceAll("c", "b"));
console.log(myString.padStart(15, "x"));
console.log(myString.padEnd(15, "x"));
```

## String slicing

**String slicing** lets you extract parts of text. Like cutting a piece of string - you can take the beginning, middle, or end of any text.

```js
let myString = "abcdefghij";
console.log(myString.slice(2,4));   //returns "cd"
console.log(myString.slice(4));     //returns what is after the n char
console.log(myString.slice(-2));    //negative takes the n char from the end
```
## Method chaining

**Method chaining** lets you perform multiple operations on the same data in one line. It's like a production line where each step builds on the previous one.
```js
let myString = "   Hello World   ";
let result = myString.trim().toUpperCase().slice(0, 5);
console.log(result); // "HELLO"
```

## Logical operators (continued)
```js
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense;  // true
let canVote = age >= 18 || age >= 16;    // true
let isMinor = !(age >= 18);              // false
```

## Strict equality

**Strict equality** compares both value and type. Regular equality (==) only compares values, but strict equality (===) also checks if the types match.
```js
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != "5");   // false (loose inequality)
console.log(5 !== "5");  // true (strict inequality)
```

## While loops

**While loops** repeat code as long as a condition is true. Think of it as "keep doing this while something is true."
```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);
```

## For loops

**For loops** repeat code a specific number of times. They're perfect when you know exactly how many times you want to do something.
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i -= 2) {
    console.log(i);
}

const fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

for (let index in fruits) {
    console.log(index, fruits[index]);
}
```

## Number guessing game

**Games** are great ways to practice programming concepts. This example combines loops, user input, and decision-making to create an interactive game.
```js
const MIN = 1;
const MAX = 100;
const answer = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let attempts = 0;
let guess;

while (guess !== answer) {
    guess = parseInt(prompt(`Guess a number between ${MIN} and ${MAX}`));
    attempts++;
    
    if (guess < answer) {
        alert("Too low!");
    } else if (guess > answer) {
        alert("Too high!");
    } else {
        alert(`Correct! It took you ${attempts} attempts.`);
    }
}
```

## Functions

**Functions** are reusable blocks of code. Like recipes - you write the instructions once, then use them many times with different ingredients (parameters).
```js
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function multiply(x, y = 1) {
    return x * y;
}

console.log(greet("Alice"));     // "Hello, Alice!"
console.log(add(5, 3));          // 8
console.log(multiply(4));        // 4
console.log(multiply(4, 3));     // 12
```

## Variable scope

**Variable scope** determines where variables can be accessed. Some variables are available everywhere (global), while others are only available within specific functions (local).
```js
let globalVar = "I'm global";

function testScope() {
    let localVar = "I'm local";
    console.log(globalVar);  // accessible
    console.log(localVar);   // accessible
}

testScope();
console.log(globalVar);      // accessible
// console.log(localVar);    // error - not accessible
```

## Temperature conversion program

**Real-world applications** show how programming solves practical problems. This example converts between different temperature scales.
```js
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let tempC = 25;
let tempF = celsiusToFahrenheit(tempC);
console.log(`${tempC}°C = ${tempF}°F`);

let tempF2 = 77;
let tempC2 = fahrenheitToCelsius(tempF2);
console.log(`${tempF2}°F = ${tempC2}°C`);
```

## Arrays

**Arrays** are ordered lists of items. Like a shopping list where each item has a position (first, second, third, etc.). You can add, remove, and change items in arrays.

```js
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");           // add to end
fruits.unshift("mango");        // add to beginning
fruits.pop();                   // remove from end
fruits.shift();                 // remove from beginning
fruits.splice(1, 1);            // remove at index 1
fruits.splice(1, 0, "pear");    // insert at index 1

console.log(fruits.length);     // array length
console.log(fruits.indexOf("banana")); // find index
console.log(fruits.includes("apple")); // check if exists
```

## Spread operator

**Spread operator** (...) lets you expand arrays and objects. It's like unpacking a box - you can spread out all the items inside.
```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

let obj1 = {name: "John"};
let obj2 = {age: 30};
let merged = {...obj1, ...obj2};
console.log(merged); // {name: "John", age: 30}
```

## Rest parameters

**Rest parameters** collect multiple arguments into an array. When you don't know how many items someone will give you, rest parameters gather them all up.
```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

function multiply(multiplier, ...args) {
    return args.map(element => multiplier * element);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
```

## Dice Roller program

**Utility functions** solve specific problems. This dice roller can simulate any type of dice for games or simulations.
```js
function rollDice(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollMultipleDice(count, sides = 6) {
    let results = [];
    for (let i = 0; i < count; i++) {
        results.push(rollDice(sides));
    }
    return results;
}

console.log(rollDice());           // random 1-6
console.log(rollDice(20));         // random 1-20
console.log(rollMultipleDice(3));  // [3, 1, 6]
```

## Random password generator

**Security tools** help create safe passwords. This generator creates random, secure passwords of any length you specify.
```js
function generatePassword(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return password;
}

console.log(generatePassword());     // 8 chars
console.log(generatePassword(12));   // 12 chars
```

## Callbacks

**Callbacks** are functions passed as arguments to other functions. They let you customize what happens when a function finishes its work.
```js
function processUser(name, callback) {
    let user = name.toUpperCase();
    callback(user);
}

processUser("john", function(user) {
    console.log("Hello, " + user);
});

// Using arrow function
processUser("jane", (user) => {
    console.log("Welcome, " + user);
});
```

## forEach()

**forEach()** is an array method that does something with each item in an array. It's like going through a list and performing an action on each item.
```js
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});

// Using arrow function
numbers.forEach(number => console.log(number * 2));
```

## map()

**map()** transforms each item in an array into something else. It creates a new array with the transformed items, like converting a list of names to uppercase.
```js
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(number) {
    return number * 2;
});

let squared = numbers.map(number => number ** 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(squared); // [1, 4, 9, 16, 25]
```

## filter()

**filter()** picks only items that meet certain criteria. It creates a new array with only the items you want, like finding all even numbers in a list.
```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evens = numbers.filter(function(number) {
    return number % 2 === 0;
});

let greaterThan5 = numbers.filter(number => number > 5);

console.log(evens);        // [2, 4, 6, 8, 10]
console.log(greaterThan5); // [6, 7, 8, 9, 10]
```

## reduce()

**reduce()** combines all items in an array into a single result. It's like adding up all numbers in a list or finding the total price of items in a cart.
```js
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

let product = numbers.reduce((acc, curr) => acc * curr, 1);

console.log(sum);    // 15
console.log(product); // 120
```

## Function expressions

**Function expressions** are another way to create functions. Instead of declaring them with a name, you assign them to variables.
```js
const greet = function(name) {
    return `Hello, ${name}!`;
};

const add = function(a, b) {
    return a + b;
};

console.log(greet("Alice")); // "Hello, Alice!"
console.log(add(5, 3));      // 8
```

## Arrow functions

**Arrow functions** are a shorter, modern way to write functions. They use => syntax and are great for simple, one-line operations.
```js
const greet = (name) => `Hello, ${name}!`;

const add = (a, b) => a + b;

const multiply = (x, y) => {
    let result = x * y;
    return result;
};

const noParams = () => "Hello World";

console.log(greet("Bob"));    // "Hello, Bob!"
console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20
console.log(noParams());      // "Hello World"
```

## JavaScript Objects

**Objects** are collections of related information. Like a filing cabinet where you group related data together - a person object might contain name, age, and address.
```js
let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(person.name);           // "John"
console.log(person["age"]);         // 30
console.log(person.greet());        // "Hello, I'm John"

person.job = "Developer";           // add property
delete person.city;                 // remove property
```

## What is THIS
```js
let person = {
    name: "John",
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

person.greet(); // "Hello, I'm John"

let greetFunction = person.greet;
greetFunction(); // "Hello, I'm undefined" (this is window/global)

// Arrow functions don't bind their own this
let person2 = {
    name: "Jane",
    greet: () => {
        console.log(`Hello, I'm ${this.name}`);
    }
};

person2.greet(); // "Hello, I'm undefined"
```

## Constructors
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);

console.log(person1.name);    // "John"
console.log(person2.greet()); // "Hello, I'm Jane"
```

## Classes
```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

let person = new Person("John", 30);
console.log(person.greet());  // "Hello, I'm John"
console.log(person.getInfo()); // "John is 30 years old"
```

## STATIC keyword
```js
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159;
}

console.log(MathUtils.add(5, 3));      // 8
console.log(MathUtils.multiply(4, 2)); // 8
console.log(MathUtils.PI);             // 3.14159
```

## Inheritance
```js
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak()); // "Buddy barks"
console.log(dog.breed);   // "Golden Retriever"
```

## SUPER keyword
```js
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    
    start() {
        return `${this.brand} is starting`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);  // calls parent constructor
        this.model = model;
    }
    
    start() {
        return super.start() + ` - ${this.model}`;
    }
}

let car = new Car("Toyota", "Camry");
console.log(car.start()); // "Toyota is starting - Camry"
```

## Getters & Setters
```js
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    
    get radius() {
        return this._radius;
    }
    
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            throw new Error("Radius must be positive");
        }
    }
    
    get area() {
        return Math.PI * this._radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.radius); // 5
console.log(circle.area);   // 78.54...
circle.radius = 10;
console.log(circle.area);   // 314.15...
```

## Destructuring
```js
// Array destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4, 5]

// Object destructuring
let person = {name: "John", age: 30, city: "NYC"};
let {name, age, country = "USA"} = person;
console.log(name, age, country); // "John" 30 "USA"

// Function parameter destructuring
function greet({name, age}) {
    return `Hello ${name}, you are ${age} years old`;
}
console.log(greet(person)); // "Hello John, you are 30 years old"
```

## Nested objects
```js
let user = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "gaming"],
    contact: {
        email: "john@email.com",
        phone: "555-1234"
    }
};

console.log(user.address.city);           // "New York"
console.log(user.hobbies[0]);             // "reading"
console.log(user.contact.email);          // "john@email.com"
```

## Arrays of objects
```js
let students = [
    {name: "Alice", grade: 85, age: 20},
    {name: "Bob", grade: 92, age: 19},
    {name: "Charlie", grade: 78, age: 21}
];

// Find student with highest grade
let topStudent = students.reduce((max, student) => 
    student.grade > max.grade ? student : max
);

// Filter students older than 19
let olderStudents = students.filter(student => student.age > 19);

// Map to get just names
let names = students.map(student => student.name);

console.log(topStudent.name);     // "Bob"
console.log(olderStudents.length); // 2
console.log(names);               // ["Alice", "Bob", "Charlie"]
```

## Sorting
```js
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
let fruits = ["banana", "apple", "cherry"];

// Sort numbers
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// Sort strings
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// Sort objects
let people = [
    {name: "John", age: 30},
    {name: "Alice", age: 25},
    {name: "Bob", age: 35}
];

people.sort((a, b) => a.age - b.age);
console.log(people[0].name); // "Alice"
```

## Shuffle an array
```js
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let cards = ["A♠", "K♠", "Q♠", "J♠"];
console.log(shuffleArray([...cards])); // random order
```

## Dates
```js
let now = new Date();
let specificDate = new Date("2023-12-25");
let customDate = new Date(2023, 11, 25); // month is 0-indexed

console.log(now.getFullYear());     // current year
console.log(now.getMonth() + 1);    // current month (1-12)
console.log(now.getDate());         // current day
console.log(now.getDay());          // day of week (0-6)
console.log(now.getHours());        // current hour
console.log(now.getMinutes());      // current minute

// Format date
let options = {year: 'numeric', month: 'long', day: 'numeric'};
console.log(now.toLocaleDateString('en-US', options)); // "December 25, 2023"
```

## Closures
```js
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Another example
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

let multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // 10
```

## setTimeout()
```js
console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("This runs after 1 second");
}, 1000);

console.log("End");

// Clear timeout
let timeoutId = setTimeout(() => {
    console.log("This won't run");
}, 3000);

clearTimeout(timeoutId);
```

## Digital Clock program
```js
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
```

## Stopwatch program
```js
let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
}

function updateStopwatch() {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
}

function updateDisplay() {
    let time = new Date(elapsedTime);
    let display = time.toISOString().substr(11, 8);
    document.getElementById("stopwatch").textContent = display;
}
```

## ES6 Modules
```js
// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// main.js
import { PI, add, multiply } from './math.js';
import * as MathUtils from './math.js';

console.log(PI);                    // 3.14159
console.log(add(5, 3));             // 8
console.log(MathUtils.multiply(4, 2)); // 8
```

## Asynchronous code
```js
console.log("Start");

setTimeout(() => {
    console.log("Async operation 1");
}, 1000);

setTimeout(() => {
    console.log("Async operation 2");
}, 500);

console.log("End");

// Output:
// Start
// End
// Async operation 2 (after 500ms)
// Async operation 1 (after 1000ms)
```

## Error handling
```js
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero");
    }
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("This always runs");
}

// Custom error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative");
    }
    return age;
}
```

## Calculator program
```js
class Calculator {
    constructor() {
        this.display = "0";
        this.previousValue = null;
        this.operation = null;
        this.newNumber = true;
    }
    
    appendNumber(number) {
        if (this.newNumber) {
            this.display = number;
            this.newNumber = false;
        } else {
            this.display += number;
        }
    }
    
    chooseOperation(operation) {
        if (this.display !== "0") {
            this.calculate();
            this.operation = operation;
            this.previousValue = parseFloat(this.display);
            this.newNumber = true;
        }
    }
    
    calculate() {
        if (this.previousValue !== null && !this.newNumber) {
            const current = parseFloat(this.display);
            let result;
            
            switch (this.operation) {
                case "+": result = this.previousValue + current; break;
                case "-": result = this.previousValue - current; break;
                case "*": result = this.previousValue * current; break;
                case "/": result = this.previousValue / current; break;
                default: return;
            }
            
            this.display = result.toString();
            this.operation = null;
            this.previousValue = null;
            this.newNumber = true;
        }
    }
    
    clear() {
        this.display = "0";
        this.previousValue = null;
        this.operation = null;
        this.newNumber = true;
    }
}
```

## What is the DOM?
```js
// DOM = Document Object Model
// It's a programming interface for HTML and XML documents
// Represents the page as a tree of objects that can be manipulated

// When a web page loads, the browser creates a DOM tree:
// document
// └── html
//     ├── head
//     │   ├── title
//     │   └── meta
//     └── body
//         ├── h1
//         ├── p
//         └── div
//             └── button
```

## Element selectors
```js
// Get element by ID
let element = document.getElementById("myId");

// Get elements by class name
let elements = document.getElementsByClassName("myClass");

// Get elements by tag name
let paragraphs = document.getElementsByTagName("p");

// Query selector (CSS selector)
let firstMatch = document.querySelector(".myClass");
let allMatches = document.querySelectorAll(".myClass");

// Examples
let button = document.querySelector("button");
let redElements = document.querySelectorAll(".red");
let specificDiv = document.querySelector("#container .item");
```

## DOM navigation
```js
let element = document.getElementById("myElement");

// Parent
let parent = element.parentElement;

// Children
let children = element.children;
let firstChild = element.firstElementChild;
let lastChild = element.lastElementChild;

// Siblings
let nextSibling = element.nextElementSibling;
let previousSibling = element.previousElementSibling;

// All nodes (including text nodes)
let childNodes = element.childNodes;
let firstNode = element.firstChild;
let lastNode = element.lastChild;
```

## Add & change HTML
```js
// Change content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Create new element
let newDiv = document.createElement("div");
newDiv.textContent = "New div";
newDiv.className = "my-class";

// Add to DOM
element.appendChild(newDiv);
element.insertBefore(newDiv, element.firstChild);

// Remove element
element.removeChild(newDiv);
newDiv.remove(); // Modern way

// Replace element
let replacement = document.createElement("span");
replacement.textContent = "Replacement";
element.replaceChild(replacement, newDiv);
```

## Mouse events
```js
let button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
    console.log("Button clicked!");
});

button.addEventListener("mouseenter", function(event) {
    console.log("Mouse entered button");
});

button.addEventListener("mouseleave", function(event) {
    console.log("Mouse left button");
});

button.addEventListener("mousedown", function(event) {
    console.log("Mouse button pressed");
});

button.addEventListener("mouseup", function(event) {
    console.log("Mouse button released");
});

button.addEventListener("dblclick", function(event) {
    console.log("Double clicked!");
});
```

## Key events
```js
let input = document.getElementById("myInput");

input.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
    console.log("Key code:", event.keyCode);
});

input.addEventListener("keyup", function(event) {
    console.log("Key released:", event.key);
});

input.addEventListener("keypress", function(event) {
    console.log("Character typed:", event.key);
});

// Prevent default behavior
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log("Enter prevented");
    }
});
```

## Hide/show HTML
```js
let element = document.getElementById("myElement");

// Hide element
element.style.display = "none";
element.style.visibility = "hidden";
element.style.opacity = "0";

// Show element
element.style.display = "block";
element.style.visibility = "visible";
element.style.opacity = "1";

// Toggle visibility
function toggleElement() {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Using classList
element.classList.add("hidden");
element.classList.remove("hidden");
element.classList.toggle("hidden");
```

## NodeLists
```js
// NodeList is array-like but not an array
let nodeList = document.querySelectorAll("p");

// Length
console.log(nodeList.length);

// Access by index
console.log(nodeList[0]);
console.log(nodeList.item(0));

// Loop through
for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i]);
}

// Convert to array
let array = Array.from(nodeList);
let array2 = [...nodeList];

// Use array methods
array.forEach(node => console.log(node));
```

## classList
```js
let element = document.getElementById("myElement");

// Add class
element.classList.add("new-class");
element.classList.add("class1", "class2");

// Remove class
element.classList.remove("old-class");
element.classList.remove("class1", "class2");

// Toggle class
element.classList.toggle("active");
element.classList.toggle("active", true);  // force add
element.classList.toggle("active", false); // force remove

// Check if has class
if (element.classList.contains("my-class")) {
    console.log("Element has my-class");
}

// Replace class
element.classList.replace("old-class", "new-class");
```

## Rock Paper Scissors
```js
function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    
    return {
        player: playerChoice,
        computer: computerChoice,
        result: result
    };
}

console.log(playGame("rock"));
```

## Image Slider
```js
let currentImageIndex = 0;
let images = [
    "image1.jpg",
    "image2.jpg", 
    "image3.jpg"
];

function showImage(index) {
    let img = document.getElementById("slider-image");
    img.src = images[index];
    updateDots();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function goToImage(index) {
    currentImageIndex = index;
    showImage(currentImageIndex);
}

function updateDots() {
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentImageIndex);
    });
}

// Auto-advance
setInterval(nextImage, 3000);
```

## Callback Hell?
```js
// Callback hell - nested callbacks become hard to read
getUser(1, function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            console.log(comments);
        });
    });
});

// Solutions: Promises, async/await, or named functions
function handleComments(comments) {
    console.log(comments);
}

function handlePosts(posts) {
    getComments(posts[0].id, handleComments);
}

function handleUser(user) {
    getPosts(user.id, handlePosts);
}

getUser(1, handleUser);
```

## Promises
```js
// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    
    if (success) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
});

// Using a promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Promise with setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
    console.log("2 seconds passed");
});

// Promise.all - wait for all promises
let promise1 = fetch("/api/users");
let promise2 = fetch("/api/posts");

Promise.all([promise1, promise2])
    .then(responses => {
        console.log("All requests completed");
    });
```

## Async/Await
```js
// Async function
async function fetchUser(id) {
    try {
        const response = await fetch(`/api/users/${id}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

// Using async/await
async function displayUser() {
    const user = await fetchUser(1);
    console.log(user.name);
}

// Multiple async operations
async function fetchUserAndPosts(userId) {
    const [user, posts] = await Promise.all([
        fetchUser(userId),
        fetchPosts(userId)
    ]);
    
    return { user, posts };
}

// Async arrow function
const fetchData = async () => {
    const data = await fetch("/api/data");
    return data.json();
};
```

## JSON files
```js
// Reading JSON
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

// Writing JSON (in Node.js)
const fs = require("fs");

let data = {
    name: "John",
    age: 30,
    city: "New York"
};

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

// Reading JSON (in Node.js)
let jsonData = fs.readFileSync("data.json", "utf8");
let parsedData = JSON.parse(jsonData);

// Browser localStorage
localStorage.setItem("user", JSON.stringify(data));
let user = JSON.parse(localStorage.getItem("user"));
```

## Fetch data from an API
```js
// Basic fetch
fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// POST request
fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "John",
        email: "john@example.com"
    })
})
.then(response => response.json())
.then(data => console.log(data));

// With async/await
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
```

## Weather App project
```js
class WeatherApp {
    constructor() {
        this.apiKey = "your-api-key";
        this.city = "";
    }
    
    async getWeather(city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
            );
            
            if (!response.ok) {
                throw new Error("City not found");
            }
            
            const data = await response.json();
            return this.formatWeatherData(data);
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    }
    
    formatWeatherData(data) {
        return {
            city: data.name,
            country: data.sys.country,
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };
    }
    
    displayWeather(weatherData) {
        if (!weatherData) {
            document.getElementById("weather").innerHTML = "City not found";
            return;
        }
        
        document.getElementById("weather").innerHTML = `
            <h2>${weatherData.city}, ${weatherData.country}</h2>
            <p>${weatherData.temperature}°C</p>
            <p>${weatherData.description}</p>
            <p>Humidity: ${weatherData.humidity}%</p>
            <p>Wind: ${weatherData.windSpeed} m/s</p>
        `;
    }
}

// Usage
const weatherApp = new WeatherApp();

document.getElementById("search-btn").addEventListener("click", async () => {
    const city = document.getElementById("city-input").value;
    const weather = await weatherApp.getWeather(city);
    weatherApp.displayWeather(weather);
});
```